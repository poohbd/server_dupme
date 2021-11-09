import axios from 'axios';
import {useState,useEffect} from 'react';
const OnlineComponent = () =>{
    const [online,setOnline] = useState(0)
  // let onlinetemp = 0;
    useEffect(() => {
        const interval = setInterval(() => {
        console.log('This will run every second!');
        axios.get(`http://localhost:3000/status`).then(res => {
            const onlinetemp = res.data;
            setOnline(onlinetemp.NumberPlayer);
        })
    }, 1000);
    return () => clearInterval(interval);
    }, [])
  
    
    return(
        <h2>Online : {online} users</h2>    
    )
    
}
export default OnlineComponent;