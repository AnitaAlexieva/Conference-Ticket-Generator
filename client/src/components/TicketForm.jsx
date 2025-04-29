import { useNavigate } from "react-router";

export default function TicketForm() {
    const navigate = useNavigate();

    const getInfo = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const name = formData.get('name');
        const email = formData.get('email');
        const github = formData.get('gitHub');

        if (!name || !email || !github) {
            setError("All fields are required!");
            return;
        }

        navigate("/ticket", { state: { info: { name, email, github } } });
    };

    const handleFileUpload = (e) =>{
        const file = e.target.files;
        console.log(file)
    }

    return (
        <div className="app-wrapper">
            <div className="content-container">
                <div className="header">
                    <div className="mini-text">
                        <img src="/images/logo-full.svg" alt="logo" />
                    </div>

                    <h1>Your Journey to Coding Conf 2025 Starts Here!</h1>
                    <h4 className="header-p">Secure your spot at next year's biggest coding conference.</h4>
                </div>
                <div className="ticket-container">
                    <form onSubmit={getInfo}>
                        <label htmlFor="avatar">Upload Avatar</label>
                        <div className="avatar-div" tabIndex="0">
                            <label htmlFor="avatar-upload" className="avatar-btn">
                                <img src="/images/icon-upload.svg" alt="upload" />
                            </label>
                            <input id="avatar-upload" type="file" onChange={handleFileUpload} style={{ display: 'none' }} />
                            <h5>Drag and drop or click to upload</h5>
                        </div>

                        <p className="info-p"><img src="/images/icon-info.svg" alt="info" />  Upload your photo (JPG or PNG, max size: 500KB).</p>

                        <label htmlFor="name">Full Name</label>
                        <input type="text" name="name" />

                        <label htmlFor="">Email Address</label>
                        <input type="email" name="email" placeholder="example@gmail.com" />

                        <label htmlFor="gitHub">GitHub Username</label>
                        <input type="text" name="gitHub" placeholder="@yourusername" />

                        <button className="submit" type="submit" >Generate My Ticket</button>
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