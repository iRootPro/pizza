import React from 'react';
import {Link} from "react-router-dom";
import styles from './styles.module.css'

const NavBar = () => {
    return (
        <nav>
            <Link to='/' className={styles.link}>Home</Link>
            <Link to='/registration' className={styles.link}>Registration</Link>
            <Link to='/login' className={styles.link}>Login</Link>
            <Link to='/order' className={styles.link}>Order</Link>
            <Link to='/receipt' className={styles.link}>Receipt</Link>
        </nav>
    );
};

export default NavBar;
