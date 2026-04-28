# Sprint: Home Page Polish

**Branch:** `anthony/home-page-polish`

## Setup
- [ ] Create and switch to your branch: `git checkout -b anthony/home-page-polish`
- [ ] Run `npm i` to install any new dependencies

---

## Carousel Polish
- [ ] Add more fun photos to the carousel slides (events, socials, etc.)
- [ ] Write engaging descriptions for each slide
  - Add some #spotted energy, you know the drill
- [ ] Make sure the carousel feels lively — not placeholder-y

## Hero Section
- [ ] Make "everyone" scroll/animate out on first page load
  - On launch, the word should visually scroll in
- [ ] Add ambient floating motion to the hero assets (toggle buttons, pantone chips, checkboxes, etc.)
  - Subtle, slow drift — not distracting, just enough to feel engaging
  - These already repel from cursor, so layer the idle float underneath that
- [ ] Make the header persistent (sticky) so it stays visible as you scroll down the page

## Stretch Goals
- [ ] Make the four corner handles around "everyone" draggable and expandable
  - Simulating the Figma pen tool / bounding box interaction
  - The blue selection box + handles should resize when dragged
  - Prob have to add a limit tho so users dont drag it all the way down
- [ ] Add a parallax depth effect to the three "What is ACM Design?" cards at the bottom
  - When the cursor is inside a card and moving, the background shifts in the opposite direction
  - Creates a fake depth / 3D effect
  - Should feel subtle and smooth

---

## Deliverables
- [ ] **Make a PR** to `main` with:
  - Updated carousel content (images + descriptions)
  - "everyone" scroll-in animation
  - Ambient floating motion on hero assets
  - Sticky header
  - (Stretch) Draggable bounding box handles
  - (Stretch) Parallax card effect
