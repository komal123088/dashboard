import {
  FaWallet,
  FaUsers,
  FaUserPlus,
  FaShoppingCart,
  FaLongArrowAltRight,
  FaCircle,
  FaFileInvoiceDollar,
  FaCreditCard,
  FaBoxOpen,
  FaShoppingBag,
} from "react-icons/fa";

import "../styles/dashboard.css";
import ReactApexChart from "react-apexcharts";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import icon1 from "../assets/images/icon (1).png";
import icon2 from "../assets/images/icon (2).png";
import icon3 from "../assets/images/icon (4).png";
import icon4 from "../assets/images/icon 5.png";
import icon5 from "../assets/images/icon6.png";
import member from "../assets/images/members.png";
import member1 from "../assets/images/members1.png";
import member3 from "../assets/images/member3.png";

const salesOptions = {
  chart: {
    type: "area",
    toolbar: { show: false },
    zoom: { enabled: false },
  },
  colors: ["#00aaff", "#00ffff"],
  dataLabels: { enabled: false },
  stroke: { curve: "smooth", width: 3 },
  fill: {
    type: "gradient",
    gradient: { shadeIntensity: 1, opacityFrom: 0.4, opacityTo: 0.1 },
  },
  grid: { borderColor: "rgba(255,255,255,0.1)" },
  xaxis: {
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    labels: { style: { colors: "#ccc" } },
  },
  yaxis: { min: 100, max: 600, labels: { style: { colors: "#ccc" } } },
  legend: { show: false },
};

const salesSeries = [
  {
    name: "Sales",
    data: [500, 200, 300, 280, 500, 320, 540, 300, 490, 250, 480, 530],
  },
  {
    name: "Revenue",
    data: [180, 250, 280, 320, 350, 400, 420, 390, 300, 400, 230, 380],
  },
];

const barOptions = {
  chart: {
    type: "bar",
    toolbar: { show: false },
  },
  plotOptions: {
    bar: {
      borderRadius: 6,
      columnWidth: "25%",
    },
  },
  dataLabels: { enabled: false },
  grid: { show: false },
  xaxis: {
    categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    labels: { show: false },
    axisBorder: { show: false },
    axisTicks: { show: false },
  },
  yaxis: { show: false },
  tooltip: { enabled: false },
  stroke: {
    width: 1,
    curve: "smooth",
  },
  markers: {
    size: 1,
  },
};

const barSeries = [
  {
    data: [300, 220, 100, 450, 350, 270, 120],
  },
];

const item = [
  {
    icon: icon1,
    name: "Chakra Soft UI Version",
    members: member,
    budget: "$14,000",
    completion: 60,
  },
  {
    icon: icon2,
    name: "Add Progress Track",
    members: member1,
    budget: "$3,000",
    completion: 10,
  },
  {
    icon: icon3,
    name: "Fix Platform Errors",
    members: member3,
    budget: "Not set",
    completion: 100,
  },
  {
    icon: icon4,
    name: "Launch our Mobile App",
    members: member,
    budget: "$32,000",
    completion: 100,
  },
  {
    icon: icon5,
    name: "Add the New Pricing Page",
    members: member1,
    budget: "$400",
    completion: 25,
  },
  {
    icon: icon1,
    name: "Redesign New Online Shop",
    members: member3,
    budget: "$7,600",
    completion: 40,
  },
];

const Dashboard = () => {
  const stats = [
    {
      title: "Today's Money",
      value: "$53,000",
      change: "+55%",
      positive: true,
      icon: <FaWallet />,
    },
    {
      title: "Today's Users",
      value: "2,300",
      change: "+5%",
      positive: true,
      icon: <FaUsers />,
    },
    {
      title: "New Clients",
      value: "+3,052",
      change: "-14%",
      positive: false,
      icon: <FaUserPlus />,
    },
    {
      title: "Total Sales",
      value: "$173,000",
      change: "+8%",
      positive: true,
      icon: <FaShoppingCart />,
    },
  ];

  const satisfactionRate = 95;
  const safetyScore = 9.3;

  return (
    <>
      <div className="section dashboard">
        <div className="stats-container">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-info">
                <p className="stat-title">{stat.title}</p>
                <h2 className="stat-value">{stat.value}</h2>
                <span
                  className={
                    stat.positive
                      ? "stat-change positive"
                      : "stat-change negative"
                  }
                >
                  {stat.change}
                </span>
              </div>
              <div className="stat-icon">{stat.icon}</div>
            </div>
          ))}
        </div>

        <div className="graphs">
          <div className="welcome-card">
            <div className="welcome-text">
              <p className="small-text">Welcome back,</p>
              <h2 className="username">Komal Raza</h2>
              <p className="sub-text">
                Glad to see you again!
                <br />
                Ask me anything.
              </p>
              <button className="record-btn">
                Tap to record <FaLongArrowAltRight />
              </button>
            </div>
          </div>

          <div className="graph-card">
            <h3 className="card-title">Satisfaction Rate</h3>
            <p className="card-subtitle">From all projects</p>
            <div className="progress-container">
              <CircularProgressbar
                value={satisfactionRate}
                text={`${satisfactionRate}%`}
                styles={buildStyles({
                  pathColor: "#1E90FF",
                  textColor: "#fff",
                  trailColor: "#1a2b4c",
                  textSize: "18px",
                })}
              />
            </div>
            <p className="card-footer">Based on likes</p>
          </div>

          <div className="graph-card">
            <div className="card-header">
              <h3 className="card-title">Referral Tracking</h3>
              <span className="menu-dots">⋯</span>
            </div>
            <div className="referral-stats">
              <div className="stat-block">
                <p className="label">Invited</p>
                <h4>145 people</h4>
              </div>
              <div className="stat-block">
                <p className="label">Bonus</p>
                <h4>1,465</h4>
              </div>
            </div>
            <div className="safety-score">
              <CircularProgressbar
                value={(safetyScore / 10) * 100}
                text={`${safetyScore}`}
                styles={buildStyles({
                  pathColor: "#00C49F",
                  textColor: "#fff",
                  trailColor: "#1a2b4c",
                  textSize: "18px",
                })}
              />
              <p className="score-label">
                Safety
                <br />
                Total Score
              </p>
            </div>
          </div>
        </div>

        <div className="charts-container">
          <div className="chart-card">
            <h3>Sales Overview</h3>
            <p style={{ color: "#00ff99" }}>+5% more in 2021</p>
            <ReactApexChart
              options={salesOptions}
              series={salesSeries}
              type="area"
              height={250}
            />
          </div>
          <div className="chart-card">
            <h3>Active Users</h3>
            <p style={{ color: "#00ff99" }}>(+23) than last week</p>
            <ReactApexChart
              options={barOptions}
              series={barSeries}
              type="bar"
              height={150}
            />
            <div className="stats-row">
              <div>👤 Users: 32,984</div>
              <div>🖱 Clicks: 2.42M</div>
              <div>🛒 Sales: $2,400</div>
              <div>🔧 Items: 320</div>
            </div>
          </div>
        </div>
        <div className="projects">
          <div className="projects-table">
            <div className="done">
              <div>Projects</div>
              <div>30 done this month</div>
            </div>
            <div className="projectHeader">
              <div className="project-author">COMPANIES</div>
              <div className="project-function">MEMBERS</div>
              <div className="project-status">BUDGET</div>
              <div className="project-employed1">COMPLETION</div>
            </div>
            {item.map((item, index) => (
              <div className="project-row" key={index}>
                <div className="name-section">
                  <img src={item.icon} className="icon" />
                  <p className="name"> {item.name}</p>
                </div>
                <div className="members-section">
                  <img src={item.members} />
                </div>

                <div className="budget-section">{item.budget}</div>

                <div className="completion-section">
                  <div className="bar">
                    <div
                      className="fill"
                      style={{ width: `${item.completion}%` }}
                    ></div>
                  </div>
                  <span>{item.completion}%</span>
                </div>
              </div>
            ))}
          </div>
          <div className="orders-overview">
            <div className="header">
              <span className="title">Orders overview</span>
              <span className="growth">+30% this month</span>
            </div>

            <div className="order-item">
              <span className="icon blue">
                <i className="react-icon">
                  <FaCircle />
                </i>
              </span>
              <div className="details">
                <p>$2400, Design changes</p>
                <span>22 DEC 7:20 PM</span>
              </div>
            </div>

            <div className="order-item">
              <span className="icon red">
                <i className="react-icon">
                  <FaShoppingCart />
                </i>
              </span>
              <div className="details">
                <p>New order #27412</p>
                <span>21 DEC 11:21 PM</span>
              </div>
            </div>

            <div className="order-item">
              <span className="icon orange">
                <i className="react-icon">
                  <FaFileInvoiceDollar />
                </i>
              </span>
              <div className="details">
                <p>Server Payments for April</p>
                <span>21 DEC 9:28 PM</span>
              </div>
            </div>

            <div className="order-item">
              <span className="icon green">
                <i className="react-icon">
                  <FaCreditCard />
                </i>
              </span>
              <div className="details">
                <p>New card added for order #3210145</p>
                <span>20 DEC 3:52 AM</span>
              </div>
            </div>

            <div className="order-item">
              <span className="icon yellow">
                <i className="react-icon">
                  <FaBoxOpen />
                </i>
              </span>
              <div className="details">
                <p>Unlock packages for Development</p>
                <span>19 DEC 11:35 PM</span>
              </div>
            </div>

            <div className="order-item">
              <span className="icon pink">
                <i className="react-icon">
                  <FaShoppingBag />
                </i>
              </span>
              <div className="details">
                <p>New order #9851258</p>
                <span>18 DEC 4:41 PM</span>
              </div>
            </div>
          </div>
        </div>
        <div className="footer">
          <h6> 2025 Made by Creative Babar Team </h6>
          <div className="media">
            <h6>Marketplace</h6>
            <h6>Blogs</h6>
            <h6>License</h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
