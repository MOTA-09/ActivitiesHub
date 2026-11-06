import { AccessTime, Place } from '@mui/icons-material'
import {
  CardContent,
  Typography,
  Card,
  Chip,
  Button,
  Box,
  CardHeader,
  Avatar,
  Divider,
} from '@mui/material'
import { Link } from 'react-router'

type Props = {
  activity: Activity
}

export default function ActivityCard({ activity }: Props) {
  const isHost = false
  const isGoing = false
  const label = isHost
    ? 'You are hosting this activity'
    : 'You are going to this activity'
  const iscancelled = false
  const color = isHost ? 'secondary' : isGoing ? 'warning' : 'default'

  return (
    <Card elevation={3} sx={{ borderRadius: 3 }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <CardHeader
          avatar={<Avatar sx={{ height: 80, width: 80 }} />}
          title={activity.title}
          titleTypographyProps={{
            fontWeight: 'bold',
            fontSize: 20,
            color: 'primary',
          }}
          subheader={
            <>
              Hosted by <Link to={`/profiles/spongebob`}>SpongeBob</Link>
            </>
          }
        />
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mr: 2 }}>
          {(isHost || isGoing) && (
            <Chip label={label} color={color} sx={{ borderRadius: 2 }} />
          )}
          {iscancelled && (
            <Chip label="Canceller" color="error" sx={{ borderRadius: 2 }} />
          )}
        </Box>
      </Box>

      <Divider sx={{ mb: 3 }} />

      <CardContent sx={{ p: 0 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, px: 2 }}>
          <AccessTime sx={{ mr: 1 }} />
          <Typography variant="body2">{activity.date}</Typography>
          <Place sx={{ mr: 1, ml: 3 }} />
          <Typography variant="body2">{activity.venue}</Typography>
        </Box>
        <Divider />
        <Box
          sx={{
            display: 'flex',
            gap: 2,
            backgroundColor: '#c1b4b4',
            py: 3,
            pl: 3,
          }}
        >
          Aquí van a ir los asistentes
        </Box>
      </CardContent>

      <CardContent sx={{ pb: 2 }}>
        <Typography variant="body2">{activity.description}</Typography>
        <Button
          component={Link}
          to={`/activities/${activity.id}`}
          size="medium"
          variant="contained"
          sx={{
            display: 'flex',
            justifySelf: 'self-end',
            borderRadius: 3,
            backgroundColor: '#332153',
            color: 'white',
            '&:hover': { backgroundColor: '#570abc' },
          }}
        >
          View
        </Button>
      </CardContent>
    </Card>
  )
}
