import {Box, Container, CssBaseline} from '@mui/material';
import './styles.css';
import axios from 'axios';
import {useEffect, useState} from 'react'
import NavBar from './NavBar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [selectedActivity, setSelectedActivity] = useState<Activity | undefined>(undefined);

  useEffect(() => {
    axios.get<Activity[]>('https://localhost:5001/api/V1/events')
      .then(response => setActivities(response.data));

      return () => {};
  }, []);

  const handleSelectActivity = (id: string) => {
    setSelectedActivity(activities.find(act => act.id === id));
  }

  const handleCancelSelectActivity = () => {
    setSelectedActivity(undefined);
  }

  return (
    <Box sx={{bgcolor: "#f9e8ff" }}>
      <CssBaseline />
      <NavBar />
      <Container maxWidth="xl" sx={{marginTop: 2}}>
        <ActivityDashboard 
          activities={activities} 
          selectActivity={handleSelectActivity}
          cancelSelectActivity={handleCancelSelectActivity}
          selectedActivity={selectedActivity} />
      </Container>
    </Box>
  )
}

export default App
