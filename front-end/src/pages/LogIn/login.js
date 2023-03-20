import React, { useState } from 'react';
import { MDBContainer, MDBCol, MDBRow, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { logInUser } from '../../store/actions/LogIn/logInActions';
import { ThemeContext } from '@emotion/react';
function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((currentTheme) => currentTheme === "light" ? "dark" : "light");
  }
  const navigate = useNavigate();
  const user = useSelector(state => state)
  // console.log(user)
  const dispatch = useDispatch();
  const handleLogin = async (e) => {
    e.preventDefault();
    toggleTheme();
    dispatch(logInUser(email, password))
    // console.log(user)
    navigate("/")
  }
   console.log(user)
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div id={theme}>
        <form action="" onSubmit={handleLogin}  >
          <MDBContainer fluid className="p-3  my-5 h-custom">
            <h4 className='text-center mb-4' >LogIn</h4>
            <MDBRow>
              <MDBCol className='me-auto ms-auto' md='4'>
                <MDBInput wrapperClass='mb-4'
                  label='Email address'
                  id='formControlLg'
                  placeholder='Enter your email'
                  type='email' size="lg"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)} />
                <MDBInput wrapperClass='mb-4'
                  label='Password'
                  id='formControlLg'
                  type='password' size="lg"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)} />
                <div className="d-flex justify-content-between mb-4">
                  <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
                  <a href="!#">Forgot password?</a>
                </div>
                <div className='text-center text-md-start mt-4 pt-2'>
                  <button className='btn btn-primary'>LogIn</button>
                  <p className="small fw-bold mt-2 pt-1 mb-2">Don't have an account? <a href="/signUp" className="link-danger">Register</a></p>
                </div>
              </MDBCol>
            </MDBRow>


          </MDBContainer>
        </form>
      </div>

    </ThemeContext.Provider>

  );
}

export default LogIn;