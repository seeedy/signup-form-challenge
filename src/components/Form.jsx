import React from 'react';
import useForm from '../hooks/useForm';
import validators from './validators';

import styles from './Form.module.css';

const Form = () => {
    const submit = () => {
        // This is where the post request would happen
        window.alert(`The form is being submitted to server`);
    };

    // custom hook to handle the form flow
    // passing a submit callback and the form validation functions
    const { handleSubmit, handleChange, handleBlur, values, errors, passwordSafety } = useForm(submit, validators);

    return (
        <div className={styles.container}>
            <div className={styles.form}>
                <h1>Signup</h1>
                <form noValidate onSubmit={handleSubmit}>
                    <div
                        className={errors && errors.username ? [styles.field, styles.isDanger].join(' ') : styles.field}
                    >
                        <div className={styles.fieldLabel}>
                            <label htmlFor='username'>Name</label>
                            {errors.username && <span className={styles.dangerText}>{errors.username}</span>}
                        </div>

                        <div className={styles.control}>
                            <input
                                className='input'
                                type='text'
                                id='username'
                                required
                                placeholder='Enter your name'
                                value={values.username || ''}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                        </div>
                    </div>

                    <div className={errors.email ? [styles.field, styles.isDanger].join(' ') : styles.field}>
                        <div className={styles.fieldLabel}>
                            <label htmlFor='email'>Email</label>
                            {errors.email && <span className={styles.dangerText}>{errors.email}</span>}
                        </div>
                        <div className={styles.control}>
                            <input
                                className='input'
                                type='email'
                                id='email'
                                required
                                placeholder='Enter email'
                                value={values.email || ''}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                        </div>
                    </div>

                    <div
                        className={
                            passwordSafety === 'low'
                                ? [styles.field, styles.isDanger].join(' ')
                                : passwordSafety === 'mid'
                                ? [styles.field, styles.isWarning].join(' ')
                                : passwordSafety === 'high'
                                ? [styles.field, styles.isOk].join(' ')
                                : styles.field
                        }
                    >
                        <div className={styles.fieldLabel}>
                            <label htmlFor='password'>Password</label>

                            <span
                                className={
                                    passwordSafety === 'high'
                                        ? styles.okText
                                        : passwordSafety === 'mid'
                                        ? styles.warningText
                                        : styles.dangerText
                                }
                            >
                                {passwordSafety === 'high' ? 'Looks good!' : errors.password}
                            </span>
                        </div>
                        <div className={styles.control}>
                            <input
                                className='input'
                                type='password'
                                id='password'
                                required
                                placeholder='Enter password'
                                value={values.password || ''}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                        </div>
                    </div>

                    <button type='submit'>Sign Up</button>
                </form>
            </div>
        </div>
    );
};

export default Form;
