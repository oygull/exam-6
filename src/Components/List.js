import React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import readingListImg from '../images/reading-list.png'
import { Link } from 'react-router-dom';

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

function List() {

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className='list'>
      <div className='list-header'>
          <h2 className='list-title'>Your lists</h2>
          <button className='list-btn'>New list</button>
      </div>
      <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Saved" {...a11yProps(0)} />
          <Tab label="Highlights" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <div className='list-aside'>
            <div className='first-list-com'>
              <h3 className='list-par'>
                 Create a list to easily organize and share stories
              </h3>
              <button className='list-aside-btn'>Start a list</button>
            </div>
            <div className='second-list-com'>
                <div className='circle'>
                    <span className='circle-span'><i className='bx bx-bookmark-alt-plus'></i></span>
                </div>
            </div>
                <button className='close-list-btn'><i class='bx bx-x' ></i></button>
        </div>
        <div className='reading-list'>
          <div>
            <h3 className='reading-list-title'>Reading List</h3>
            <Link to="/readinglist"> <button className='reading-list-btn'>View List</button></Link>
          </div>
          <div className='list-imgbox'>
            <img className='raeding-list-img' src={readingListImg} alt="raeding-list-img" />
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        ...
      </TabPanel>
    </Box>
    </div>
  )
}

export default List