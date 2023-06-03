import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

import { Dropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV, faEye, } from "@fortawesome/free-solid-svg-icons";

import { DashboardLayout } from "../../Components/Layout/DashboardLayout";
import CustomTable from "./../../Components/CustomTable";
import BackButton from "../../Components/BackButton";

import UseTableControls from "../../Config/UseTableControls";

import { femaleApplicants } from "./../../Config/Data";


import "./style.css";

export const Applicants = () => {

  const {
    filterSort, filterSortValue, setFilterSortValue, filterSortValues, filterSearch, filterSearchValue, setFilterSearchValue, dateFilter, filterFrom, setFilterFrom, filterTo, setFilterTo
  } = UseTableControls();

  const navigate = useNavigate();

  const [data, setData] = useState([]);


  useEffect(() => {

    document.title = 'Sean Outlet | Applicants';

    setData(femaleApplicants);
  }, []);

  const femaleHeaders = [
    {
      key: "id",
      title: "S.No",
    },
    {
      key: "name",
      title: "Female Name",
    },
    {
      key: "username",
      title: "Username",
    },
    {
      key: "email",
      title: "Email Address",
    },
    {
      key: "phone",
      title: "Phone",
    },
    {
      key: "actions",
      title: "Actions",
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
                <div className="row mb-3">
                  <div className="col-12 mb-2">
                    <h2 className="mainTitle"><BackButton />Female Applicants</h2>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-12">
                    <CustomTable
                      headers={femaleHeaders}

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
                        {data.map((item, index) => (
                          <tr key={item.id}>
                            <td>{index+1}</td>
                            <td className="text-capitalize">
                              <img
                                src={item.image}
                                alt="thumbnail"
                                className="thumbnail"
                              />
                              {item.name}
                            </td>
                            <td>{item.username}</td>
                            <td>{item.email}</td>
                            <td>{item.phone}</td>
                            <td>
                              <Dropdown className="tableDropdown">
                                <Dropdown.Toggle variant="transparent" className="notButton classicToggle">
                                  <FontAwesomeIcon icon={faEllipsisV} />
                                </Dropdown.Toggle>
                                <Dropdown.Menu align="end" className="tableDropdownMenu">
                                  <Link to={`/applicant-details/${item.id}`} className="tableAction"><FontAwesomeIcon icon={faEye} className="tableActionIcon" />View</Link>
                                </Dropdown.Menu>
                              </Dropdown>
                            </td>
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
