import { useState, useEffect } from 'react';

const useForm = (submit, validators) => {
    const [values, setValues] = useState({});
    const [errors, setErrors] = useState({});
    const [passwordSafety, setPasswordSafety] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        // check if form is currently submitting and has no errors
        if (isSubmitting && Object.keys(errors).length === 0) {
            submit();
            setIsSubmitting(false);
            setValues({});
            setErrors({});
            setPasswordSafety('');
        }
    }, [errors, submit, isSubmitting]);

    const handleSubmit = e => {
        if (e) e.preventDefault();
        setIsSubmitting(true);

        // validate all input values on form
        let errors = {};
        Object.keys(validators).forEach(id => {
            const validator = validators[id];
            if (id === 'password' && validator) {
                const { error } = validator(values[id]);
                if (error) {
                    errors[id] = error;
                }
            } else if (validator) {
                const error = validator(values[id]);
                if (error) {
                    errors[id] = error;
                }
            }
            return errors;
        });
        setErrors(errors);
    };

    const handleChange = e => {
        e.persist();
        setValues(values => ({ ...values, [e.target.id]: e.target.value }));
    };

    const handleBlur = e => {
        // single field input validation on blur

        let { id, value } = e.target;
        let validator = validators[id];

        if (id === 'password' && validator) {
            const { error, passwordSafety } = validator(value);
            setErrors(errors => ({ ...errors, [id]: error }));
            setPasswordSafety(passwordSafety);
        } else if (validator) {
            setErrors(errors => ({ ...errors, [id]: validator(value) }));
            console.log({ errors });
            setValues(values => ({ ...values, [id]: value }));
        }
    };

    return {
        handleChange,
        handleSubmit,
        handleBlur,
        values,
        errors,
        passwordSafety,
    };
};

export default useForm;
