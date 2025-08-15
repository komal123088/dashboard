import "./App.css";
import {
  HashRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Layout from "./compnents/sidebar-navbar";
import Dashboard from "./compnents/dashboard";
import Table from "./compnents/table";
import Billing from "./compnents/billing";
import Profile from "./compnents/profile";
import SignIn from "./compnents/sign-in";
import SignUp from "./compnents/sign-up";

const LayoutWrapper = ({ children }) => {
  const location = useLocation();
  const noLayoutRoutes = ["/signin", "/signup"];
  const showLayout = !noLayoutRoutes.includes(location.pathname);

  return (
    <>
      {showLayout && <Layout />}
      {children}
    </>
  );
};

function App() {
  return (
    <Router>
      <LayoutWrapper>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/table" element={<Table />} />
          <Route path="/billing" element={<Billing />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </LayoutWrapper>
    </Router>
  );
}

export default App;
