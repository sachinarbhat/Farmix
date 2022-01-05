import React from 'react'
import { withRouter } from 'react-router-dom'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
function Login(props) {
    let Data = {
        userid: '',
        password: '',
        remember: false
    }
    let ValidationSchema = yup.object().shape({
        userid: yup.string().email("Please enter valid email").required("Email required"),
        password: yup.string().required("Password Required")
    })
    let onSubmit = (values, props) => {
        console.log(values);
        props.history.push('/')
    }
    let NavtoSignup = () => {
        props.history.push('/Signup')
    }

    return (<div className='container mt-5'>
        <button type='submit' className="btn btn-dark" onClick={NavtoSignup}>Signup</button>
        <Formik
            initialValues={Data}
            onSubmit={onSubmit}
            validationSchema={ValidationSchema}>
            {(props) => (
                <Form>
                    <div className="row mb-3">
                        <label className="col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-10">
                            <Field type="email" name='userid' className="form-control" placeholder='Enter user Id here....' />
                            <span className='text-danger'><ErrorMessage name='userid' /></span>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label className="col-sm-2 col-form-label">Password</label>
                        <div className="col-sm-10">
                            <Field type="password" name='password' className="form-control" placeholder='Enter user password here....' />
                            <span className='text-danger'><ErrorMessage name='password' /></span>
                        </div>
                    </div>
                    <button type="submit" onSubmit={onSubmit} className="btn btn-primary">Sign in</button>
                </Form>
            )}
        </Formik>
    </div>
    )
}

export default withRouter(Login)
