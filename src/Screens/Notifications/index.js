import { useState, useEffect } from "react";

import { DashboardLayout } from '../../Components/Layout/DashboardLayout';
import { notifications } from '../../Config/Data';

import NotificationCard from "../../Components/NotificationCard";

import './style.css'

const Notifications = () => {

  const [notificationState, setNotificationState] = useState([])
  const [notificationType, setNotificationType] = useState('all')

  useEffect(() => {

    document.title = 'Sean Outlet | Notifications';

    setNotificationState(notifications)
  }, [])

  return (
    <div>
      <DashboardLayout>
        <div className="dashCard">
          <div className="container-fluid">
            <div className="row mb-3">
              <div className="col-12">
                <h2 className="mainTitle">Notifications</h2>
              </div>
            </div>
            <div className="row mb-2">
              <div className="col-12">
                <select name="" id="" className="notificationSelect" onChange={(event) => {setNotificationType(event.target.value)}}>
                  <option value="all">All</option>
                  <option value="unread">Unread</option>
                  <option value="read">Read</option>
                </select>
              </div>
            </div>
            <div className="row">
              {notificationState.map((notification, index) => (
                <>
                  <div className="col-12" key={index}>
                    <NotificationCard text={notification.text} date={notification.date} time={notification.time} read={notification.read} />
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>


      </DashboardLayout>
    </div>
  )
}

export default Notifications;
