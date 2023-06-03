import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router";

import { reports } from "./../../Config/Data";

import { DashboardLayout } from "../../Components/Layout/DashboardLayout";
import BackButton from "../../Components/BackButton";
import CustomButton from "../../Components/CustomButton";

const ReportDetails = () => {
  const { id } = useParams();

  const navigate = useNavigate()

  const [reportData, setReportData] = useState({});

  useEffect(() => {
    reports.forEach((item) => {

    document.title = 'Sean Outlet | Report Details';

      if (item.id == id) {
        setReportData(item);
      }
    });
  });

  return (
    <>
      <DashboardLayout>
        <div className="dashCard mb-4">
          <div className="row mb-4">
            <div className="col-12">
              <h2 className="mainTitle">
                <BackButton />
                Misconduct Report
              </h2>
            </div>
          </div>
          <div className="row mb-3">
            {reportData.reportedUser ?
              <div className="col-12">
                <div className="row">
                  <div className="col-xl-3 col-md-6 mb-3">
                    <h4 className="secondaryLabel">Name</h4>
                    <p className="secondaryText">{reportData.reportedUser.name}</p>
                  </div>
                  <div className="col-12 mb-3">
                    <h4 className="secondaryLabel">Reason</h4>
                    <p className="secondaryText">{reportData.reason}</p>
                  </div>
                </div>
                <div className="col-12">
                  <CustomButton type='button' variant='primaryButton' text='View Profile' onClick={() => {navigate(`/male-details/${reportData.reportedUser.id}`)}}/>
                </div>
              </div> : ''}

          </div>
        </div>
      </DashboardLayout>
    </>
  );
};

export default ReportDetails;
