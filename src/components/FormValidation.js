// rules for validation of form fields
const validate = values => {
    let errors = {};
    let passwordSafety = '';

    if (!values.name) {
        errors.name = 'Name is required';
    }

    if (!values.email) {
        errors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Email address is invalid';
    }

    if (!values.password) {
        errors.password = 'Password is required';
        passwordSafety = 'low';
    } else if (values.password.length < 6) {
        errors.password = 'Password must contain at least 6 characters';
        passwordSafety = 'low';
    } else if (!/[A-Z]/.test(values.password)) {
        errors.password = 'Password must contain at least one capital letter';
        passwordSafety = 'mid';
    } else if (!/[a-z]/.test(values.password)) {
        errors.password = 'Password must contain at least one small letter';
        passwordSafety = 'mid';
    } else if (!/\d/.test(values.password)) {
        errors.password = 'Password must contain at least one number';
        passwordSafety = 'mid';
    } else {
        passwordSafety = 'high';
    }

    return { errors, passwordSafety };
};

export default validate;
