import React from 'react';
import useForm from '../hooks/useForm';
import validate from './FormValidation';

import styles from './Form.module.css';

const Form = () => {
    const submit = () => {
        window.alert(`The form is being submitted to server`);
    };

    const { handleSubmit, handleChange, values, errors, passwordSafety } = useForm(submit, validate);

    console.log({ passwordSafety, errors });

    return (
        <div className={styles.container}>
            <div className={styles.form}>
                <h1>Signup</h1>
                <form noValidate onSubmit={handleSubmit}>
                    <div className={errors && errors.name ? [styles.field, styles.isDanger].join(' ') : styles.field}>
                        <div className={styles.fieldLabel}>
                            <label>Name</label>
                            {errors && errors.name && <span className={styles.dangerText}>{errors.name}</span>}
                        </div>

                        <div className={styles.control}>
                            <input
                                className='input'
                                type='text'
                                name='name'
                                required
                                value={values.name}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className={errors && errors.email ? [styles.field, styles.isDanger].join(' ') : styles.field}>
                        <div className={styles.fieldLabel}>
                            <label className='label'>Email Address</label>
                            {errors && errors.email && <span className={styles.dangerText}>{errors.email}</span>}
                        </div>
                        <div className={styles.control}>
                            <input
                                className='input'
                                type='email'
                                name='email'
                                required
                                value={values.email}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div
                        className={
                            passwordSafety === 'high'
                                ? [styles.field, styles.isOk].join(' ')
                                : passwordSafety === 'mid'
                                ? [styles.field, styles.isWarning].join(' ')
                                : errors.password
                                ? [styles.field, styles.isDanger].join(' ')
                                : styles.field
                        }
                    >
                        <div className={styles.fieldLabel}>
                            <label className='label'>Password</label>
                            {errors && errors.password && (
                                <span className={passwordSafety === 'mid' ? styles.warningText : styles.dangerText}>
                                    {errors.password}
                                </span>
                            )}
                        </div>
                        <div className={styles.control}>
                            <input
                                className='input'
                                type='password'
                                name='password'
                                required
                                value={values.password}
                                onChange={handleChange}
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
