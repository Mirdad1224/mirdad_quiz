import React from 'react'
import { Typography } from '@mui/material'

import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <Typography color='darkblue' fontWeight='bold'> © 2022 All Copyright Reserved. Made By Ali Mirdad ❤</Typography>
    </footer>
  )
}

export default Footer