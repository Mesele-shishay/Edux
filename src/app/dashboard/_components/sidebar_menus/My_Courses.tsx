import menu from "./Menu_interface";

function My_Course() {
  return (
    <>
      <li className="nav-item {{ Request::is('dashboard.course') ? 'active' : '' }}">
        <a
          className="nav-link"
          href="{{ route('dashboard.course.teacher.list.show') }}"
        >
          <i className="fas fa-chalkboard-teacher"></i>
          <span>My Courses</span>
        </a>
      </li>
    </>
  );
}

const provider: menu = {
  name: "My_Course",
  role: "admin",
  component: My_Course,
};
export default provider;
