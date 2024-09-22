import menu from "./Menu_interface";

function Teachers() {
  return (
    <>
      <li className="nav-item {{ Request::is('dashboard.teacher') ? 'active' : '' }} }">
        <a
          className="nav-link collapsed"
          href="#"
          data-toggle="collapse"
          data-target="#teachers"
          aria-expanded="false"
          aria-controls="teachers"
        >
          <i className="fas fa-fw fa-cog"></i>
          <span>Teachers</span>
        </a>
        <div id="teachers" className="collapse" data-parent="#accordion">
          <div className="bg-light py-2 collapse-inner border-left-dark">
            <a
              className="collapse-item  {{ Request::is('dashboard.teacher.list.show') }}"
              href="{{route('dashboard.teacher.list.show')}}"
            >
              View Teachers
            </a>
            <a
              className="collapse-item {{ Request::is('dashboard.teacher.add') ? 'active' : '' }}"
              href="{{route('dashboard.teacher.add')}}"
            >
              Add Teacher
            </a>
          </div>
        </div>
      </li>
    </>
  );
}

const provider: menu = {
  name: "Teachers",
  role: "admin",
  component: Teachers,
};
export default provider;
