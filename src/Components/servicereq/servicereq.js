import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import axios from "axios";
import {
  MDBInput,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBTextArea,
  MDBBtn,
  
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

export default function Servicereq() {
  let navigation = useNavigate();
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      role:"",
      desc:""
    },
    validate,
    onSubmit: async (values) => {
      try {
         await axios.post("https://sanjay.herokuapp.com/servicereq", values);

          navigation("/dashboard");
      } catch (error) {
      }
  },
});
  return (
    <MDBContainer className="loginform">
      <div className="d-flex flex-wrap justify-content-center align-items-center mt-3 gap-5">
        
        <form onSubmit={formik.handleSubmit}>
        <h1 className="p-3 text-center">Service Request</h1>
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
            Name="role"
            className="mb-4"
            type="text"
            label="Role"
            onChange={formik.handleChange}
            value={formik.values.role}
          />
          <MDBTextArea Name="desc" label='Message'  className="mb-4"
          id='textAreaExample' rows={4} onChange={formik.handleChange} value={formik.values.desc} />
          <MDBBtn
            type={"submit"}
            value="Submit"
           
            className="mb-4"
            block
          >
            Request
          </MDBBtn>
          <Link to="/dashboard">
          <MDBBtn>Dashboard</MDBBtn></Link>
          <div className="text-center">
            {/* <p>
              edit
            </p> */}
          </div>
        </form>
      </div>
    </MDBContainer>
  );
}
