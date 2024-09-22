import Link from "next/link";
import menu from "./Menu_interface";

function System_Setting(index) {
  return (
    <li key={index} className="nav-item">
      <Link className="nav-link" href={"/dashboard/settings"}>
        <i className="fas fa-fw fa-cogs"></i>
        <span>System Setting</span>
      </Link>
    </li>
  );
}

const provider: menu = {
  name: "System_Setting",
  role: "admin",
  component: System_Setting,
};
export default provider;
