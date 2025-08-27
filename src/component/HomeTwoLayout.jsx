import { Outlet } from "react-router-dom";
import NavbarTwo from "./NavbarTwo";
import FooterTwo from "./FooterTwo";

const HomeTwoLayout = () => {
  return (
    <>
      <NavbarTwo />
      <main>
        <Outlet />
      </main>
      <FooterTwo />
    </>
  );
};

export default HomeTwoLayout;
