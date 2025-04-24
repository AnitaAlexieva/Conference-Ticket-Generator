export default function TicketForm() {
    return (
        <div className="app-wrapper">
            <div className="content-container">
                <div className="header">
                    <div className="mini-text">
                        <img src="/public/images/logo-full.svg" alt="logo" />
                    </div>

                    <h1>Your Journey to Coding Conf 2025 Starts Here!</h1>
                    <h4 className="header-p">Secure your spot at next year's biggest coding conference.</h4>
                </div>
                <div className="ticket-container">
                    <form>
                        <label htmlFor="avatar">Upload Avatar</label>
                        <div className="avatar-div">
                            <button className="avatar-btn"><img src="/public/images/icon-upload.svg" alt="upload" /></button>
                            <h5>Drag and drop or click to upload</h5>
                        </div>
                            <p className="info-p"><img src="/public/images/icon-info.svg" alt="info" />  Upload your photo (JPG or PNG, max size: 500KB).</p>

                        <label htmlFor="name">Full Name</label>
                        <input type="text" name="name" />

                        <label htmlFor="">Email Address</label>
                        <input type="email" name="email" />

                        <label htmlFor="gitHub">GitHub Username</label>
                        <input type="text" name="gitHub" />

                        <button className="submit" type="submit">Generate My Ticket</button>
                    </form>
                </div>

            </div>
            <div className="attribution">
                Challenge by <a href="https://www.frontendmentor.io?ref=challenge">Frontend Mentor</a>.
                Coded by <a href="https://github.com/AnitaAlexieva">Anita Alexieva</a>.
            </div>
        </div>
    )
}