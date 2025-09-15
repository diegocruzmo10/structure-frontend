import { Outlet } from "react-router";
import HeaderUser from "./components/HeaderUser";
import FooterUser from "./components/FooterUser";

const UserLayout = () => {
  return (
    <>
      <HeaderUser />
      <main>
        <Outlet />
      </main>
      <FooterUser />
    </>
  );
};

export default UserLayout;
