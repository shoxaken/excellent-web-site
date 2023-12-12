import React from 'react'
import { Typography } from "antd"
import { Link } from 'react-router-dom'
function AppFooter() {
  return (
    <div className='AppFooter'>
      <Link to="/people">People</Link>
      <Link to="/Vip">VIP</Link>
      <Link to="/Ketgan">Ketgan</Link>
      {/* <Typography.Link href='https://www.google.com' target='_blank'>Privacy Policy</Typography.Link>
      <Typography.Link href='https://www.google.com' target='_blank'>Terms of use</Typography.Link> */}
      <Link to={"/UmumiyOquvchilar"}>Umumiy Oquvchilar soni va chiqib ketganlar soni</Link>
    </div>
  )
}

export default AppFooter