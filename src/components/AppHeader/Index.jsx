import React from 'react'
import excellent from '../../assets/Excellent 3.png'
import {MailOutlined , BellFilled} from "@ant-design/icons"
import { Link } from 'react-router-dom'
// import styles from "./Home.css"
// import
function AppHeader() {
  return (
    <div className='AppHeader'>
      <Link to='/dashbaor'><img width={40}  src={excellent} alt="" /></Link>
      <h1 className='Header-text'>Excellent Study center</h1>
      <div className='Header-icons'>

        <MailOutlined style={{fontSize:24}} />
        <div className='header-round'>20</div>

        <BellFilled style={{fontSize:24}} />

        </div>
        
    </div>
    
  )
}

export default AppHeader