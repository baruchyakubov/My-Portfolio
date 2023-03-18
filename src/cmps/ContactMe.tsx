export const ContactMe = () => {
    return (
        <section className="contact-section main-container">
            <h1>Contact Me</h1>
            <div className="contact-details flex column">
                <a target="_blank" className="flex align-center" href="https://mail.google.com/mail/?view=cm&fs=1&to=baruchyaku@gmail.com">
                    <img src="https://res.cloudinary.com/dgvpl7cdq/image/upload/v1679082793/rbgfkdeudtnfkvezeojw.png" alt="" />
                    <span> - baruchyaku@gmail.com</span>
                </a>
                <a target="_blank" className="flex align-center" href="https://wa.me/0545990712">
                    <img style={{ height: "32px", width: "32px" }} src="https://res.cloudinary.com/dgvpl7cdq/image/upload/v1679082935/d6eyeabccvcnqtjqwbry.png" alt="" />
                    <span> - 054-5990712</span>
                </a>
            </div>
        </section>
    )
}