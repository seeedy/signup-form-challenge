// rules for validation of form fields
const validate = values => {
    let errors = {};

    if (!values.name) {
        errors.name = 'Name is required!';
    }

    if (!values.email) {
        errors.email = 'Email address is required!';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Email address is invalid!';
    }

    if (!values.password) {
        errors.password = 'Password is required!';
    } else if (values.password.length < 6) {
        errors.password = 'Password must contain at least 6 characters';
    } else if (!/\d/.test(values.password)) {
        errors.password = 'Password must contain at least one number';
    } else if (!/[a-z][A-Z]/.test(values.password)) {
        errors.password = 'Password must contain at least one small and one capital letter';
    }

    console.log(errors);

    return errors;
};

export default validate;
