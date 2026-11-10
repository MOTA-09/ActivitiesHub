import { Group } from '@mui/icons-material'
import { Box, Button, Paper, Typography } from '@mui/material'
import { useNavigate } from 'react-router'

export default function HomePage() {
  const navigate = useNavigate()

  return (
    <Paper
      sx={{
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        gap: 6,
        height: '100vh',
        backgroundImage: 'linear-gradient(to right, #570abc, #923dbc)',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alingContent: 'center',
          alignItems: 'center',
          gap: 3,
          color: 'white',
        }}
      >
        <Group sx={{ height: 110, width: 110 }} />
        <Typography variant="h1" sx={{ fontWeight: 'bold' }}>
          Activities Hub
        </Typography>
      </Box>
      <Typography variant="h2">Welcome</Typography>
      <Button
        onClick={() => navigate('/activities')}
        size="large"
        variant="contained"
        sx={{
          height: 80,
          borderRadius: 4,
          fontSize: '1.5rem',
          display: 'flex',
          justifySelf: 'self-end',
          backgroundColor: '#332153',
          color: 'white',
          '&:hover': { backgroundColor: '#570abc' },
        }}
      >
        Let's go!
      </Button>
    </Paper>
  )
}
