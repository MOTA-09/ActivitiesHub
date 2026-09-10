import {List, ListItem, ListItemText, Typography} from '@mui/material';
import './App.css'
import {useEffect, useState} from 'react'

function App() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetch('https://localhost:5001/api/V1/events')
      .then(response => response.json())
      .then(data => setActivities(data))
      .catch(error => console.error('Error fetching activities:', error));

      return () => {};
  }, []);


  return (
    <>
      <Typography variant="h3">Events Hub</Typography>
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
