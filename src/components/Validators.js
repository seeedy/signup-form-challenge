// rules for validation of form fields
const username = value => {
    let error;
    if (!value) {
        error = 'Name is required';
    }
    return error;
};

const email = value => {
    let error;
    if (!value) {
        error = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(value)) {
        error = 'Email address is invalid';
    }
    return error;
};

const password = value => {
    let error = '';
    let passwordSafety = '';
    if (!value) {
        error = 'Password is required';
        passwordSafety = 'low';
    } else if (value.length < 6) {
        error = 'Password must contain at least 6 characters';
        passwordSafety = 'low';
    } else if (!/[A-Z]/.test(value)) {
        error = 'Password must contain at least one capital letter';
        passwordSafety = 'mid';
    } else if (!/[a-z]/.test(value)) {
        error = 'Password must contain at least one small letter';
        passwordSafety = 'mid';
    } else if (!/\d/.test(value)) {
        error = 'Password must contain at least one number';
        passwordSafety = 'mid';
    } else {
        passwordSafety = 'high';
    }
    return { error, passwordSafety };
};

const validators = { username, email, password };
export default validators;
