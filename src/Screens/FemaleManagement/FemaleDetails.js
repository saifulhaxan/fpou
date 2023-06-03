import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { femaleData, paymentLog } from "./../../Config/Data";

import { DashboardLayout } from "../../Components/Layout/DashboardLayout";
import BackButton from "../../Components/BackButton";
import CustomModal from "../../Components/CustomModal";
import CustomTable from "../../Components/CustomTable";
import UseTableControls from "../../Config/UseTableControls";

const FemaleDetails = () => {
  const { id } = useParams();

  const {
    filterSort, filterSortValue, setFilterSortValue, filterSortValues, filterSearch, filterSearchValue, setFilterSearchValue, dateFilter, filterFrom, setFilterFrom, filterTo, setFilterTo
  } = UseTableControls();

  const [profileData, setProfileData] = useState({});
  const [paymentData, setPaymentData] = useState([]);
  const singleData = []

  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);
  const [showModal4, setShowModal4] = useState(false);

  const inactiveFemale = () => {
    setShowModal(false)
    setShowModal2(true)
  }
  const activeFemale = () => {
    setShowModal3(false)
    setShowModal4(true)
  }

  useEffect(() => {
    femaleData.forEach((item) => {

    document.title = 'Sean Outlet | Details';

      if (item.id == id) {
        setProfileData(item);
      }
    });


  });

  useEffect(() => {
    paymentLog.filter(((item) => {
      if (profileData) {
        if (profileData.id == item.female.id) {
          singleData.push(item);
        }
      }
    }))
    setPaymentData(singleData)
  }, [profileData])

  const bookingHistory = [
    {
      key: "sno",
      title: "S.No",
    },
    {
      key: "maleName",
      title: "Male Name",
    },
    {
      key: "username",
      title: "Username",
    },
    {
      key: "dateScheduled",
      title: "Date Scheduled",
    },
    {
      key: "price",
      title: "Price",
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

        <div className="dashCard mb-4">
          <div className="row mb-3">
            <div className="col-12">
              <h2 className="mainTitle">
                <BackButton />
                User Details
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
                <div className="col-lg-4 text-end order-1 order-lg-2 mb-3">
                  <button onClick={() => {
                    profileData.status ? setShowModal(true) : setShowModal3(true)
                  }} className="notButton primaryColor fw-bold text-decoration-underline">Mark as {profileData.status ? 'Inactive' : 'Active'}</button>
                  <span className={`statusBadge ${profileData.status ? 'statusBadgeActive' : 'statusBadgeInactive'}`}>{profileData.status ? 'Active' : 'Inactive'}</span>
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
                <div className="col-xl-3 col-md-6 mb-3">
                  <h4 className="secondaryLabel">Commission</h4>
                  <p className="secondaryText">{profileData.commission}%</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="dashCard">
          <div className="row mb-3">
            <div className="col-12">
              <h2 className="mainTitle">Booking History</h2>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-12">
              <CustomTable
                headers={bookingHistory}

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
                  {paymentData.map((item, index) =>
                  (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td><img
                        src={`../${item.male.image}`}
                        alt="thumbnail"
                        className="thumbnail"
                      />{item.male.name}</td>
                      <td>{item.male.username}</td>
                      <td>{item.dateScheduled}</td>
                      <td>${item.price}</td>
                      <td>{item.datePaid}</td>
                    </tr>
                  ))}

                </tbody>
              </CustomTable>
            </div>
          </div>
        </div>

        <CustomModal show={showModal} close={() => { setShowModal(false) }} action={inactiveFemale} heading='Are you sure you want to mark this user as inactive?' />
        <CustomModal show={showModal2} close={() => { setShowModal2(false) }} success heading='Marked as Inactive' />

        <CustomModal show={showModal3} close={() => { setShowModal3(false) }} action={activeFemale} heading='Are you sure you want to mark this user as Active?' />
        <CustomModal show={showModal4} close={() => { setShowModal4(false) }} success heading='Marked as Active' />

      </DashboardLayout>
    </>
  );
};

export default FemaleDetails;
