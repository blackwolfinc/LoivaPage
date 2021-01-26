import React from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';

export const LoginFrom = () => {
    return (
        <MDBContainer className="center pt-5 pb-5" >
          <h1>Login Templete</h1>
        <MDBRow display="flex" justifyContent="center">
          <MDBCol md="6">
            <form>
              <p className="h4 text-center mb-4">Sign in</p>
              <label htmlFor="defaultFormLoginEmailEx" className="grey-text text-left" >
                Your email
              </label>
              <input type="email" id="defaultFormLoginEmailEx" className="form-control" />
              <br />
              <label htmlFor="defaultFormLoginPasswordEx" className="grey-text">
                Your password
              </label>
              <input type="password" id="defaultFormLoginPasswordEx" className="form-control" />
              <div className="text-center mt-4">
                <MDBBtn color="indigo" type="submit">Login</MDBBtn>
              </div>
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      );

}
