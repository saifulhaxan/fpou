import { useState, useEffect } from "react";

import { DashboardLayout } from "./../../Components/Layout/DashboardLayout";
import StatCard from "../../Components/StatsCard/index.js";
import { stats } from "../../Config/Data";
import { CChart } from "@coreui/react-chartjs";

import "./style.css";

export const Dashboard = () => {
  const [statistics, setStatistics] = useState([]);

  useEffect(() => {

    document.title = 'Sean Outlet | Dashboard';

    setStatistics(stats)
  }, []);

  return (
    <>
      <DashboardLayout>
        <div className="container-fluid">
          <div className="row mb-3">
            <div className="col-12">
              <div className="dashCard">
                <div className="row">
                  {statistics.map((stats) => (
                    <div className="col-xl-4 col-md-6 stats" key={stats.id}>
                      <StatCard item={stats} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-12">
              <div className="dashCard">
                <h3 className="mainTitle">No. of Signups</h3>
                <div className="graph-wrapper">
                  <CChart
                    type="bar"
                    height="90"
                    options={{
                      scales: {
                        y: {
                          suggestedMin: 0,
                          suggestedMax: 40,
                        },
                      },
                    }}
                    data={{
                      labels: ["2010", "2011", "2012", "2013", "2014"],
                      tension: "0.5",
                      datasets: [
                        {
                          label: "My First dataset",
                          fill: true,
                          backgroundColor: "rgba(0, 0, 0, 1)",
                          borderColor: "#000000",
                          pointBackgroundColor: "#000000",
                          pointBorderColor: "#000000",
                          borderWidth: 1,
                          data: [35, 30, 35, 30, 35],
                          tension: 0.5,
                        },
                        {
                          label: "My Second dataset",
                          backgroundColor: "rgba(45, 89, 240, 1)",
                          borderColor: "#2D59F0",
                          pointBackgroundColor: "#2D59F0",
                          borderWidth: 1,
                          pointBorderColor: "#2D59F0",
                          data: [30, 35, 30, 35, 30],
                          tension: 0.5,
                        },
                      ],
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </DashboardLayout>
    </>
  );
};
