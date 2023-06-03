import { useState, useEffect } from "react";
import { useNavigate } from "react-router";


import { DashboardLayout } from "../../Components/Layout/DashboardLayout";
import CustomTable from "./../../Components/CustomTable";

import UseTableControls from "../../Config/UseTableControls";

import { paymentLog } from "./../../Config/Data";

import "./style.css";

export const Payments = () => {

  const {
     filterSort, filterSortValue, setFilterSortValue, filterSortValues, filterSearch, filterSearchValue, setFilterSearchValue, dateFilter, filterFrom, setFilterFrom, filterTo, setFilterTo
  } = UseTableControls();

  const navigate = useNavigate();

  const [payments, setPayments] = useState([])
  const [earning, setEarning] = useState([])


  useEffect(() => {

    document.title = 'Sean Outlet | Payment Logs';

    setPayments(paymentLog);

    let totalPay = 0;
    paymentLog.forEach((item) => {
      totalPay += item.commission
    })
    setEarning(totalPay)

  }, []);

  console.log(payments)

  const paymentHeaders = [
    {
      key: "id",
      title: "S.No",
    },
    {
      key: "maleName",
      title: "Male Name",
    },
    {
      key: "femaleName",
      title: "Female Name",
    },
    {
      key: "price",
      title: "Price",
    },
    {
      key: "adminCommission",
      title: "Admin Commission",
    },
    {
      key: "femaleRevenue",
      title: "Female Revenue",
    },
    {
      key: "datePaid",
      title: "Date Paid",
    },
  ];

  const sortingValues = [
    {
      value: 'all',
      text: 'All'
    },
    {
      value: 'status',
      text: 'Status'
    },
    {
      value: 'registered',
      text: 'Registered Date'
    },
  ]



  return (
    <>
      <DashboardLayout>
        <div className="container-fluid">
          <div className="row mb-3">
            <div className="col-12">
              <div className="dashCard">
                <div className="row align-items-baseline mb-3">
                  <div className="col-lg-6 mb-2">
                    <h2 className="mainTitle">Payment Logs</h2>
                  </div>
                  <div className="col-lg-6 text-end">
                    <h3 className="mainTitle">Overall Earning: <span className="primaryColor">${earning}</span></h3>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-12">
                    <CustomTable
                      headers={paymentHeaders}
                      
                      filterSort={true}
                      filterSortValue={filterSortValue}
                      setFilterSortValue={setFilterSortValue}
                      filterSortValues={sortingValues}

                      filterSearch={true}
                      filterSearchValue={filterSearchValue}
                      setFilterSearchValue={setFilterSearchValue}

                      dateFilter={true}
                      filterFrom={filterFrom}
                      setFilterFrom={setFilterFrom}
                      filterTo={filterTo}
                      setFilterTo={setFilterTo}

                    >
                      <tbody>
                        {payments.map((item, index) => (
                          <tr key={index}>
                            <td>{index + 1}</td>
                            <td><img src={item.male.image} className="thumbnail" />{item.male.name}</td>
                            <td><img src={item.female.image} className="thumbnail" />{item.female.name}</td>
                            <td>${item.price}</td>
                            <td>${item.commission}</td>
                            <td>${item.femaleRevenue}</td>
                            <td>{item.datePaid}</td>
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
