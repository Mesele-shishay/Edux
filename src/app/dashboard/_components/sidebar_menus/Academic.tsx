"use client";
import menu from "./Menu_interface";
import Link from "next/link";

function Acadamic(index) {
  return (
    <li
      key={index}
      className="nav-item {{ Request::is('dashboard.academic') ? 'active' : '' }}"
    >
      <Link className="nav-link" href={"/dashboard/academic"}>
        <i className="fas fa-fw fa-tools"></i>
        <span>Academic</span>
      </Link>
    </li>
  );
}

const provider: menu = {
  name: "Acadamic",
  role: "admin",
  component: Acadamic,
};
export default provider;
