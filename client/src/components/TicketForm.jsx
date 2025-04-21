export default function TicketForm() {
    return(
       <div className="app-wrapper">
            <div className="content-container">
                <div className="header">
                    <div className="mini-text">
                        <img src="/public/images/logo-full.svg" alt="logo"/>
                    </div>

                    <h1>Your Journey to Coding Conf 2025 Starts Here!</h1>
                    <p className="header-p">Secure your spot at next year's biggest coding conference</p>
                </div>
            <div className="ticket-container">
                <form>
                    <label htmlFor="avatar">Upload Avatar</label>
                    <div>
                        <input type="text" name="avatar"/>
                        <h4>Drag and drop or click to upload</h4>
                    </div>
                    <p>ICON  Upload your photo (JPG or PNG, max size: 500KB).</p>
                    
                    <label htmlFor="name">Full Name</label>
                    <input type="text" name="name" />

                    <label htmlFor="">Email Address</label>
                    <input type="email" name="email" />

                    <label htmlFor="gitHub">GitHub Username</label>
                    <input type="text" name="gitHub" />

                    <button type="submit">Generate My Ticket</button>
                </form>
            </div>

            </div>
       </div>
    )
}