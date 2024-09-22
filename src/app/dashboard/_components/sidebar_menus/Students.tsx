import menu from "./Menu_interface";

function Students() {
  return (
    <>
      <li className="nav-item {{ Request::is('dashboard.student') ? 'active' : '' }}">
        <a
          className="nav-link collapsed"
          href="#"
          data-toggle="collapse"
          data-target="#students"
          aria-expanded="false"
          aria-controls="students"
        >
          <i className="fas fa-fw fa-cog"></i>
          <span>Students</span>
        </a>
        <div id="students" className="collapse" data-parent="#accordion">
          <div className="bg-light py-2 collapse-inner border-left-dark">
            <a
              className="collapse-item {{ Request::is('dashboard.student.list.show') ? 'active' : '' }} "
              href="{{route('dashboard.student.list.show')}}"
            >
              View Students
            </a>

            <a
              className="collapse-item {{ Request::is('dashboard.student.add') ? 'active' : '' }}"
              href="{{route('dashboard.student.add')}}"
            >
              Add Student
            </a>
          </div>
        </div>
      </li>
    </>
  );
}

const provider: menu = {
  name: "Clasess",
  role: "admin",
  component: Students,
};
export default provider;
