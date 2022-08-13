import { Typography } from '@mui/material'
import Logo from '../../assets/images/logo.png'

import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
        <img src={Logo} alt="" />
        <Typography variant='h5' fontWeight='bold' color='darkblue' >Mirdad Quiz</Typography>
    </nav>
  )
}

export default Navbar