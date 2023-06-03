import { useState, useEffect } from "react";
import { useNavigate } from "react-router";


import { DashboardLayout } from "../../Components/Layout/DashboardLayout";
import CustomTable from "./../../Components/CustomTable";
import BackButton from "../../Components/BackButton";
import CustomInput from "../../Components/CustomInput";
import CustomButton from "../../Components/CustomButton";


import UseTableControls from "../../Config/UseTableControls";

import { commissionLogs } from "./../../Config/Data";

import "./style.css";

export const CommissionRate = () => {

  const {
    filterSort, filterSortValue, setFilterSortValue
  } = UseTableControls();

  const navigate = useNavigate();

  const [commissionData, setCommissionData] = useState({})
  const [commissionState, setCommissionState] = useState([])


  useEffect(() => {

    document.title = 'Sean Outlet | Commission Rate';

    setCommissionState(commissionLogs);
  }, []);
  
  const commissionHeaders = [
    {
      key: "id",
      title: "S.No",
    },
    {
      key: "oldCommission",
      title: "Old Commission",
    },
    {
      key: "newCommission",
      title: "New Commission",
    },
    {
      key: "updatedDate",
      title: "Updated Date",
    },
    {
      key: "effectiveDate",
      title: "Effective Date",
    },
    
  ];
  
  const sortingValues = [
    {
      value: 'all',
      text: 'All'
    },
    {
      value: 'updatedDate',
      text: 'Updated Date'
    },
    {
      value: 'effectiveDate',
      text: 'Effective Date'
    },
  ]
  
  const sendCommissionData = () => {
    console.log(commissionData)
    navigate('/female-management')
  }
  
  return (
    <>
      <DashboardLayout>
        <div className="container-fluid">
          <div className="row mb-3">
            <div className="col-12">
              <div className="dashCard">
                <div className="row align-items-baseline mb-3">
                  <div className="col-lg-6 mb-2">
                    <h2 className="mainTitle">
                      <BackButton />
                      Default Commission Rate
                    </h2>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xl-6 col-lg-8">
                    <form>
                      <div className="row">
                        <div className="col-12 mb-2">
                          <CustomInput label="Commission Rate" labelClass="mainLabel" id="rate" required type="text" placeholder="Enter Commission Rate" name="commissionrate" inputClass="mainInput" onChange={(event) => { setCommissionData({ ...commissionData, rate: event.target.value }) }} />
                        </div>
                        <div className="col-12 mb-2">
                          <CustomInput label="Effective From Date" labelClass="mainLabel" id="edate" required type="date" placeholder="Enter Effective From Date" name="edate" inputClass="mainInput" onChange={(event) => { setCommissionData({ ...commissionData, date: event.target.value }) }} />
                        </div>
                        <div className="col-12">
                          <CustomButton type="button" variant="primaryButton" text="Update" onClick={sendCommissionData} />
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-12">
              <div className="dashCard">
                <div className="row align-items-baseline mb-3">
                  <div className="col-lg-6 mb-2">
                    <h2 className="mainTitle">
                      Default Commission Rate Changes
                    </h2>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-12">
                    <CustomTable
                      headers={commissionHeaders}

                      filterSort={true}
                      filterSortValue={filterSortValue}
                      setFilterSortValue={setFilterSortValue}
                      filterSortValues={sortingValues}

                    >
                      <tbody>
                        {commissionState.map((item, index) => (
                          <tr key={index}>
                            <td>{index + 1}</td>
                            <td>${item.oldCommission}</td>
                            <td>${item.newCommission}</td>
                            <td>{item.updatedDate}</td>
                            <td>{item.effectiveDate}</td>
                          </tr>
                        ))}
                      </tbody>
                    </CustomTable>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DashboardLayout>
    </>
  );
};
