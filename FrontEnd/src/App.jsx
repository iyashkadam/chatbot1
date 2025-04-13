import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index"; 
import Home from "./pages/Home";
import Login from "./pages/Login";
import Verify from "./pages/Verify";
import { UserData } from "./context/UserContext";
import { LoadingBig } from "./components/Loading";
import Navbar from "./pages/Navbar";

const App = () => {
  const { user, isAuth, loading } = UserData();

  return (
    <>
      {loading ? (
        <LoadingBig />
      ) : (
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Index />} /> {/* Public Index page */}
            <Route path="/home" element={isAuth ? <Home /> : <Login />} />
            <Route path="/login" element={isAuth ? <Home /> : <Login />} />
            <Route path="/verify" element={isAuth ? <Home /> : <Verify />} />
          </Routes>
        </BrowserRouter>
      )}
    </>
  );
};

export default App;
