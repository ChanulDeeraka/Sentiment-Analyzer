import {
  BrowserRouter as Router,
  Route,
  Link,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import Analyzer from "../pages/Analyzer";
import SentimentScore from "../pages/SentimentScore";
import Home from "../pages/Home";
import UserProfile from "../pages/UserProfile";
import DefaultLayout from "../layout/DefaultLayout";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<DefaultLayout component={<Home />} />} />
        <Route
          path="/dashboard"
          element={<DefaultLayout component={<SentimentScore />} />}
        />
        <Route
          path="/analyzer"
          element={<DefaultLayout component={<Analyzer />} />}
        />
        <Route
          path="/user-profile"
          element={<DefaultLayout component={<UserProfile />} />}
        />
      </Routes>
    </BrowserRouter>
  );
}
