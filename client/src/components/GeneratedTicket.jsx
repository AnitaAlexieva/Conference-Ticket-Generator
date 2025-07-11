import { useLocation} from "react-router"

export default function GeneratedTicket() {
    const location = useLocation();
    const info = location.state?.info; 

    return (
        <div className="app-wrapper">
            <div className="content-container">
                <div className="header">
                    <div className="mini-text">
                        <img src="/images/logo-full.svg" alt="logo" />
                    </div>

                    <h1>Congrats, <span className="name-h">{info.name}! </span>Your ticket is ready.</h1>
                    <h4 className="header-p ticket">We've emailed your ticket to <span className="email-h">{info.email}</span> and will send updates in the run up event.</h4>

                    <div className="ticket-ready">
                    <div className="circle top"></div>
                        <div className="ticket-content">
                            <div className="mini-text">
                                <img src="/images/logo-full.svg" alt="logo" />
                                <p className="data">Jan 31, 2025 / Austin, TX</p>
                            </div>
                            
                            <div className="info-div">
                                <div>
                                    <img className="avatar-img" src={info.fileImg} alt="avatar" />
                                </div>
                                <div className="person-info">
                                    <h3 className="person-name">{info.name}</h3>
                                    <h5 className="github-profile"><img src="/images/icon-github.svg" alt="github" />{info.github}</h5>
                                </div>
                            </div>
                        </div>
                        <div className="ticket-number">
                            <p className="number">#01609</p>
                        </div>
                        <div className="circle bottom"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}