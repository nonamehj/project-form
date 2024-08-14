import React from "react";
import { Outlet } from "react-router-dom";

const SharedLayoutHome = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default SharedLayoutHome;
