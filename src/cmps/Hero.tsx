import { useEffect, useState } from "react"

export const Hero = () => {
    const [value, setValue] = useState(null)

    useEffect(() => {

    }, [])

    return (
        <section className="hero main-container">
            <div className="flex justify-between align-center">
                <div className="hero-details">
                    <h1>Hello!</h1>
                    <h3>I'm Baruch yakubov,</h3>
                    <h3>a creative Fullstack developer.</h3>
                </div>
                <img src="https://res.cloudinary.com/dgvpl7cdq/image/upload/v1679052522/rtsfzjvduxw1dwvuv1ut.png" alt="" />
            </div>
        </section>
    )
}