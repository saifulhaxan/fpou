import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

import { Dropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV, faEye, faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";

import { DashboardLayout } from "../../Components/Layout/DashboardLayout";
import CustomTable from "./../../Components/CustomTable";
import CustomModal from "../../Components/CustomModal";

import UseTableControls from "../../Config/UseTableControls";


import { maleData } from "./../../Config/Data";

import "./style.css";

export const MaleManagement = () => {

  const {
    filterSort, filterSortValue, setFilterSortValue, filterSortValues, filterSearch, filterSearchValue, setFilterSearchValue, dateFilter, filterFrom, setFilterFrom, filterTo, setFilterTo
  } = UseTableControls();

  const navigate = useNavigate();

  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);
  const [showModal4, setShowModal4] = useState(false);

  const inactiveMale = () => {
    setShowModal(false)
    setShowModal2(true)
  }
  const activeMale = () => {
    setShowModal3(false)
    setShowModal4(true)
  }


  useEffect(() => {
    document.title = 'Sean Outlet | Male Management';
    
    setData(maleData);
  }, []);

  const maleHeaders = [
    {
      key: "id",
      title: "S.No",
    },
    {
      key: "name",
      title: "Name",
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
      key: "registered",
      title: "Registered On",
    },
    {
      key: "status",
      title: "Status",
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
                    <h2 className="mainTitle">Male Management</h2>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-12">
                    <CustomTable
                      headers={maleHeaders}

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
                        {data.map((item) => (
                          <tr key={item.id}>
                            <td>{item.id}</td>
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
                            <td>{item.registered}</td>
                            <td className={item.status ? 'greenColor' : "redColor"}>{item.status ? 'Active' : "Inactive"}</td>
                            <td>
                              <Dropdown className="tableDropdown">
                                <Dropdown.Toggle variant="transparent" className="notButton classicToggle">
                                  <FontAwesomeIcon icon={faEllipsisV} />
                                </Dropdown.Toggle>
                                <Dropdown.Menu align="end" className="tableDropdownMenu">
                                  <Link to={`/male-details/${item.id}`} className="tableAction"><FontAwesomeIcon icon={faEye} className="tableActionIcon" />View</Link>
                                  <button onClick={() => {
                                    item.status ? setShowModal(true) : setShowModal3(true)
                                  }} className="tableAction">{item.status ? <FontAwesomeIcon icon={faTimes} className="tableActionIcon" /> : <FontAwesomeIcon icon={faCheck} className="tableActionIcon" />}{item.status ? 'Inactive' : "Active"}</button>
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

          <CustomModal show={showModal} close={() => { setShowModal(false) }} action={inactiveMale} heading='Are you sure you want to mark this user as inactive?' />
          <CustomModal show={showModal2} close={() => { setShowModal2(false) }} success heading='Marked as Inactive' />

          <CustomModal show={showModal3} close={() => { setShowModal3(false) }} action={activeMale} heading='Are you sure you want to mark this user as Active?' />
          <CustomModal show={showModal4} close={() => { setShowModal4(false) }} success heading='Marked as Active' />



        </div>
      </DashboardLayout>
    </>
  );
};
