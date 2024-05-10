import React, { Suspense } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Footer from "./components/footer/footer";
import Loading from "./components/loading/loading";
import NavBar from "./components/nav-bar/nav-bar";
import ToTop from "./components/to-top/to-top";
import EditProfile from "./pages/edit-profile/edit-profile";
import Auth from "./pages/login-auth-reset/auth";
import Login from "./pages/login-auth-reset/login";
import Reset from "./pages/login-auth-reset/reset";
import NotFound from "./pages/not-found/not-found";

const Home = React.lazy(() => import("./pages/home/home"));
const Profile = React.lazy(() => import("./pages/profile/profile"));
const HowItWorks = React.lazy(() =>
  import("./pages/how-it-works/how-it-works")
);
const AffiliateProgram = React.lazy(() =>
  import("./pages/affiliate-program/affiliate-program")
);
const Tutorials = React.lazy(() => import("./pages/tutorials/tutorials"));
const Guide = React.lazy(() => import("./pages/guide/guide"));
const Faq = React.lazy(() => import("./pages/faq/faq"));
const MagneticGrid = React.lazy(() =>
  import("./pages/magnetic-grid/magnetic-grid")
);
const FullLibrary = React.lazy(() =>
  import("./pages/full-library/full-library")
);
const TopContributors = React.lazy(() =>
  import("./pages/top-contributors/top-contributors")
);

function App() {
  const location = useLocation();

  return (
    <div className="pages_wrapper">
      {location.pathname !== "/login" &&
      location.pathname !== "/auth" &&
      location.pathname !== "/reset" &&
      location.pathname !== "/edit-profile" ? (
        <NavBar />
      ) : (
        ""
      )}

      <div className="page_content">
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/reset" element={<Reset />} />
            <Route path="/edit-profile" element={<EditProfile />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/full-library" element={<FullLibrary />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/affiliate-program" element={<AffiliateProgram />} />
            <Route path="/tutorials" element={<Tutorials />} />
            <Route path="/guide" element={<Guide />} />
            <Route path="/magnetic-grid" element={<MagneticGrid />} />
            <Route path="/top-contributors" element={<TopContributors />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        <ToTop />
      </div>
      {location.pathname !== "/login" &&
      location.pathname !== "/auth" &&
      location.pathname !== "/reset" &&
      location.pathname !== "/edit-profile" ? (
        <Footer />
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
