import React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AddedPosts from './AddedPosts';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


function Stories({postArr}) {

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className='stories'>
        <div className='list-header'>
          <h2 className='list-title'>Your stories</h2>
          <div>
            <button className='list-btn'>Write a story</button>
            <button className='list-btn list-btn-second'>Import a story</button>
          </div>
      </div>
      <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Drafts 2" {...a11yProps(0)} />
          <Tab label="Published" {...a11yProps(1)} />
          <Tab label="Responses" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        {
          postArr.map((el,i)=>{
            return(
              <AddedPosts el={el} key={i}/>
            )
          })
        }
      </TabPanel>
      <TabPanel value={value} index={1}>
      You haven’t published any public stories yet.
      </TabPanel>
      <TabPanel value={value} index={2}>
   
      </TabPanel>
    </Box>
    </div>
  )
}

export default Stories