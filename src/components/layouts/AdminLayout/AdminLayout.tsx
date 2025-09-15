import { Outlet } from "react-router";
import HeaderAdmin from "./components/HeaderAdmin";
import FooterAdmin from "./components/FooterAdmin/FooterAdmin";

const AdminLayout = () => {
  return (
    <>
      <HeaderAdmin />
      <main>
        <Outlet />
      </main>
      <FooterAdmin />
    </>
  );
};

export default AdminLayout;