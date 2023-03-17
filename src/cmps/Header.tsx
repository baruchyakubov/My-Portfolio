import { useEffect, useState } from "react"
import { MenuLogo } from "./MenuLogo"

export const Header = () => {
    const [value, setValue] = useState(null)

    useEffect(() => {

    }, [])

    return (
        <header className="Header main-container">
            <div className="flex align-center justify-between">
                <h1>My Portfolio</h1>
                <nav>
                    <a href="">About me</a>
                    <a href="">Skills</a>
                    <a href="">Projects</a>
                    <a href="">Education</a>
                    <a href="">Contact me</a>
                </nav>
                {/* <div className="menu-mobile">
                    <MenuLogo></MenuLogo>
                </div> */}
            </div>
        </header>
    )
}