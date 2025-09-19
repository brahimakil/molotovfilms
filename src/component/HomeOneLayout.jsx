import { Outlet, useLocation } from "react-router-dom";
import NavbarOne from "./NavbarOne";
import FooterOne from "./FooterOne";

const HomeOneLayout = () => {
  const location = useLocation();
  const isFeaturePage = location.pathname === '/features';

  return (
    <>
      <NavbarOne /> 
      <main style={{
        backgroundColor: isFeaturePage ? '#000' : 'transparent'
      }}>
        <Outlet />
      </main>
      {!isFeaturePage && <FooterOne />}
    </>
  );
};

export default HomeOneLayout;
