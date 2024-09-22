import menus from "./SideBar_Menus";
import type menu from "./sidebar_menus/Menu_interface";
function SideBarNav() {
  return (
    <>
      {/* Accessible for all logged in users */}
      <div id="accordion">
        {menus.map((item: menu, index) => {
          const { role, component } = item;
          if (role == "admin") return component(index);
        })}
      </div>

      {/* Divider */}
      <hr className="sidebar-divider d-none d-md-block" />
    </>
  );
}

export default SideBarNav;
