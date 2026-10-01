import {List, ListItem, ListItemText} from '@mui/material';
import './styles.css';
import axios from 'axios';
import {useEffect, useState} from 'react'
import NavBar from './NavBar';

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    axios.get<Activity[]>('https://localhost:5001/api/V1/events')
      .then(response => setActivities(response.data));

      return () => {};
  }, []);


  return (
    <>
      <NavBar />
      <List>
        {activities.map((activity: Activity) => (
          <ListItem key={activity.id}>
            <ListItemText>{activity.title}</ListItemText>
            </ListItem>
        ))}
      </List>
    </>
  )
}

export default App
