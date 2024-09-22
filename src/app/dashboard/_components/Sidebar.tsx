import SideBarNav from "@/app/dashboard/_components/SideBarNav";
import { asset } from "@/utils/utils";
import Link from "next/link";

function Sidebar() {
  return (
    <>
      <ul
        className="navbar-nav bg-darkest sidebar sidebar-dark accordion d-print-none "
        id="accordionSidebar"
      >
        {/* Sidebar - Brand */}
        <Link
          className="sidebar-brand d-flex align-items-center justify-content-center"
          href={"dashboard"}
        >
          <div className="sidebar-brand-icon rotate-n-15">
            <img src={asset("favicon.png")} />
          </div>
          <div className="sidebar-brand-text mx-3">
            {/* {{ config('app.name') }} */}
            Edux React
          </div>
        </Link>

        {/* Divider */}
        <hr className="sidebar-divider" />

        {/* Heading */}
        <div className="sidebar-heading pb-3">
          Signed us Admin {/* {{ auth()->user()->role }} */}
        </div>

        {/* Divider */}
        <hr className="sidebar-divider" />

        {/* Sidebar components */}
        <SideBarNav />

        {/* Sidebar Toggler (Sidebar) */}
        <div className="text-center d-none d-md-inline">
          <button
            className="rounded-circle border-0"
            id="sidebarToggle"
          ></button>
        </div>
      </ul>
    </>
  );
}

export default Sidebar;
