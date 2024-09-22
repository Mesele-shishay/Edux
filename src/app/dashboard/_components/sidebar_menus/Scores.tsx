import menu from "./Menu_interface";

function Scores() {
  return (
    <>
      <li className="nav-item {{ Request::is('dashboard.score') ? 'active' : '' }}">
        <a className="nav-link" href="{{ route('dashboard.score') }}">
          <i className="fas fa-fw fa-book-reader"></i>
          <span>Scores</span>
        </a>
      </li>
    </>
  );
}


const provider: menu = {
  name: "Clasess",
  role: "student",
  component: Scores,
};
export default provider;

