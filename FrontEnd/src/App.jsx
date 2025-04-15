import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Verify from "./pages/Verify";
import { UserData } from "./context/UserContext";
import { LoadingBig } from "./components/Loading";
import Navbar from "./pages/Navbar";
import MinimalNavbar from "./pages/MinimalNavbar"; // Import the minimal version

const App = () => {
  const { user, isAuth, loading } = UserData();

  return (
    <>
      {loading ? (
        <LoadingBig />
      ) : (
        <BrowserRouter>
          <InnerApp isAuth={isAuth} />
        </BrowserRouter>
      )}
    </>
  );
};

const InnerApp = ({ isAuth }) => {
  const location = useLocation();

  const isMinimal = location.pathname === "/login" || location.pathname === "/verify";

  return (
    <>
      {isMinimal ? <MinimalNavbar /> : <Navbar />}

      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/home" element={isAuth ? <Home /> : <Login />} />
        <Route path="/login" element={isAuth ? <Home /> : <Login />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="*" element={<Index />} />
      </Routes>
    </>
  );
};

export default App;
