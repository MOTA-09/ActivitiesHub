import { Box, Container, CssBaseline } from '@mui/material'
import './styles.css'
import NavBar from './NavBar'
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard'

function App() {
  return (
    <Box sx={{ bgcolor: '#f9e8ff', minHeight: '100vh' }}>
      <CssBaseline />
      <NavBar />
      <Container maxWidth="xl" sx={{ marginTop: 2 }}>
        <ActivityDashboard />
      </Container>
    </Box>
  )
}

export default App
