import React from 'react';
import './Form.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';

function Form() {
    const formikobj = useFormik({
        initialValues: {
            name: '',
            pass: '',
            email: '',
            username: '',
            cp: '',
            city: '',
            pincode: '',
            date: '',
            job_role: '',
            address: '',
            upload: '',
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .required('**Name is required')
                .min(3, '**Name must be at least 3 characters'),
            pass: Yup.string()
                .required('Password is required')
                .min(6, '**Password must be at least 6 characters')
                .matches(/[A-Z]/, "**OneUppercase")
                .matches(/[a-z]/, "**One Lowercase"),
            email: Yup.string()
                .required('Email is required')
                .email("**Invalid email format"),
            username: Yup.string()
                .required('Username is required')
                .min(3, '**Username must be at least 3 characters'),
            city: Yup.string()
                .required('City is required')
                .matches(/^[a-zA-Z\s]+$/, 'Enter a valid city name'),
            cp: Yup.string()
                .required('Confirm Password is required')
                .oneOf([Yup.ref('pass'), null], 'Passwords must match')
        }),
        onSubmit: (values) => {
            console.log(values);
        }
    });

    return (
        <div className='body'>
            <div className="container">
                <div className="apply-box">
                    <h1>
                        Job Application
                        <span className="title-small">(Web)</span>
                    </h1>
                    <form onSubmit={formikobj.handleSubmit}>
                        <div className="form-container">
                            <div className="form-control">
                                <label htmlFor="first-name">First Name</label>
                                <input type="text" id="first-name" name="name" placeholder="Enter First Name.." value={formikobj.values.name} onChange={formikobj.handleChange} required />
                                {formikobj.errors.name && <div style={{ color: 'red' }}><em>{formikobj.errors.name}</em></div>}
                            </div>

                            <div className="form-control">
                                <label htmlFor="last-name">Last Name</label>
                                <input type="text" id="last-name" name="last_name" placeholder="Enter Last Name.." value={formikobj.values.last_name} onChange={formikobj.handleChange} required />
                                {formikobj.errors.last_name && <div style={{ color: 'red' }}><em>{formikobj.errors.last_name}</em></div>}
                            </div>

                            <div className="form-control">
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" name="email" placeholder="Enter Email.." value={formikobj.values.email} onChange={formikobj.handleChange} required />
                                {formikobj.errors.email && <div style={{ color: 'red' }}><em>{formikobj.errors.email}</em></div>}
                            </div>

                            <div className="form-control">
                                <label htmlFor="job-role">Job Role</label>
                                <select name="job_role" id="job-role" value={formikobj.values.job_role} onChange={formikobj.handleChange} required >
                                    <option value="">Select Job Role</option>
                                    <option value="frontend">Frontend Developer</option>
                                    <option value="backend">Backend Developer</option>
                                    <option value="full_stack">Full Stack Developer</option>
                                    <option value="ui_ux">UI UX Designer</option>
                                </select>
                            </div>

                            <div className="address-form-control">
                                <label htmlFor="address">Address</label>
                                <textarea name="address" id="address" cols="50" rows="4" placeholder="Enter Address" value={formikobj.values.address} onChange={formikobj.handleChange} required ></textarea>
                            </div>

                            <div className="form-control">
                                <label htmlFor="city">City</label>
                                <input id="city" type="text" name="city" placeholder="Enter City Name..." value={formikobj.values.city} onChange={formikobj.handleChange} required />
                                {formikobj.errors.city && <div style={{ color: 'red' }}><em>{formikobj.errors.city}</em></div>}
                            </div>

                            <div className="form-control">
                                <label htmlFor="pincode">Pincode</label>
                                <input type="number" id="pincode" name="pincode" placeholder="Enter Pincode Name.." value={formikobj.values.pincode} onChange={formikobj.handleChange} required />
                            </div>

                            <div className="form-control">
                                <label htmlFor="date">Date</label>
                                <input value="2023-06-15" type="date" id="date" name="date" required />
                            </div>

                            <div className="form-control">
                                <label htmlFor="upload">Upload Your CV</label>
                                <input type="file" id="upload" name="upload" required />
                            </div>

                            <div className="form-control">
                                <label htmlFor="cp">Confirm Password</label>
                                <input type="password" id="cp" name="cp" placeholder="Confirm Password" value={formikobj.values.cp} onChange={formikobj.handleChange} required />
                                {formikobj.errors.cp && <div style={{ color: 'red' }}><em>{formikobj.errors.cp}</em></div>}
                            </div>

                        </div>

                        <div className="button-container">
                            <button type="submit" style={{marginRight:'10px'}}>Apply Now</button>
                            <button type="button" onClick={formikobj.handleReset}>Reset</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Form;
