import "../styles/billing.css";
import mastercardIcon from "../assets/images/Visa.png";
import { BiSolidFilePdf } from "react-icons/bi";
import { BsThreeDots } from "react-icons/bs";
import { AiOutlineBarChart } from "react-icons/ai";
import { FaRegFileAlt, FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const billingData = [
  {
    id: "MS-415646",
    date: "March, 01, 2020",
    amount: "$180",
    iconComponent: <BiSolidFilePdf />,
  },
  {
    id: "RV-126749",
    date: "February, 10, 2021",
    amount: "$250",
    iconComponent: <BiSolidFilePdf />,
  },
  {
    id: "FB-212562",
    date: "April, 05, 2020",
    amount: "$560",
    iconComponent: <BiSolidFilePdf />,
  },
  {
    id: "QW-103578",
    date: "June, 25, 2019",
    amount: "$120",
    iconComponent: <BiSolidFilePdf />,
  },
  {
    id: "AR-803481",
    date: "March, 01, 2019",
    amount: "$300",
    iconComponent: <BiSolidFilePdf />,
  },
];
const paymentMethods = [
  {
    id: 1,
    icon: mastercardIcon,
    cardNumber: "7812 2139 0823 XXXX",
    iconType: "image",
  },
  {
    id: 2,
    icon: mastercardIcon,
    cardNumber: "7812 2139 0823 XXXX",
    iconType: "image",
  },
];

const transactions = [
  {
    name: "Netflix",
    date: "27 March 2020, at 12:30 PM",
    amount: "-$2600",
    status: "negative",
  },
  {
    name: "Apple",
    date: "27 March 2020, at 12:30 PM",
    amount: "+$2600",
    status: "positive",
  },
  {
    name: "Stripe",
    date: "26 March 2020, at 13:45 PM",
    amount: "+$800",
    status: "positive",
  },
  {
    name: "HubSpot",
    date: "26 March 2020, at 12:30 PM",
    amount: "+$1700",
    status: "positive",
  },
  {
    name: "Weifclow",
    date: "26 March 2020, at 05:00 AM",
    amount: "Pending",
    status: "pending",
  },
  {
    name: "Microsoft",
    date: "25 March 2020, at 16:30 PM",
    amount: "-$987",
    status: "negative",
  },
];
const Billing = () => {
  return (
    <>
      {" "}
      <div className="billing section ">
        <div className="stats-container2 ">
          <div className="card-wrapper">
            <div className="card-background">
              <div className="card-overlay"></div>

              <div className="card-content">
                <div className="brand-section">MasterCard</div>

                <div className="number-section"> 8877 887 7887 3947</div>

                <div className="valid-section">
                  <span className="label">VALID THRU</span>
                  <span className="value">12/24</span>
                </div>

                <div className="cvv-section">
                  <span className="label">CVV</span>
                  <span className="value">123</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mini-card">
            <div className="mini-top">
              <div className="mini-top-left">
                <p className="mini-label">Credit Balance</p>
                <p className="mini-amount">$25,215</p>
              </div>

              <div className="mini-top-right">
                <button className="mini-dots">
                  <BsThreeDots size={16} color="#fff" />
                </button>
                <AiOutlineBarChart
                  size={40}
                  color="#fff"
                  className="mini-spark"
                />
              </div>
            </div>

            <div className="mini-divider" />

            <div className="mini-bottom">
              <p className="mini-newest">NEWEST</p>

              <div className="mini-row">
                <div className="mini-left">
                  <div className="mini-icon">
                    <FaRegFileAlt size={18} color="#fff" />
                  </div>
                  <div className="mini-texts">
                    <p className="mini-title">Bill & Taxes</p>
                    <p className="mini-time">Today, 16:36</p>
                  </div>
                </div>
                <p className="mini-amount-right">-$154.50</p>
              </div>
            </div>
          </div>

          <div className="billing-container">
            <div className="billing-header">
              <h3>Invoices</h3>
              <button className="view-all-btn">VIEW ALL</button>
            </div>

            <div className="billing-list">
              {billingData.map((billing) => (
                <div className="billing-row" key={billing.id}>
                  <div className="billing-left">
                    <span className="billing-date">{billing.date}</span>
                    <span className="billing-id">#{billing.id}</span>
                  </div>

                  <div className="billing-right">
                    <span className="billing-amount">{billing.amount}</span>
                    <span className="billing-icon">
                      {billing.iconComponent}
                    </span>
                    <span className="billing-pdf">PDF</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <section className="payment-section ">
          <header className="payment-header">
            <h2>Payment Method</h2>
          </header>

          <button className="add-card-btn" aria-label="Add a new payment card">
            ADD A NEW CARD
          </button>

          {paymentMethods.map((method, index) => (
            <div
              key={method.id}
              className={`payment-card ${
                index === 0 ? "left-card" : "right-card"
              }`}
            >
              {method.iconType === "image" ? (
                <img src={method.icon} className="card-icon" />
              ) : (
                <img src={method.icon} className="card-icon" />
              )}

              <div className="card-details">
                <span className="card-number">{method.cardNumber}</span>
              </div>

              <button
                className="edit-btn"
                aria-label={`Edit payment method ${method.cardNumber}`}
              >
                <FaRegEdit />
              </button>
            </div>
          ))}
        </section>

        <div className="billing-transactions-container">
          {/* Billing Information */}
          <div className="billing-info-box">
            <h3>Billing Information</h3>
            <div className="billing-card">
              <div>
                <h4>Oliver Liam</h4>
                <p>Company Name: Viking Burrito</p>
                <p>Email Address: oliver@burrito.com</p>
                <p>VAT Number: FRB1235476</p>
              </div>
              <div className="billing-actions">
                <span className="delete">
                  <MdDelete /> DELETE
                </span>
                <span className="edit">
                  <FaRegEdit /> EDIT
                </span>
              </div>
            </div>
            <div className="billing-card">
              <div>
                <h4>Oliver Liam</h4>
                <p>Company Name: Viking Burrito</p>
                <p>Email Address: oliver@burrito.com</p>
                <p>VAT Number: FRB1235476</p>
              </div>
              <div className="billing-actions">
                <span className="delete">
                  <MdDelete /> DELETE
                </span>
                <span className="edit">
                  <FaRegEdit /> EDIT
                </span>
              </div>
            </div>
            <div className="billing-card">
              <div>
                <h4>Oliver Liam</h4>
                <p>Company Name: Viking Burrito</p>
                <p>Email Address: oliver@burrito.com</p>
                <p>VAT Number: FRB1235476</p>
              </div>
              <div className="billing-actions">
                <span className="delete">
                  <MdDelete /> DELETE
                </span>
                <span className="edit">
                  <FaRegEdit /> EDIT
                </span>
              </div>
            </div>
          </div>

          <div className="transactions-card">
            <div className="transactions-header">
              <h3>Your Transactions</h3>
              <span className="date-range">23 - 30 March 2020</span>
            </div>

            {transactions.map((item, index) => (
              <div className="transaction-row" key={index}>
                <div className="transaction-info">
                  <div className="dot"></div>
                  <div className="transaction-text">
                    <span className="transaction-name">{item.name}</span>
                    <span className="transaction-date">{item.date}</span>
                  </div>
                </div>
                <div
                  className={`transaction-amount ${
                    item.status === "positive"
                      ? "positive"
                      : item.status === "negative"
                      ? "negative"
                      : "pending"
                  }`}
                >
                  {item.amount}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ padding: "0 30px" }} className="footer">
          <h6> © 2025 create by Komal with creative Babar team </h6>
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

export default Billing;
