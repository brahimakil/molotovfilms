import { Outlet } from "react-router-dom";
import NavbarOne from "./NavbarOne";
import FooterOne from "./FooterOne";

const InnerPageLayout = () => {
  return (
    <>
      <NavbarOne />
      <main>
        <Outlet />
      </main>
      <FooterOne />
    </>
  );
};

export default InnerPageLayout;
