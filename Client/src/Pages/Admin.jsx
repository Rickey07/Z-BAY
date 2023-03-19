import { Typography,Box } from '@mui/material'
import React,{useState} from 'react'
import AdminSideBar from '../Components/SideBar/AdminSideBar'
import UserListItem from '../Components/UsersList/userListComponents/UserListItem'
import UsersList from '../Components/UsersList/UsersList'

const Admin = () => {
  const [selectedLink,setSelectedLink] = useState("Dashboard")

  return (
    <div>
        <AdminSideBar selectedLink={selectedLink} setSelectedLink={setSelectedLink}/>
        <Box>
          <Typography variant='h4' component={"h4"}>
            {selectedLink}
          </Typography>
          <UsersList/>
        </Box>
    </div>
  )
}

export default Admin
