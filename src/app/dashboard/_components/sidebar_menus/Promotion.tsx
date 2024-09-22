import menu from "./Menu_interface";

function Promotion() {
  return (
    <>
      <li className="nav-item {{ Request::is('dashboard.promotions.index') ? 'active' : '' }}">
        <a
          className="nav-link"
          href="{{ route('dashboard.promotions.index') }}"
        >
          <i className="fas fa-sort-numeric-up"></i>
          <span>Promotion</span>
        </a>
      </li>
    </>
  );
}

const provider: menu = {
  name: "Promotion",
  role: "admin",
  component: Promotion,
};
export default provider;
