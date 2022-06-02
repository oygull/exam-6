import * as React from 'react';
import { useEffect, useState} from 'react'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Posts from './Posts';
import '../Styles/Main.css';
import Chip from '@mui/material/Chip';
import data from '../Data';

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

export default function BasicTabs({setReadingList,readingList}) {

  const [value, setValue] = useState(0);
  const [arr,setArr]=useState(data);
  const [newArr,setNewArr]=useState([]);

  useEffect(() => {
    setNewArr(arr)
  },[])
  const myFunc=(e)=>{
    if(e==='All'){
      setNewArr(arr)
    } if(e==='React'){
      setNewArr(arr.filter(el=>el.category==='React'))
    } if(e==='Python'){
      setNewArr(arr.filter(el=>el.category==='Python'))
    } if(e==='Marketing'){
      setNewArr(arr.filter(el=>el.category==='Marketing'))
    }  if(e==='Productivity'){
      setNewArr(arr.filter(el=>el.category==='Productivity'))
    }  if(e==='Data'){
      setNewArr(arr.filter(el=>el.category==='Data'))
    }  if(e==='Programming'){
      setNewArr(arr.filter(el=>el.category==='Programming'))
    }  if(e==='Economy'){
      setNewArr(arr.filter(el=>el.category==='Economy'))
    } 
  }
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className='home'>
      <div className='home-header'>
      <p className='home-topics'>Your Topics</p>
      <Chip onClick={()=>{myFunc('All')}} label="All" />
      <Chip onClick={()=>{myFunc('React')}} label="React" />
      <Chip onClick={()=>{myFunc('Python')}} label="Python" />
      <Chip onClick={()=>{myFunc('Marketing')}}  label="Marketing" />
      <Chip onClick={()=>{myFunc('Productivity')}}  label="Productivity" />
      <Chip onClick={()=>{myFunc('Data')}}  label="Data" />
      <Chip onClick={()=>{myFunc('Programming')}}  label="Programming" />
      <Chip onClick={()=>{myFunc('Economy')}}  label="Economy" />
      </div>
  <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Recomended" {...a11yProps(0)} />
          <Tab label="Following" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <ul className='posts-list'>
        {
         newArr.map((el,i)=>{
            return(
             <Posts readingList={readingList} setReadingList={setReadingList} el={el} key={i}/>
            )
          })
        }
        </ul>
       
      </TabPanel>
      <TabPanel value={value} index={1}>
        Following
      </TabPanel>
  
    </Box>
    </div>
  );
}
