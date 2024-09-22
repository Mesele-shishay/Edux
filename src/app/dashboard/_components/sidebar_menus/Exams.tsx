import menu from "./Menu_interface";

function Exams() {
  return (
    <>
      <li className="nav-item {{ Request::is('dashboard.exam') ? 'active' : '' }}">
        <a
          className="nav-link collapsed"
          href="{{ route('dashboard.exam.view') }}"
          data-toggle="collapse"
          data-target="#exams"
          aria-expanded="false"
          aria-controls="exams"
        >
          <i className="fas fa-fw fa-cog"></i>
          <span>Exams / Grades</span>
        </a>
        <div id="exams" className="collapse" data-parent="#accordion">
          <div className="bg-light py-2 collapse-inner border-left-dark">
            <a className="collapse-item disbled {{ Request::is('dashboard.exam.view') }} ">
              View Exams
            </a>

            <a
              className="collapse-item {{ Request::is('dashboard.exam.create') }}"
              href="{{route('dashboard.exam.create')}}"
            >
              Create Exams
            </a>
            {/* @if (auth()->user()->role == 'admin') */}
            <a
              className="collapse-item {{ Request::is('dashboard.exam.grade.create') ? 'active' : '' }} "
              href="{{route('dashboard.exam.grade.create')}}"
            >
              Add Grade Systems
            </a>
            {/* @endif */}

            <a
              className="collapse-item {{ Request::is('dashboard.exam.grade.view') }} "
              href="{{route('dashboard.exam.grade.view')}}"
            >
              View Grade Systems
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
  component: Exams,
};
export default provider;
