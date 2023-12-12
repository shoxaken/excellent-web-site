import React from 'react'
import { Typography } from "antd"
import { Link } from 'react-router-dom'
function AppFooter3() {
  return (
    <div className='AppFooter'>
      <Link to="/Tolov_royxat">Tolov ro'yxati</Link>
      <Link to="/tolovtree">Qardorlar Ro'yxari</Link>
      <Link to="/TolovMalumot">To'lov haqida ma'lumotlar</Link>
      {/* <Link to="/Ketgan">Ketgan</Link> */}
      {/* <Typography.Link href='https://www.google.com' target='_blank'>Privacy Policy</Typography.Link>
      <Typography.Link href='https://www.google.com' target='_blank'>Terms of use</Typography.Link> */}
    </div>
  )
}

export default AppFooter3