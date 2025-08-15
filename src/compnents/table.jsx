import "../styles/table.css";

import image2 from "../assets/images/image.png";
import image3 from "../assets/images/image2.png";
import image4 from "../assets/images/image3.png";
import image5 from "../assets/images/image4.png";
import image6 from "../assets/images/image5.png";
import image1 from "../assets/images/image3.png";
import icon1 from "../assets/images/icon (1).png";
import icon2 from "../assets/images/icon (2).png";
import icon3 from "../assets/images/icon (4).png";
import icon4 from "../assets/images/icon 5.png";
import icon5 from "../assets/images/icon6.png";
import member from "../assets/images/members.png";
import member1 from "../assets/images/members1.png";
import member3 from "../assets/images/member3.png";
import { FaWallet, FaUsers, FaUserPlus, FaShoppingCart } from "react-icons/fa";

const authorsData = [
  {
    image: image6,
    name: "Esthera Jackson",
    email: "esthera@simple.com",
    role: "Manager",
    department: "Organization",
    status: "Online",
    employed: "14/06/21",
  },
  {
    image: image5,
    name: "Alexa Liras",
    email: "alexa@simple.com",
    role: "Programmer",
    department: "Developer",
    status: "Offline",
    employed: "14/06/21",
  },
  {
    image: image4,
    name: "Laurent Michael",
    email: "laurent@simple.com",
    role: "Executive",
    department: "Projects",
    status: "Online",
    employed: "14/06/21",
  },
  {
    image: image3,
    name: "Freduardo Hill",
    email: "freduardo@simple.com",
    role: "Manager",
    department: "Organization",
    status: "Online",
    employed: "14/06/21",
  },
  {
    image: image2,
    name: "Daniel Thomas",
    email: "daniel@simple.com",
    role: "Programmer",
    department: "Developer",
    status: "Offline",
    employed: "14/06/21",
  },
  {
    image: image1,
    name: "Mark Wilson",
    email: "mark@simple.com",
    role: "Designer",
    department: "UI/UX Design",
    status: "Offline",
    employed: "14/06/21",
  },
];

const Table = () => {
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

  return (
    <>
      <div className="container section">
        <div className="background">
          <header className="header">
            <h1 className="header-title">Authors Table</h1>
          </header>

          <div className="contentWrapper">
            <div className="tableHeaders">
              <div className="header-author">AUTHOR</div>
              <div className="header-function">FUNCTION</div>
              <div className="header-status">STATUS</div>
              <div className="header-employed">EMPLOYED</div>
              <div className="header-edit"></div>
            </div>

            <div className="rowsWrapper">
              {authorsData.map((item, index) => (
                <div className="row" key={index}>
                  <div className="authorBlock">
                    <img
                      className="authorImage"
                      src={item.image}
                      alt={item.name}
                    />
                    <div className="authorDetails">
                      <div>{item.name}</div>
                      <div>{item.email}</div>
                    </div>
                  </div>

                  <div className="functionBlock">
                    <div className="roleText">{item.role}</div>
                    <div className="departmentText">{item.department}</div>
                  </div>

                  <div
                    className={
                      item.status === "Online"
                        ? "statusOnline"
                        : "statusOffline"
                    }
                  >
                    <span
                      className={
                        item.status === "Online"
                          ? "statusTextOnline"
                          : "statusTextOffline"
                      }
                    >
                      {item.status}
                    </span>
                  </div>

                  <div className="employedTime">
                    <time className="employedText">{item.employed}</time>
                  </div>

                  <button className="editButton">Edit</button>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="projects-table project-table2">
          <div className="done">
            <div>Projects</div>
            <div>30 done this month</div>
          </div>
          <div className="projectHeader">
            <div className="project-author">COMPANIES</div>
            <div className="project-function">MEMBERS</div>
            <div className="project-status">BUDGET</div>
            <div className="project-employed">COMPLETION</div>
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

export default Table;
