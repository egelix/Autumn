import React from "react";
import "./Layout.css";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";

// Pass the child props
export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}