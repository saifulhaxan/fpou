import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

import { Dropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV, faEye, faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";

import { DashboardLayout } from "../../Components/Layout/DashboardLayout";
import CustomTable from "./../../Components/CustomTable";

import UseTableControls from "../../Config/UseTableControls";

import { feedbacks } from "./../../Config/Data";

import "./style.css";

export const Feedbacks = () => {

  const {
    filterSort, filterSortValue, setFilterSortValue, filterSortValues, filterSearch, filterSearchValue, setFilterSearchValue, dateFilter, filterFrom, setFilterFrom, filterTo, setFilterTo
  } = UseTableControls();

  const navigate = useNavigate();

  const [feedbacksState, setFeedbacks] = useState([])

  useEffect(() => {
    document.title = 'Sean Outlet | Feedbacks';


    setFeedbacks(feedbacks);
  }, []);

  const feedbackHeaders = [
    {
      key: "id",
      title: "S.No",
    },
    {
      key: "name",
      title: "Name",
    },
    {
      key: "type",
      title: "User Type",
    },
    {
      key: "date",
      title: "Date Filled",
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
                <div className="row align-items-baseline mb-3">
                  <div className="col-12 mb-2">
                    <h2 className="mainTitle">User Feedbacks</h2>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-12">
                    <CustomTable
                      headers={feedbackHeaders}

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
                        {feedbacksState.map((item, index) => (
                          <tr key={index}>
                            <td>{index + 1}</td>
                            <td><img src={item.user.image} alt="User" className="thumbnail" />{item.user.name}</td>
                            <td>{item.user.gender}</td>
                            <td>{item.date}</td>
                            <td>
                              <Dropdown className="tableDropdown">
                                <Dropdown.Toggle variant="transparent" className="notButton classicToggle">
                                  <FontAwesomeIcon icon={faEllipsisV} />
                                </Dropdown.Toggle>
                                <Dropdown.Menu align="end" className="tableDropdownMenu">
                                  <Link to={`/feedback-details/${item.id}`} className="tableAction"><FontAwesomeIcon icon={faEye} className="tableActionIcon" />View</Link>
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
