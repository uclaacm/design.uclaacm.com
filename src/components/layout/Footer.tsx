import { useEffect, useRef, useState } from "react"
import "../../styles/Footer.css"

function Footer() {
    const ref = useRef<HTMLDivElement>(null)
    const [mountainY, setMountainY] = useState(80)
    const [mountainOpacity, setMountainOpacity] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            const el = ref.current
            if (!el) return
            const rect = el.getBoundingClientRect()
            const windowHeight = window.innerHeight
            const progress = Math.max(0, Math.min(1, (windowHeight - rect.top) / (windowHeight * 0.6)))
            setMountainY((1 - progress) * 80)
            setMountainOpacity(progress)
        }
        window.addEventListener('scroll', handleScroll, { passive: true })
        handleScroll()
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <div id="Footer" ref={ref}>
            <img src="/images/FooterSky.svg" className="footer__sky" alt="" />
            <img src="/images/cloud1.svg" className="footer__cloud1" alt="" />
            <img src="/images/cloud2.svg" className="footer__cloud2" alt="" />
            <img src="/images/Mountains.svg" className="footer__mountains" style={{ transform: `translateX(-50%) translateY(${mountainY}px)`, opacity: mountainOpacity }} alt="" />
            <img src="/images/FooterForeground.svg" className="footer__bg" alt="" />
            <div className="footer__socials">
                <a href="https://discord.gg/9AEf22AfnX" target="_blank" rel="noopener noreferrer">
                    <img src="/images/DiscordLogo.svg" alt="Discord" />
                </a>
                <a href="https://www.instagram.com/ucladesign/" target="_blank" rel="noopener noreferrer">
                    <img src="/images/InstagramLogo.svg" alt="Instagram" />
                </a>
                <a href="mailto:uclaacmdesign@gmail.com" >
                    <img src="/images/EmailLogo.svg" alt="Email" />
                </a>
            </div>
        </div>
    )
}
export default Footer