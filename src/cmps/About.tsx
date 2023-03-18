export const About = () => {
    return (
        <section className="about main-container">
            <div className="flex justify-between about-section">
                <div>
                    <h1>About me</h1>
                    <p>Fullstack / frontend developer</p>
                    <nav>
                        <a href="https://www.linkedin.com/in/baruch-yakubov-93b72b253/">
                            <i className="fa fa-linkedin"></i>
                        </a>
                        <a href="https://github.com/baruchyakubov">
                            <i className="fa fa-github"></i>
                        </a>
                    </nav>

                    <p className="about-details">Full-Stack / Frontend Web Developer with knowledge and experience writing single-page-applications using the latest WEB technologies such as Node.js, Vue.js, Vuex, React.js and Angular.
                        Graduate of the Coding Academy - An intensive coding bootcamp (640 hours) that qualifies Full Stack developer.</p>
                </div>
                <img src="https://res.cloudinary.com/dgvpl7cdq/image/upload/v1678746352/nkdo5v2atzjdjsjspaub_lpe6lt.jpg" alt="" />
                <div className="details">
                    <h2>Details</h2>
                    <span>Name:</span>
                    <p>Baruch Yakubov</p>
                    <span>Age:</span>
                    <p>21</p>
                    <span>Location:</span>
                    <p>Beit Arye</p>
                </div>
            </div>
        </section>
    )
}