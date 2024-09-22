import Link from "next/link";
import menu from "./Menu_interface";

function Clasess(index:number) {
  return (
    <li key={index} className="nav-item ">
      <Link className="nav-link" href={"/dashboard/classes"}>
        <i className="fas fa-sitemap"></i>
        <span>Classes</span>
      </Link>
    </li>
  );
}

const provider: menu = {
  name: "Clasess",
  role: "admin",
  component: Clasess,
};
export default provider;
