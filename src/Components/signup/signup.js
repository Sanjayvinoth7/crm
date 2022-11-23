import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import axios from "axios";

import {
  MDBInput,
  MDBContainer,
  MDBCol,
  MDBRow,
  
  
} from "mdb-react-ui-kit";

const validate = values => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = 'Required';
  } else if (values.firstName.length > 15) {
    errors.firstName = 'Must be 15 characters or less';
  }

  if (!values.lastName) {
    errors.lastName = 'Required';
  } else if (values.lastName.length > 20) {
    errors.lastName = 'Must be 20 characters or less';
  }

  if (!values.email) {
      errors.email = '';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid Email address';
  }
  return errors;
};

export default function Signup() {
  let navigation = useNavigate();
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: ""
    },
    validate,
    onSubmit: async (values) => {
      try {
         await axios.post("https://sanjay.herokuapp.com/register", values);

          navigation("/");
      } catch (error) {
      }
  },
});
  return (
    <MDBContainer className="loginform">
      <div className="d-flex flex-wrap justify-content-center align-items-center mt-3 gap-5">
        <img alt="example" className="img-fluid headerimg" src="./crm.png" />
        <form onSubmit={formik.handleSubmit}>
          <h1 className="p-3">Register User Account</h1>
          <MDBRow className="mb-4">
            <MDBCol>
              <MDBInput
              id="firstName"
                Name="firstName"
                label="First name"
                onChange={formik.handleChange}
                value={formik.values.firstName}
              />{formik.errors.firstName ? <div style={{ color: "red" }}>{formik.errors.firstName}</div> : null}
              
            </MDBCol>
            <MDBCol>
              <MDBInput
              id="lastName"
                Name="lastName"
                label="Last name"
                onChange={formik.handleChange}
                value={formik.values.lastName}
              />{formik.errors.lastName ? <div style={{ color: "red" }}>{formik.errors.lastName}</div> : null}
              
            </MDBCol>
          </MDBRow>
          <MDBInput
          id="email"
            Name="email"
            className="mb-4"
            type="email"
            label="Email address"
            onChange={formik.handleChange}
            value={formik.values.email}
          />{formik.errors.email ? <div style={{ color: "red" }}>{formik.errors.email}</div> : null}
          
          <MDBInput
            Name="password"
            className="mb-4"
            type="password"
            label="Password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          <button
            type={"submit"}
            value="Submit"
           
            className=" btn btn-primary mb-4"
            block
          >
            Register
          </button>
          <div className="text-center">
            <p>
              Already have account? <Link to="/">Login</Link>
            </p>
          </div>
        </form>
      </div>
    </MDBContainer>
  );
}
