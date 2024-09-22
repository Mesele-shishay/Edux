import Link from "next/link";
import menu from "./Menu_interface";

function Courses(index: number) {
  return (
    <li
      key={index}
      className="nav-item {{ Request::is('dashboard.course') ? 'active' : '' }}"
    >
      <Link
        className="nav-link"
        href="{{route('dashboard.course.student.list.show',['student_id' => auth()->user()->id])}}"
      >
        <i className="fas fa-book-reader"></i>
        <span>Courses</span>
      </Link>
    </li>
  );
}

const provider: menu = {
  name: "Clasess",
  role: "admin",
  component: Courses,
};
export default provider;
