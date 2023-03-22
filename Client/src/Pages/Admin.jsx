import { Typography,Box } from '@mui/material'
import React,{useState} from 'react'
import AdminSideBar from '../Components/SideBar/AdminSideBar'
import UsersList from '../Components/UsersList/UsersList'

const Admin = () => {
  const [selectedLink,setSelectedLink] = useState("Dashboard")

  const componentToBeShown = selectedLink === "Users" ? <UsersList/> : "No Data Found"; 

  return (
    <div>
        <AdminSideBar selectedLink={selectedLink} setSelectedLink={setSelectedLink}/>
        <Box>
          <Typography variant='h4' component={"h4"}>
            {selectedLink}
          </Typography>
          {componentToBeShown}
        </Box>
    </div>
  )
}

export default Admin;
