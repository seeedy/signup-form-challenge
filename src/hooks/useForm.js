import { useState } from 'react';

const useForm = submit => {
    const [values, setValues] = useState({
        email: '',
        name: '',
        password: '',
    });

    const handleSubmit = e => {
        if (e) e.preventDefault();
        submit();
    };

    const handleChange = e => {
        e.persist();
        setValues(values => ({ ...values, [e.target.name]: e.target.value }));
    };

    return {
        handleChange,
        handleSubmit,
        values,
    };
};

export default useForm;
