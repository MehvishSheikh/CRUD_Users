import React from 'react';

function Header() {
  return (
    <header id="header" className="header fixed-top d-flex align-items-center">
      <div className="d-flex align-items-center justify-content-between">
        <a href="index.html" className="logo d-flex align-items-center">
          {/* Logo of sigmatronics innovation */}
          <img src="assets/img/logo.png" alt="" />
          <span className="d-none d-lg-block">Smart Solutions</span>
        </a>
        <i className="bi bi-list toggle-sidebar-btn" />
      </div>
      {/* <div className="search-bar">
        <form
          className="search-form d-flex align-items-center"
          method="POST"
          action="#"
        >
          <input
            type="text"
            name="query"
            placeholder="Search"
            title="Enter search keyword"
          />
          <button type="submit" title="Search">
            <i className="bi bi-search" />
          </button>
        </form>
      </div> */}
      {/* End Search Bar */}
      <nav className="header-nav ms-auto">
        <ul className="d-flex align-items-center">
          <li className="nav-item d-block d-lg-none">
            <a className="nav-link nav-icon search-bar-toggle " href="#">
              <i className="bi bi-search" />
            </a>
          </li>
          {/* End Search Icon*/}
          <li className="nav-item dropdown">
            <a className="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
              <i className="bi bi-bell" />
              <span className="badge bg-primary badge-number">4</span>
            </a>
            {/* End Notification Icon */}
            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications">
              <li className="dropdown-header">
                You have 4 new notifications
                <a href="#">
                  <span className="badge rounded-pill bg-primary p-2 ms-2">
                    View all
                  </span>
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li className="notification-item">
                <i className="bi bi-exclamation-circle text-warning" />
                <div>
                  <h4>Pending Commit</h4>
                  <p>30 min. ago</p>
                </div>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li className="notification-item">
                <i className="bi bi-x-circle text-danger" />
                <div>
                  <h4>New Solutions Arrived</h4>
                  <p>1 hr. ago</p>
                </div>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li className="notification-item">
                <i className="bi bi-check-circle text-success" />
                <div>
                  <h4>Account Activated</h4>
                  <p>2 hrs. ago</p>
                </div>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
             
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li className="dropdown-footer">
                <a href="#">Show all notifications</a>
              </li>
            </ul>
            {/* End Notification Dropdown Items */}
          </li>
          {/* End Notification Nav */}
          <li className="nav-item dropdown">
          
          </li>
          {/* End Messages Nav */}
          <li className="nav-item dropdown pe-3">
            <a
              className="nav-link nav-profile d-flex align-items-center pe-0"
              href="#"
              data-bs-toggle="dropdown"
            >
              <span className="d-none d-md-block dropdown-toggle ps-2">
                Mehvish
              </span>
            </a>
            {/* End Profile Iamge Icon */}
            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
              <li className="dropdown-header">
                <h6>Mehvish</h6>
                <span>USER</span>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a
                  className="dropdown-item d-flex align-items-center"
                  href="users-profile.html"
                >
                  <i className="bi bi-person" />
                  <span>My Profile</span>
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a
                  className="dropdown-item d-flex align-items-center"
                  href="users-profile.html"
                >
                  <i className="bi bi-gear" />
                  <span>Account Settings</span>
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a
                  className="dropdown-item d-flex align-items-center"
                  href="pages-faq.html"
                >
                  <i className="bi bi-question-circle" />
                  <span>Need Help?</span>
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item d-flex align-items-center" href="#">
                  <i className="bi bi-box-arrow-right" />
                  <span>Sign Out</span>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
