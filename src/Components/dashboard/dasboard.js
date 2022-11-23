import React from "react";
import "./dashboard.css";
import { Link } from "react-router-dom";

import { useState } from "react";
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBCollapse,
  MDBIcon,
  MDBNavbarNav,
} from "mdb-react-ui-kit";

export default function Dashboard() {
  const [showNavNoTogglerSecond, setShowNavNoTogglerSecond] = useState(false);

  return (
    <>
      <MDBNavbar fixed="top" expand="lg" light bgColor="dark">
        <MDBContainer fluid>
          <Link to="/">
            <MDBNavbarBrand color="light">Navbar</MDBNavbarBrand>
          </Link>
          <MDBNavbarToggler
            type="button"
            data-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setShowNavNoTogglerSecond(!showNavNoTogglerSecond)}
          >
            <MDBIcon icon="bars" fas />
          </MDBNavbarToggler>
          <MDBCollapse navbar show={showNavNoTogglerSecond}>
            <MDBNavbarNav className="mr-auto mb-2 mb-lg-0">
              {/* sidebar */}
              <div className="sidebar position-absolute top-0 start-0">
                <Link to="/">
                  <MDBNavbarBrand className="p-3" color="dark">
                    CRM Application
                  </MDBNavbarBrand>
                </Link>
                <div className="sidebutton p-3 gap-5">
                <Link to="/dashboard">
                  <button className="btn btn-primary">
                    <i class="fa-solid fa-chart-line"></i> Dashboard
                  </button>
                  </Link>
                  <Link to="/servicereq"> 
                  <button className="btn btn-primary">
                    <i class="fa-solid fa-paper-plane"></i> Service Request
                  </button>
                  </Link>
                  
                  
                  <Link to="/">
                  <button className="btn btn-primary">
                    <i class="fa-solid fa-right-from-bracket"></i> Logout
                  </button>
                  </Link>
                  
                </div>
              </div>
            </MDBNavbarNav>

            <div className="nameicon d-grid gap-2 d-md-flex justify-content-md-end">
              <h5>User</h5>
              <span class="material-symbols-outlined">face</span>
            </div>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
      <MDBContainer className="chart gap-5">

        <div className="back p-4">
        <button className="btn btn-primary ">Overal Request</button>
        <h3 className="text-center m-3">20180</h3>
        </div>

        <div className="back p-4">
        <button className="btn btn-primary">Request Successed</button>
        <h3 className="text-center m-3">14900</h3>
     </div>

     <div className="back p-4">
     <button className="btn btn-primary">Pending Request</button>
     <h3 className="text-center m-3">5280</h3>
    </div>

    <div className="m">
    <img alt="example" className="img-fluid headerimg" src="./area-chart.img" />
    </div>
    </MDBContainer>
  
    </>
  );
}