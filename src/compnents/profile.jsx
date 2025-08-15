import "../styles/profile.css";
import logo from "../assets/images/logo.png";
import car1 from "../assets/images/car1.png";
import car2 from "../assets/images/car2.png";
import car3 from "../assets/images/car3.png";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { BsToggleOn } from "react-icons/bs";
import { FaToggleOff } from "react-icons/fa6";

const Profile = () => {
  return (
    <>
      <div className="dashboard4 section">
        <div className="topbar4">
          <div className="profile4">
            <img src={logo} className="profile-img4" />
            <div>
              <h4>Komal Raza</h4>
              <small>komal@gmail.com</small>
            </div>
          </div>
          <div className="nav-buttons4">
            <button className="btn4">Overview</button>
            <button className="btn4">Teams</button>
            <button className="btn4">Projects</button>
          </div>
        </div>

        <div className="main-grid4">
          <div className="welcome-box4">
            <div>
              <h3>Welcome back!</h3>
              <p>Nice to see you, Komal Raza!</p>
            </div>
            <button className="purple-btn4">Turn on your car</button>
          </div>

          <div className="car-info4">
            <h4>Car Informations</h4>
            <p>Hello, Mark Johnson! Your Car is ready.</p>

            <div className="car-info-main4">
              <div className="car-progress4">
                <div className="circle4">
                  <span className="percent4">68%</span>
                </div>
                <div className="charge-time4">
                  <strong>0h 58 min</strong>
                  <span>Time to full charge</span>
                </div>
              </div>

              <div className="car-stats4">
                <div className="stat-box4">
                  <span className="stat-label4">Battery Health</span>
                  <span className="stat-value4">76%</span>
                </div>
                <div className="stat-box4">
                  <span className="stat-label4">Efficiency</span>
                  <span className="stat-value4">+20%</span>
                </div>
                <div className="stat-box4">
                  <span className="stat-label4">Consumption</span>
                  <span className="stat-value4">163W/km</span>
                </div>
                <div className="stat-box4">
                  <span className="stat-label4">This Week</span>
                  <span className="stat-value4">1.342km</span>
                </div>
              </div>
            </div>
          </div>

          <div className="profile-info4">
            <h4>Profile Informations</h4>
            <p className="info">
              Hi, I'm komal , Decisions: If you can’t decide, the answer is no.
              If two equally difficult paths, choose the one more painful in the
              short term (pain avoidance is creating an illusion of equality).
            </p>
            <p>
              <strong>Full Name:</strong> Komal Raza
            </p>
            <p>
              <strong>Mobile:</strong> (44) 123 123 123
            </p>
            <p>
              <strong>Email:</strong> komal@gmail.com
            </p>
            <p>
              <strong>Location:</strong> Pakistan
            </p>
            <div className="social4">
              <p>
                Social Media:
                <FaFacebook />
                <FaTwitter />
                <FaInstagram />
              </p>
            </div>
          </div>
        </div>

        <div className="bottom-grid4">
          <div className="platform-settings4">
            <h4>Platform Settings</h4>
            <h5>Account</h5>
            <p>
              <BsToggleOn /> Email me when someone follows me
            </p>
            <p>
              <FaToggleOff /> Email me when someone answers...
            </p>
            <p>
              <BsToggleOn /> Email me when someone mentions me
            </p>
            <h5>Application</h5>
            <p>
              <FaToggleOff /> New launches and projects
            </p>
            <p>
              <FaToggleOff /> Monthly product updates
            </p>
            <p>
              <BsToggleOn /> Subscribe to newsletter
            </p>
            <p>
              <BsToggleOn /> Receive mails weekly
            </p>
          </div>

          <div className="projects-section4">
            <h4>Projects</h4>
            <div className="projects-grid4">
              <div className="project-card4">
                <img src={car1} />
                <h5>Modern</h5>
                <p>
                  Music is something that every person has his or her own
                  specific opinion about.
                </p>
                <button className="btn4">View All</button>
              </div>
              <div className="project-card4">
                <img src={car2} />
                <h5>Scandinavian</h5>
                <p>
                  {" "}
                  Music is something that every person has his or her own
                  specific opinion about.
                </p>
                <button className="btn4">View All</button>
              </div>
              <div className="project-card4">
                <img src={car3} />
                <h5>Minimalist</h5>
                <p>
                  {" "}
                  Music is something that every person has his or her own
                  specific opinion about.
                </p>
                <button className="btn4">View All</button>
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

export default Profile;
