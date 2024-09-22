import menu from "./Menu_interface";

function Routine() {
  return (
    <>
      <li className="nav-item {{ Request::is('dashboard.routine') ? 'active' : '' }}">
        <a className="nav-link" href="{{route('dashboard.routine')}}">
          <i className="far fa-calendar-alt"></i>
          <span>Routine</span>
        </a>
      </li>
    </>
  );
}

const provider: menu = {
  name: "Routine",
  role: "admin",
  component: Routine,
};
export default provider;
