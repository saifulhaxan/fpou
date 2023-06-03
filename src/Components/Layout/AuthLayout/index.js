
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeftLong } from "@fortawesome/free-solid-svg-icons";

import "./style.css";

export const AuthLayout = (props) => {
    return (
        <>
            <section className="authBg">
                <div className='container'>
                    <div className="row g-0 authBox">
                        <div className="col-lg-6 d-none d-lg-block">
                            <div className='authImage'>
                            <img src="./images/authImage.png" alt="authImage" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="authFormWrapper">
                                <div className="authForm">
                                    <div className="authLogo">
                                        <img src="./images/logo.png" alt="authLogo" />
                                    </div>
                                    <div className="authFormHeader">
                                        <h2 className="authTitle">{props?.authTitle}</h2>
                                        <p className="authPara">{props?.authPara}</p>
                                    </div>
                                    {props?.children}
                                    {props?.backOption &&
                                        <div className="text-center mt-4">
                                            <Link to={'/login'} className='grayColor text-decoration-none fw-bold'><FontAwesomeIcon icon={faLeftLong} className='primaryColor me-2' />Back To Login</Link>
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
