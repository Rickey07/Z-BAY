import React from 'react';
import NotFoundImage from '../../assets/Images/NotFound.jpg'

const NotFound = () => {
  return (
    <div style={{maxHeight:"350px"}}>
      <img src={NotFoundImage} style={{objectFit:"contain",height:"100%",width:"100%",maxHeight:"350px"}} alt={"Not Found"}></img>
    </div>
  )
}

export default NotFound
