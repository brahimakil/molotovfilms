import { Outlet } from "react-router-dom";
import NavbarOne from "./NavbarOne";
import FooterOne from "./FooterOne";

const HomeOneLayout = () => {
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

export default HomeOneLayout;
