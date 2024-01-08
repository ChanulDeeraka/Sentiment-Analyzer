import {
  BrowserRouter as Router,
  Route,
  Link,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import SentimentScore from "../pages/SentimentScore";
import Home from "../pages/Home";
import AppNavbar from "../components/AppNavbar";
import AppFooter from "../components/AppFooter";

export default function AppRoutes() {
  return (
    <div>
      <AppNavbar />
      <div className="content-wrapper">
        <div className="container-xxl flex-grow-1 container-p-y mt-4">
          <BrowserRouter>
            <Routes>
              <Route index element={<Home />} />
              <Route path="/dashboard" element={<SentimentScore />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
      <AppFooter />
    </div>
  );
}
