import { useEffect, useRef, useState } from 'react'

interface Rect { x: number; y: number; w: number; h: number }

const SKIP = 'a, button, input, select, textarea, label, [role="button"], [data-floating]'
const MIN_DRAG = 6

function SelectionRect() {
    const [rect, setRect] = useState<Rect | null>(null)
    const start    = useRef<{ x: number; y: number } | null>(null)
    const isDrag   = useRef(false)
    const liveRect = useRef<Rect | null>(null)

    useEffect(() => {
        const onDown = (e: MouseEvent) => {
            if (e.button !== 0) return
            const target = e.target as HTMLElement
            if (target.closest(SKIP)) return
            if (window.getComputedStyle(target).cursor === 'pointer') return
            start.current  = { x: e.clientX, y: e.clientY }
            isDrag.current = false
        }

        const onMove = (e: MouseEvent) => {
            if (!start.current) return
            const dx = e.clientX - start.current.x
            const dy = e.clientY - start.current.y
            if (!isDrag.current && Math.sqrt(dx * dx + dy * dy) < MIN_DRAG) return
            isDrag.current = true
            const r: Rect = {
                x: Math.min(start.current.x, e.clientX),
                y: Math.min(start.current.y, e.clientY),
                w: Math.abs(dx),
                h: Math.abs(dy),
            }
            liveRect.current = r
            setRect(r)
        }

        const onUp = () => {
            const finalRect  = liveRect.current
            const wasDragging = isDrag.current
            start.current    = null
            liveRect.current = null
            isDrag.current   = false
            setRect(null)

            // Dispatch the rect coords — let consumers decide what to select
            if (wasDragging && finalRect) {
                window.dispatchEvent(new CustomEvent('float-rect-drawn', { detail: finalRect }))
            }
        }

        window.addEventListener('mousedown', onDown)
        window.addEventListener('mousemove', onMove)
        window.addEventListener('mouseup',   onUp)
        return () => {
            window.removeEventListener('mousedown', onDown)
            window.removeEventListener('mousemove', onMove)
            window.removeEventListener('mouseup',   onUp)
        }
    }, [])

    if (!rect) return null

    return (
        <div style={{
            position:     'fixed',
            left:         rect.x,
            top:          rect.y,
            width:        rect.w,
            height:       rect.h,
            border:       '1.5px solid #3B82F6',
            background:   'transparent',
            pointerEvents:'none',
            zIndex:       99999,
        }} />
    )
}

export default SelectionRect
