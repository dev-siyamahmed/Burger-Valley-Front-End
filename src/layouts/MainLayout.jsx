import { Outlet } from "react-router-dom";
import Navbar from "../Components/Shared/Navbar/Navbar";
import Footer from "../Components/Shared/Footer/Footer";

export default function MainLayout() {
  return (
    <div className="bg-black px-5">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
