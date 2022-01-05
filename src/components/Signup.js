import React from 'react'
import { withRouter } from 'react-router-dom'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
function Signup(props) {
    let SigupData = {
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    }

let onSubmit=(values,props)=>{
    console.log(values)
    props.history.push('/')
}
    let ValidationSchema = yup.object().shape({
        firstName: yup.string().min(4).required("First name is required"),
        lastName: yup.string().min(4),
        email: yup.string().email("Enter Valid email Id").required("Email Id is Required"),
        password: yup.string().min(6).max(12).required("Password Required")
    })
    let NavtoLogin = () => {
        props.history.push('/Login')
    }

    return (
        <div>
            <h1>Signup Page</h1>
            <button type='submit' className="btn btn-dark" onClick={NavtoLogin}>Login</button>
            <Formik
                initialValues={SigupData}
                onSubmit={onSubmit}
                validationSchema={ValidationSchema} >
                {(props) => (
                    <Form>
                        <div className="container mt-5">
                            <div className="row">
                                <div className="col">
                                    <Field type="text" id='firstname' name='firstName' className="form-control"  placeholder="First name" aria-label="First name" />
                                    <span className='text-danger'><ErrorMessage name='firstName' /></span>
                                </div>
                                <div className="col">
                                    <Field type="text" id='lastname' name='lastName' className="form-control" placeholder="Last name" aria-label="Last name"  />
                                    <span className='text-danger'><ErrorMessage name='lastName' /></span>
                                </div>
                            </div>
                            <div className="mb-3 mt-3"> 
                                <Field type="text" class="form-control" name='email' id="emailid" placeholder="Enter your Emaid id here...." />
                                <span className='text-danger'><ErrorMessage name='email' /></span>
                            </div>
                            <div className="mb-3">
                                <Field type="password" className="form-control" name='password' id="password" placeholder="Enter your password here...."  />
                                <span className='text-danger'><ErrorMessage name='password' /></span>
                            </div>
                            <div className="mb-3">
                                <Field type="password" className="form-control" name='confirmPassword' id="confirmpassword" placeholder="Confirm password here...." />
                            </div>
                            <button type="submit" onSubmit={onSubmit} class="btn btn-primary">Sign Up</button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default withRouter(Signup)
