import React from 'react'
import { Button } from "@mui/material";
import NotFoundImage from '../../assets/images/404.jpg'
import { Link } from 'react-router-dom';

import styles from './NotFound.module.css'

const NotFound = () => {
  return (
    <main className={styles.notFound}>
      <img src={NotFoundImage} alt="" />
      <Link to='/'>
      <Button variant='contained' size='large'>Go To Home</Button>
      </Link>
    </main>
  )
}

export default NotFound