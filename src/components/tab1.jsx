import { Outlet } from "react-router-dom";

const Tab1 = () => {
  return (
    <>
      <h1>Tab One</h1>
      <Outlet />
    </>
  );
};

export default Tab1;
