import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";

import {
  
  MDBContainer,

} from "mdb-react-ui-kit";


export default function Demo() {
  const navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },

    onSubmit: async (values) => {
      try {
        
        
        navigate("/dashboard");
      } catch (error) {
        console.log(error);
      }
    },
  });
  return (
    <MDBContainer className="loginform">
      <div className="d-flex flex-wrap justify-content-center align-items-center mt-3 gap-5">
        <img alt="example" className="img-fluid headerimg" src="./crm.png" />
        <form onSubmit={formik.handleSubmit}>
          <h1 className="p-3">Demo User Account</h1>
        
          
          <div className="text-center">
          <p>
             email: user123@gmail.com
            </p>
            <p>
              pass: user
            </p>
            <Link to="/">Login</Link>
          </div>
        </form>
      </div>
    </MDBContainer>
  );
}