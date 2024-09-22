import menu from "./Menu_interface";
import Link from "next/link";

function Feedback(index) {
  return (
    <>
      <li  key={index}  className="nav-item  {{ Request::is('dashboard.contact') ? 'active' : '' }}">
        <Link className="nav-link" href={"/dashboard/feedback"}>
          <i className="fas fa-fw fa-comment-alt"></i>
          <span>Feedback's</span>
        </Link>
      </li>
    </>
  );
}

const provider: menu = {
  name: "Feedback",
  role: "admin",
  component: Feedback,
};
export default provider;
