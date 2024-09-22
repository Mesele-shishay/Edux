import menu from "./Menu_interface";

function General_Info() {
  return (
    <>
      <li className="nav-item">
        <a className="nav-link" href="#">
          <i className="fas fa-fw fa-info-circle"></i>
          <span>General Information</span>
        </a>
      </li>
    </>
  );
}

const provider: menu = {
  name: "Clasess",
  role: "admin",
  component: General_Info,
};
export default provider;
