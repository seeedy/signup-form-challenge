import { useState, useEffect } from 'react';

const useForm = (submit, validate) => {
    const [values, setValues] = useState({
        email: '',
        name: '',
        password: '',
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        // check if form is currently submitting and has no errors
        if (isSubmitting && Object.keys(errors).length === 0) {
            submit();
        }
    }, [errors, submit, isSubmitting]);

    const handleSubmit = e => {
        if (e) e.preventDefault();
        setIsSubmitting(true);
        // validate form and set errors in state
        setErrors(validate(values));
    };

    const handleChange = e => {
        e.persist();
        // set field values in state
        setValues(values => ({ ...values, [e.target.name]: e.target.value }));
    };

    return {
        handleChange,
        handleSubmit,
        values,
    };
};

export default useForm;
