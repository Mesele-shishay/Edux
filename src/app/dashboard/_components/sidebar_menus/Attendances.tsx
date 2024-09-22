import Link from "next/link";
import menu from "./Menu_interface";

function Attendancess(index: number) {
  return (
    <li
      key={index}
      className="nav-item {{ Request::is('dashboard.students.view.attendance') ? 'active' : '' }}"
    >
      <Link className="nav-link" href={"/dashboard/attendace"}>
        <i className="fas fa-fw fa-calendar-alt"></i>
        <span>Attendances</span>
      </Link>
    </li>
  );
}

const provider: menu = {
  name: "Attendancess",
  role: "student",
  component: Attendancess,
};
export default provider;
