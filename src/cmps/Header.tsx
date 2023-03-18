import { useState } from "react"

export const Header = () => {
    const [isNavOpened, setIsNavOpened] = useState<boolean>(false)

    const scrollTo = (direction: string) => {
        if(isNavOpened) setIsNavOpened(false)
        const element = document.querySelector(direction)
        element?.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <>
            <div onClick={() => setIsNavOpened(false)} className={`opacity-wrapper ${isNavOpened ? 'opened' : ''}`}></div>
            <header className="Header main-container">
                <div className="flex align-center justify-between">
                    <h1>My Portfolio</h1>
                    <nav className={isNavOpened ? 'opened' : ''}>
                        <p onClick={() => scrollTo('.about')}>About me</p>
                        <p onClick={() => scrollTo('.project-list')}>Projects</p>
                        <p onClick={() => scrollTo('.Skills-section')}>Skills</p>
                        <p onClick={() => scrollTo('.contact-section')}>Contact me</p>
                    </nav>
                    <img onClick={() => setIsNavOpened(true)} src="https://res.cloudinary.com/dgvpl7cdq/image/upload/v1679157585/r27aoegu7kkukrvtvnjj.png" alt="" />
                </div>
            </header>
        </>
    )
}
