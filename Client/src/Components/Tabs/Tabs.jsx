import React from 'react';
import { Tab,Tabs,Box, } from '@mui/material';

const NavTabs = ({values,handleChange,activeTab}) => {
  return (
    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
    <Tabs value={activeTab} onChange={handleChange} aria-label="basic tabs example" textColor='primary' indicatorColor='primary'>
     {values?.map((data) => {
      return  <Tab key={data} value={data} label={data}/>
     })}
    </Tabs>
  </Box>
  )
}

export default NavTabs
