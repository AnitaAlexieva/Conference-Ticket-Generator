import { useRef, useState } from "react";
import { useNavigate } from "react-router";

export default function TicketForm() {
    const navigate = useNavigate();
    const [previewImg, setPreviewImg] = useState(null);
    const [error, setError] = useState(null)
    const [emailError, setEmailError] = useState(null);
    const fileInputRef = useRef(null);


    const getInfo = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const name = formData.get('name');
        const email = formData.get('email');
        const github = formData.get('gitHub');

        if (!previewImg || !name || !email || !github) {
            setError("All fields are required!");
            return;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setEmailError("Please enter a valid email address.");
            return;
        }

        navigate("/ticket", { state: { info: { fileImg:previewImg, name, email, github } } });
    };

    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        const allowedTypes = ['image/jpeg', 'image/png'];

        if (!file) {
            return
        }

        if (file.size > 500 * 1024) {
            setError("The file is too large.The size must be max 500KB");
            setPreviewImg(null);
            return;
        }

        if (!allowedTypes.includes(file.type)) {
            setError("Invalid file type. Only JPG or PNG are allowed");
            setPreviewImg(null);
            return;
        }

        const imageLink = URL.createObjectURL(file);
        setPreviewImg(imageLink);
        setError(null);

    };

    const handleDropFile = (e) => {
        e.preventDefault();
        const file = e.dataTransfer.files[0];
        handleFileUpload({ target: { files: [file] } })
    }
    const handleDragOver = (e) => {
        e.preventDefault();
    }
    const handleDrageLeave = (e) => {
        e.preventDefault()
    }


    const handleChangeImage = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const handleRemoveImage = () => {
        setPreviewImg(null);
        setError(null);
        if (fileInputRef.current) {
            fileInputRef.current.value = null;
        }
    };
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
                        <div className="avatar-div" tabIndex="0" onDragOver={handleDragOver} onDrop={handleDropFile} onDragLeave={handleDrageLeave}>
                            <input
                                id="avatar-upload"
                                ref={fileInputRef}
                                type="file"
                                name="file-img"
                                onChange={handleFileUpload}
                                style={{ display: 'none' }}
                            />
                            {previewImg ?
                                (

                                    <div className="avatar-content">
                                        <img className="avatar-img" src={previewImg} alt="upload" />
                                        <div className="buttons">
                                            <button type="button" className="remove-btn" onClick={handleRemoveImage}>Remove Image</button>
                                            <button type="button" className="change-btn" onClick={handleChangeImage}>Change Image</button>
                                        </div>
                                    </div>

                                ) : (
                                    <div className="upload-wrapper">
                                        <label htmlFor="avatar-upload" className="avatar-btn">
                                            <img className="upload-icon" src="/images/icon-upload.svg" alt="upload" />
                                        </label>
                                        <h5>Drag and drop or click to upload</h5>
                                    </div>
                                )}
                        </div>
                        {error ? (
                            <p className="info-p error-message"><img src="/images/icon-info.svg" alt="info" /> {error}</p>
                        ) : (
                            <p className="info-p"><img src="/images/icon-info.svg" alt="info" />  Upload your photo (JPG or PNG, max size: 500KB).</p>
                        )}

                        <label htmlFor="name">Full Name</label>
                        <input type="text" name="name" />

                        <label htmlFor="email">Email Address</label>

                        <input className={emailError ? "email-error" : ""} type="text" name="email" placeholder="example@gmail.com" />


                        {emailError && (<p className="info-p error-message"><img src="/images/icon-info.svg" alt="info" /> {emailError}</p>)}
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