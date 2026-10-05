import {Container, CssBaseline, List, ListItem, ListItemText} from '@mui/material';
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
      <CssBaseline />
      <NavBar />
      <Container maxWidth="xl" sx={{marginTop: 2}}>
        <List>
          {activities.map((activity: Activity) => (
            <ListItem key={activity.id}>
              <ListItemText>{activity.title}</ListItemText>
              </ListItem>
          ))}
        </List>
      </Container>
    </>
  )
}

export default App
