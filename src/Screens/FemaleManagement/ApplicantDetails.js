import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router";

import { femaleApplicants } from "./../../Config/Data";

import { DashboardLayout } from "../../Components/Layout/DashboardLayout";
import BackButton from "../../Components/BackButton";
import CustomButton from "../../Components/CustomButton";

const ApplicantDetails = () => {
  const { id } = useParams();

  const navigate = useNavigate()

  const [profileData, setProfileData] = useState({});

  useEffect(() => {

    document.title = 'Sean Outlet | Applicant Details';

    femaleApplicants.forEach((item) => {
      if (item.id == id) {
        setProfileData(item);
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
                Applicant's Information
              </h2>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-12">
              <div className="row mb-3">
                <div className="col-lg-4 offset-lg-4 text-center order-2 order-lg-1 mb-3">
                  <div className="profileImage">
                    <img src={`../${profileData.image}`} alt="User" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xl-3 col-md-6 mb-3">
                  <h4 className="secondaryLabel">Name</h4>
                  <p className="secondaryText">{profileData.name}</p>
                </div>
                <div className="col-xl-3 col-md-6 mb-3">
                  <h4 className="secondaryLabel">Username</h4>
                  <p className="secondaryText">{profileData.username}</p>
                </div>
                <div className="col-xl-3 col-md-6 mb-3">
                  <h4 className="secondaryLabel">Email Address</h4>
                  <p className="secondaryText">{profileData.email}</p>
                </div>
                <div className="col-xl-3 col-md-6 mb-3">
                  <h4 className="secondaryLabel">Phone Number</h4>
                  <p className="secondaryText">{profileData.phone}</p>
                </div>
                <div className="col-xl-3 col-md-6 mb-3">
                  <h4 className="secondaryLabel">Location</h4>
                  <p className="secondaryText">{profileData.location}</p>
                </div>
                <div className="col-xl-3 col-md-6 mb-3">
                  <h4 className="secondaryLabel">Age</h4>
                  <p className="secondaryText">{profileData.age}</p>
                </div>
                <div className="col-xl-6 mb-3">
                  <h4 className="secondaryLabel">Abour Yourself</h4>
                  <p className="secondaryText">{profileData.about}</p>
                </div>
                <div className="col-xl-3 col-md-6 mb-3">
                  <h4 className="secondaryLabel">Interests and Hobbies</h4>
                  {profileData.interest ? profileData.interest.map((item) => (
                    <p className="secondaryText">{item}</p>
                  )) :
                    ''}
                </div>
                <div className="col-xl-3 col-md-6 mb-3">
                  <h4 className="secondaryLabel">Pricing</h4>
                  <p className="secondaryText">${profileData.price}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-12">
              <CustomButton type="button" variant="primaryButton" text="Approve" className='me-2 mb-2' onClick={() => { navigate('/applicants') }} />
              <CustomButton type="button" variant="secondaryButton" className='mb-2' text="Reject" onClick={() => { navigate('/applicants') }} />
            </div>
          </div>
        </div>
      </DashboardLayout>
    </>
  );
};

export default ApplicantDetails;
