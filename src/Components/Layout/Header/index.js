import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { Navbar, Container, Nav, Dropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faUser,
  faBars,
  faEllipsisV,
  faSignOut,
} from "@fortawesome/free-solid-svg-icons";

import { notifications } from "../../../Config/Data";

import "./style.css";


export const Header = (props) => {

  const [notificationState, setNotificationState] = useState([])

  useEffect(() => {
    setNotificationState(notifications)
  }, [])

  return (
    <header>
      <Navbar className="customHeader" expand="md">
        <Container fluid>
          <Link to={"/dashboard"} className="siteLogo order-2 order-lg-1">
            <img src="./images/logo.png" alt="" />
          </Link>
          <Navbar.Toggle className="order-4 order-lg-2">
            <FontAwesomeIcon className="bell-icon" icon={faEllipsisV} />
          </Navbar.Toggle>
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="customCollapse order-3"
          >
            <Nav className="ms-auto">
              <Dropdown className="notiDropdown me-2">
                <Dropdown.Toggle variant="transparent" className="notButton">
                  <FontAwesomeIcon className="bellIcon" icon={faBell} />
                </Dropdown.Toggle>
                <Dropdown.Menu className="notiMenu" align="end">
                  <div className="notificationsBody">
                    {notificationState.slice(0, 5).map((notification) => (
                      <>
                        <Link className="singleNoti" key={notification.id}>
                          <div className="singleNotiIcon">
                            <FontAwesomeIcon
                              className="notiIcon"
                              icon={faBell}
                            />
                          </div>
                          <div className="singleNotiContent">
                            <p className="notiText">{notification.text}</p>
                            <p className="notiDateTime">
                              {notification.date} | {notification.time}
                            </p>
                          </div>
                        </Link>
                      </>
                    ))}
                  </div>
                  <div className="notiFooter">
                    <Link to={"/notifications"}>View All</Link>
                  </div>
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown className="userDropdown">
                <Dropdown.Toggle
                  variant="transparent"
                  className="notButton toggleButton"
                >
                  <div className="userImage">
                    <img
                      src="./images/userImage.png"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  {/* <img src={images.profilePic} alt="" className="img-fluid" /> */}
                </Dropdown.Toggle>
                <Dropdown.Menu className="userMenu" align="end">
                  <Link className="userMenuItem" to={'/profile'}>
                    <FontAwesomeIcon
                      className="me-2 yellow-text"
                      icon={faUser}
                    />{" "}
                    Profile
                  </Link>
                  <Link to="/" className="userMenuItem">
                    <FontAwesomeIcon
                      className="me-1 yellow-text"
                      icon={faSignOut}
                    />{" "}
                    Logout
                  </Link>
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
          </Navbar.Collapse>
          <button className="notButton ms-md-2 order-lg-4 order-md-4 order-1">
            <FontAwesomeIcon
              className="bell-icon"
              onClick={props.sidebarToggle}
              icon={faBars}
            />
          </button>
        </Container>
      </Navbar>
    </header>
  );
};
