import { react } from "react";

function Navbar() {
  return (
    <>
      {/* <!-- As a link --> */}
      <nav className="navbar bg-white shadow ">
        <div className="container-fluid">
          <a className="navbar-brand fw-bold" href="#">
            TaskMate
          </a>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
