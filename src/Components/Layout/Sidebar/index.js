import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBorderAll,
  faMars,
  faVenus,
} from "@fortawesome/free-solid-svg-icons";
import {
  faClipboard,
  faCreditCard,
  faMessage,
} from "@fortawesome/free-regular-svg-icons";

import "./style.css";

export const Sidebar = (props) => {
  return (
    <div className={`sidebar ${props.sideClass}`} id="sidebar">
      <ul className="list-unstyled">
        <li className="sidebar-li">
          <Link className="sideLink" to="/dashboard">
            <span className="sideIcon">
              <FontAwesomeIcon icon={faBorderAll} />
            </span>
            <span className="sideLinkText">Dashboard</span>
          </Link>
        </li>
        <li className="sidebar-li">
          <Link className="sideLink" to="/male-management">
            <span className="sideIcon">
              <FontAwesomeIcon icon={faMars} />
            </span>
            <span className="sideLinkText">Male Management</span>
          </Link>
        </li>
        <li className="sidebar-li">
          <Link className="sideLink" to="/female-management">
            <span className="sideIcon">
              <FontAwesomeIcon icon={faVenus} />
            </span>
            <span className="sideLinkText">Female Management</span>
          </Link>
        </li>
        <li className="sidebar-li">
          <Link className="sideLink" to="/misconduct-reports">
            <span className="sideIcon">
              <FontAwesomeIcon icon={faClipboard} />
            </span>
            <span className="sideLinkText">Misconduct Reports</span>
          </Link>
        </li>
        <li className="sidebar-li">
          <Link className="sideLink" to="/payment-logs">
            <span className="sideIcon">
              <FontAwesomeIcon icon={faCreditCard} />
            </span>
            <span className="sideLinkText">Payment Logs</span>
          </Link>
        </li>
        <li className="sidebar-li">
          <Link className="sideLink" to="/feedbacks">
            <span className="sideIcon">
              <FontAwesomeIcon icon={faMessage} />
            </span>
            <span className="sideLinkText">User Feedbacks</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};
