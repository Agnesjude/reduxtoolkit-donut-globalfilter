import react from "react";
import "./home.css"

export const Home = () => {
    return (
        <div className="header">
            <div className="header-tab">Products Monitoring Suppression</div>
            <div className="header-button-div">
                <div className="header-button">
                    Suppress/Postpone Alerts
                </div>
                <div className="header-button">
                    Download Reports
                </div>
            </div>
            <div className="header-content">
                <h5>Product Monitoring Tool:</h5>
                <ul>
                    <li>
                        As a user you can select Supress or postpone alert which you want to suppress.
                    </li>
                    <li>
                        border-radius property defines the radius
                    </li>
                </ul>
               
            </div>
        </div>
    )
}

export default Home;