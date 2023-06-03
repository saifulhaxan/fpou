import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router";

import { feedbacks } from "./../../Config/Data";

import { DashboardLayout } from "../../Components/Layout/DashboardLayout";
import BackButton from "../../Components/BackButton";

const FeedbackDetails = () => {
  const { id } = useParams();

  const navigate = useNavigate()

  const [feedbackData, setFeedbackData] = useState({});

  useEffect(() => {
    document.title = 'Sean Outlet | Feedback Details';

    feedbacks.forEach((item) => {
      if (item.id == id) {
        setFeedbackData(item);
      }
    });
  });

  return (
    <>
      <DashboardLayout>
        <div className="dashCard mb-4">
          <div className="row mb-3">
            <div className="col-12">
              <h2 className="mainTitle">
                <BackButton />
                User Feedback
              </h2>
            </div>
          </div>
          <div className="row mb-3">
            {feedbackData.user ?
              <div className="col-12">

                <div className="row mb-3">
                  <div className="col-lg-4 offset-lg-4 text-center order-2 order-lg-1 mb-3">
                    <div className="profileImage">
                      <img src={`../${feedbackData.user.image}`} alt="User" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xl-3 col-md-6 mb-3">
                    <h4 className="secondaryLabel">Name</h4>
                    <p className="secondaryText">{feedbackData.user.name}</p>
                  </div>
                  <div className="col-xl-3 col-md-6 mb-3">
                    <h4 className="secondaryLabel">Username</h4>
                    <p className="secondaryText">{feedbackData.user.username}</p>
                  </div>
                  <div className="col-xl-3 col-md-6 mb-3">
                    <h4 className="secondaryLabel">User Type</h4>
                    <p className="secondaryText">{feedbackData.user.gender}</p>
                  </div>
                  <div className="col-xl-3 col-md-6 mb-3">
                    <h4 className="secondaryLabel">Email Address</h4>
                    <p className="secondaryText">{feedbackData.user.email}</p>
                  </div>
                  <div className="col-12 mb-3">
                    <h4 className="secondaryLabel">Subject</h4>
                    <p className="secondaryText">{feedbackData.subject}</p>
                  </div>
                  <div className="col-12 mb-3">
                    <h4 className="secondaryLabel">Message</h4>
                    <p className="secondaryText">{feedbackData.message}</p>
                  </div>
                </div>
              </div> : ''}

          </div>
        </div>
      </DashboardLayout>
    </>
  );
};

export default FeedbackDetails;
