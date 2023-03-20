import React, { useState } from 'react';
import {
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBCol,
    MDBRow,
    MDBInput,
}
    from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../store/actions/SignUp/signUpActions';

function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleSignUp = async (e) => {
        e.preventDefault();
        dispatch(registerUser(name, email, password));
        navigate("/");
    }
    return (
        <form onSubmit={handleSignUp}>
            <MDBContainer fluid>
                <MDBCard className='mx-5 mb-5 p-5 shadow-5' style={{ marginTop: '5%', background: 'hsla(0, 0%, 100%, 0.8)', backdropFilter: 'blur(30px)' }}>
                    <MDBCardBody className='p-5 text-center'>
                        <h2 className="fw-bold mb-5">Sign up now</h2>
                        <MDBRow>
                            <MDBCol col='6'>
                                <MDBInput wrapperClass='mb-4'
                                    placeholder='Enter Your Name'
                                    label='Name' id='form1'
                                    type='text'
                                    value={name}
                                    onChange={(e) => setName(e.target.value)} />
                            </MDBCol>
                        </MDBRow>
                        <MDBInput wrapperClass='mb-4'
                            placeholder='Enter Your Email'
                            label='Email' id='form2'
                            type='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <MDBInput wrapperClass='mb-4'
                            placeholder='Enter  Password'
                            label='Password' id='form3'
                            type='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} />
                        <button className='btn btn-primary w-100 mb-4' size='md' >sign up</button>
                    </MDBCardBody>
                </MDBCard>
            </MDBContainer>
        </form>

    );
}

export default SignUp;