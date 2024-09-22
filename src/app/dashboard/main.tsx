"use client";
import "/public/css/select2.min.css";
// import "/public/css/select2-bootstrap4.min.css";
import "/public/css/fontawesome-free/css/all.min.css";
import { redirect, usePathname } from "next/navigation";
import Navbar from "./_components/Navbar";
import Sidebar from "./_components/Sidebar";
function Main_Dashboard({ children }) {
  const pathName = usePathname().split("/").reverse()[0];
  const user = {
    logedIn: true,
  };

  if (!user.logedIn) {
    redirect("login");
  }

  return (
    <>
      <div id="wrapper">
        <Sidebar />
        {/* Content Wrapper */}
        <div id="content-wrapper" className="d-flex flex-column">
          {/* Main Content */}
          <div id="content">
            <Navbar />
            {/* Begin Page Content */}
            <div className="container-fluid">
              {/* Page Heading */}
              <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800 text-capitalize">
                  {pathName}
                </h1>

                {/* @if (auth()->user()->role == 'student' and Request::is('dashboard'))
                        <a href="#" id="print_page" className="d-none d-sm-inline-block  d-print-none btn btn-sm btn-primary shadow-sm">
                            <i className="fas fa-print text-white-50"></i>
                            Print Slip
                        </a>
                @endif */}
              </div>
              {children}
            </div>
            {/* end of page content */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Main_Dashboard;
