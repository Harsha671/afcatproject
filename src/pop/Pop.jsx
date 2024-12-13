import React, { useState } from 'react';
import "./Pop.css";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    password: ''
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' }); // Clear error on change
  };

  const validateForm = () => {
    let formErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mobileRegex = /^[6-9]\d{9}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    // Full Name validation
    if (!formData.fullName.trim()) {
      formErrors.fullName = "This field should not be left blank";
    } else if (/^\s|\s$/.test(formData.fullName)) {
      formErrors.fullName = "No spaces allowed at the start or end of Full Name";
    }

    // Email validation
    if (!formData.email) {
      formErrors.email = "This field should not be left blank";
    } else if (!emailRegex.test(formData.email)) {
      formErrors.email = "Enter the email address in the correct format";
    }

    // Mobile number validation
    if (!formData.mobile) {
      formErrors.mobile = "This field should not be left blank";
    } else if (!mobileRegex.test(formData.mobile)) {
      formErrors.mobile = "Mobile Number should be 10 digits and start from 6-9";
    } else if (/\D/.test(formData.mobile)) {
      formErrors.mobile = "Only Numerical Values are allowed";
    }

    // Password validation
    if (!formData.password) {
      formErrors.password = "This field should not be left blank";
    } else if (!passwordRegex.test(formData.password)) {
      formErrors.password = "Password must contain uppercase, lowercase, number, special character and be 8+ chars";
    }

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Perform registration logic here (e.g., API call)
      setSuccessMessage("Successfully Registered. Please Sign-In");
      setFormData({
     fullName: '',
    email: '',
    mobile: '',
    password: ''
       
    });
    }
  };

  return (
    <div className="registration-form-popup">
      <form className="registration-form" onSubmit={handleSubmit}>
        <h2>Register</h2>
 

        <label>Full Name <span className="required">*</span></label>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          className={errors.fullName ? 'error' : ''}
        />
        {errors.fullName && <p className="error-message">{errors.fullName}</p>}

        <label>Email Address <span className="required">*</span></label>
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={errors.email ? 'error' : ''}
        />
        {errors.email && <p className="error-message">{errors.email}</p>}

        <label>Mobile Number <span className="required">*</span></label>
        <input
          type="text"
          name="mobile"
          value={formData.mobile}
          onChange={handleChange}
          className={errors.mobile ? 'error' : ''}
        />
        {errors.mobile && <p className="error-message">{errors.mobile}</p>}

        <label>Password <span className="required">*</span></label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className={errors.password ? 'error' : ''}
        />
        {errors.password && <p className="error-message">{errors.password}</p>}

        <button type="submit" className="register-btn">Register</button>
        {successMessage && <p className="success-message">{successMessage}</p>}
      </form>
    </div>
  );
};

export default RegistrationForm;
