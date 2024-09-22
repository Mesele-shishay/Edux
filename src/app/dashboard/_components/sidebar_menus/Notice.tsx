import menu from "./Menu_interface";

function Notice() {
  return (
    <>
      <li className="nav-item  {{ Request::is('dashboard.notice') ? 'active' : '' }}">
        <a className="nav-link" href="{{route('dashboard.notice')}}">
          <i className="fas fa-bullhorn"></i>
          <span> Notices </span>
        </a>
      </li>
    </>
  );
}

const provider: menu = {
  name: "Notice",
  role: "admin",
  component: Notice,
};
export default provider;
