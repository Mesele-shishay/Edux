"use client";
import Link from "next/link";
import menu from "./Menu_interface";

function Dashboard(index) {
  return (
    <li key={index} className={"nav-item"}>
      <Link className="nav-link" href={"/dashboard"}>
        <i className="fas fa-grip-horizontal"></i>
        <span>Dashboard</span>
      </Link>
    </li>
  );
}

const provider: menu = {
  name: "Clasess",
  role: "admin",
  component: Dashboard,
};
export default provider;
