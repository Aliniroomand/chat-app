import React from 'react';

//styles
import styles from '../styles/Login.module.css';

//Icons
import googleIcon from '../assets/google.svg'

const LoginPage = () => {
    return (
        <div className={styles.loginPage}>
            <div className={styles.loginCard}>
                <h1>Welcome to your chat app</h1>
                <div className={styles.button}>
                    <img src={googleIcon} />Sing In with Google
                </div>
            </div>
        </div>
    );
};

export default LoginPage;