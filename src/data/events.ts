export type EventType = "workshop" | "panel" | "track"
export type Quarter = "Fall" | "Winter" | "Spring"

export interface Event {
    id: string
    title: string
    shortDescription: string
    fullDescription: string
    date: Date
    time: string
    location: string
    quarter: Quarter
    year: number
    academicYear: string
    type: EventType
    src: string
}

export const isPast = (e: Event): boolean => e.date < new Date()
export const isCurrent = (e: Event): boolean => e.date >= new Date()

export const events: Event[] = [
    {
        id: "s2026-w4-p5js",
        title: "Intro to p5.js Workshop",
        shortDescription:
            "Learn to create stunning generative visuals with p5.js, a beginner-friendly creative coding library.",
        fullDescription:
            "Happy week 4!! 🧡\n\nAre you a creative who wants to turn code into design? Come to our p5.js workshop and learn to create stunning visuals.\n\nIn this beginner friendly workshop you will learn how to navigate and use P5.js. This is a great and easy tool for bringing your design to life and adding interactivity! ✨💫\n\n🧡 RSVP: https://luma.com/470x7bag",
        date: new Date("2026-04-22"),
        time: "7–8PM",
        location: "Engineering VI, Room 289",
        quarter: "Spring",
        year: 2026,
        academicYear: "2025-2026",
        type: "workshop",
        src: "/images/Events/S2026-W4Workshop.png",
    },
    {
        id: "s2026-w3-cardmarking",
        title: "Digital Cardmarking Workshop",
        shortDescription:
            "Learn HTML and CSS to build your own customized animated digital cards in VS Code.",
        fullDescription:
            "Are you interested in learning HTML and CSS to make cool animated cards? 💌\n\nCome to our workshop and learn how to navigate VS Code. We will teach you how to make a project and create your own customized digital cards. All skill levels welcome!! 💻\n\n🧡 RSVP: https://luma.com/nt8h0o7t",
        date: new Date("2026-04-15"),
        time: "7–8PM",
        location: "Engineering VI, Room 289",
        quarter: "Spring",
        year: 2026,
        academicYear: "2025-2026",
        type: "workshop",
        src: "/images/Events/S2026-W3Workshop.png",
    },
    {
        id: "s2026-w2-photoshop",
        title: "Intro to Photoshop Workshop",
        shortDescription:
            "Break into design with a hands-on intro to Photoshop and learn to create your own designs from scratch.",
        fullDescription:
            "Happy week 2! Come join us for an intro to design with Photoshop workshop! 📸\n\nThis is a great way for beginners to break into design. In this workshop, you will learn how to navigate Photoshop and how to use its features to create your own designs. 🎨\n\nAlso join us for a ShareTea boba run social after the workshop at 8PM!! 🧋\n\n🧡 RSVP w/ Luma, link in bio!",
        date: new Date("2026-04-09"),
        time: "6–8PM",
        location: "Boelter 8500",
        quarter: "Spring",
        year: 2026,
        academicYear: "2025-2026",
        type: "workshop",
        src: "/images/Events/S2026-W2Workshop.png",
    },
    {
        id: "s2026-w1-portfolio",
        title: "Build a Standout Design Portfolio",
        shortDescription:
            "Learn how to present your skills through a professionally developed portfolio and shape your personal brand.",
        fullDescription:
            "Do you want a strong portfolio that stands out? 🌟 Want to learn how to brand yourself? Join us for our first workshop of the spring 🌸\n\nLearn how to best present yourself and your skills through a professionally developed design portfolio. Learn about personal branding and shape your unique style. Open to all skill levels!!!\n\n🧡 Excited to see you all!",
        date: new Date("2026-04-02"),
        time: "6–8PM",
        location: "Boelter 8500",
        quarter: "Spring",
        year: 2026,
        academicYear: "2025-2026",
        type: "workshop",
        src: "/images/Events/S2026-W1Workshop.png",
    },
    {
        id: "w2026-ai-design",
        title: "AI + Design Panel",
        shortDescription:
            "Hear from guest speakers on AI tools for frontend development, human-centered AI, and human-computer interaction.",
        fullDescription:
            "Interested in the intersection between AI and Design?\n\nCome hear from guest speakers about AI tools for frontend development, human-centered AI and XR, and human-computer interaction.\n\nAfterwards, you'll get the chance to apply what you've learned in a short hands-on segment.\n\nFeaturing a demo, free Claude Pro access, and snacks by Claude Code!\n\n RSVP: tinyurl.com/acm-ai-design",
        date: new Date("2026-01-29"),
        time: "4–6PM",
        location: "Engineering VI, Room 289",
        quarter: "Winter",
        year: 2026,
        academicYear: "2025-2026",
        type: "panel",
        src: "/images/Events/W2026-AIxDesign.png",
    },
    {
        id: "w2026-projects-track",
        title: "Projects Track",
        shortDescription:
            "A beginner-friendly 10-week series where you build a full PM-led product from ideation to Figma prototype.",
        fullDescription:
            "🎨 Introducing ACM Design's Projects Track! This 10-week, beginner-friendly series is a chance for you to dive deeper into design by working on a full, PM-led product from ideation to prototype 💻\n\nYou'll collaborate in small teams during weekly 2-hour work sessions 👫, gain guided experience in Figma, and walk away with a portfolio-ready project—all in a supportive and low-commitment environment.\n\nThis is perfect for anyone who's enjoyed our workshops and wants to take the next step in design. 🤩 🧡",
        date: new Date("2026-01-07"),
        time: "6–8PM",
        location: "MS 5200",
        quarter: "Winter",
        year: 2026,
        academicYear: "2025-2026",
        type: "track",
        src: "/images/Events/W2026-ProjectsTrack.png",
    },
    {
        id: "f2025-design-track",
        title: "Design Workshop Track",
        shortDescription:
            "Learn UX/UI design and Figma skills—from wireframes to prototypes—with no prior experience needed.",
        fullDescription:
            "Are you a beginner learning UX/UI design? 🤔 Or maybe, you're a designer trying to refresh your Figma skills! Join ACM Design as we jump start our Design Workshop Series this week! 🎨💫\n\nLearn how to use Figma for creating wireframes and prototypes and Framer for building a website! You'll be picking up a new skill every Tuesday, with no prior experience necessary. 🧘‍♀️\n\n Starts October 14 — completely beginner friendly!\n\nMark your calendars, we'll see you there! 🧡",
        date: new Date("2025-10-14"),
        time: "7–8PM",
        location: "Engineering VI 289",
        quarter: "Fall",
        year: 2025,
        academicYear: "2025-2026",
        type: "track",
        src: "/images/Events/F2025-DesignTrack.jpg",
    },
    {
        id: "f2025-dev-track",
        title: "Dev Workshop Track",
        shortDescription:
            "Learn front-end fundamentals from HTML/CSS to React and walk away with a fully coded portfolio.",
        fullDescription:
            "Curious about front-end development? 💻✨ Want to bring your designs to life through code? Join ACM Design for our Dev Workshop Series! 🚀\n\nPerfect for those who want to learn the fundamentals of front-end development, from HTML and CSS to JavaScript and React. 🌐 By the end of the series, you'll have a fully coded portfolio as your finished product! 🤩\n\n💡 Starts October 15 — no previous coding experience needed!\n\nWe can't wait to see you there! 🧡",
        date: new Date("2025-10-15"),
        time: "6–7PM",
        location: "Boelter 5273",
        quarter: "Fall",
        year: 2025,
        academicYear: "2025-2026",
        type: "track",
        src: "/images/Events/F2025-DevTrack.jpg",
    },
]
