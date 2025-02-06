import { Box, Tab, Tabs } from '@mui/material';
import  { useCallback, useEffect, useState} from 'react'
import DebounceSearch from './components/debounceSearch';


const SensingAquaLabSystem = () => {
  const [value, setValue] = useState<number>(0);
  
  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    // setExternalSearch(newValue)
    // handleExternalSearch()
  };
  const handleSearch =(_searchquery:string)=>{
    
  }
  
  const myFunc = useCallback(() => {
    console.log('Doing something');
  },[]);
  
  useEffect(() => {
    myFunc();
  }, [myFunc]);
  return (
    <div>
      <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <Tabs value={value} onChange={handleChange} >
        <Tab label="Item One" />
        <Tab label="Item Two" />
        <Tab label="Item Three" />
      </Tabs>
    </Box>

    <DebounceSearch 
    onSearch={handleSearch}
    setExternalState ={()=>setValue(0)}/>
   <button onClick={myFunc}>on Click</button>
    </div>
  )
}

export default SensingAquaLabSystem
