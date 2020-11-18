import React, { useState } from 'react';
import useForm from '../hooks/useForm';

import styles from './Form.module.css';

const Form = () => {
    const { handleSubmit, handleChange, values } = useForm();

    return (
        <div className={styles.container}>
            <div className={styles.form}>
                <h1>Signup</h1>
                <form noValidate onSubmit={handleSubmit}>
                    <div className={styles.field}>
                        <label>Name</label>
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
                    <div className={styles.field}>
                        <label className='label'>Email Address</label>
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
                    <div className={styles.field}>
                        <label className='label'>Password</label>
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
