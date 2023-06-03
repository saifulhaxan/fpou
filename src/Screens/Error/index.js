import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Error = () => {

    useEffect(() => {
        document.title = 'Sean Outlet | Error 404';
    }, [])

    return (
        <>
            <div className="errorContent">
                <img src="./images/error.png" alt="Error" />
                <h2>404</h2>
                <h3>Page not found</h3>
                <Link to={'/dashboard'} className='text-white'>Back to Website</Link>
            </div>
        </>
    );
};

export default Error