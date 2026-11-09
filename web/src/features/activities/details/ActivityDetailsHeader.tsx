import { Card, Badge, CardMedia, Box, Typography, Button } from '@mui/material'
import { Link } from 'react-router'

type Props = {
  activity: Activity
}

export default function ActivityDetailsHeader({ activity }: Props) {
  const isCancelled = false
  const isHost = true
  const isGoing = true
  const loading = false

  return (
    <Card
      sx={{
        position: 'relative',
        mb: 2,
        backgroundColor: 'transparent',
        overflow: 'hidden',
        maxWidth: 640,
        mx: 'auto',
      }}
    >
      {isCancelled && (
        <Badge
          sx={{ position: 'absolute', left: 40, top: 20, zIndex: 1000 }}
          color="error"
          badgeContent="Cancelled"
        />
      )}
      <Box
        sx={{
          position: 'relative',
          height: 300,
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            inset: -20,
            backgroundImage: `url(/images/categoryImages/${activity.category}.jpg)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(20px)',
            transform: 'scale(1.1)',
          },
        }}
      >
        <CardMedia
          component="img"
          image={`/images/categoryImages/${activity.category}.jpg`}
          alt={`${activity.category} image`}
          sx={{
            position: 'relative',
            height: '100%',
            objectFit: 'contain',
          }}
        />
      </Box>
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          width: '100%',
          color: 'white',
          padding: 2,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          background:
            'linear-gradient(to top, rgba(0, 0, 0, 1.0), transparent)',
          boxSizing: 'border-box',
        }}
      >
        {/* Text Section */}
        <Box>
          <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
            {activity.title}
          </Typography>
          <Typography variant="subtitle1">{activity.date}</Typography>
          <Typography variant="subtitle2">
            Hosted by{' '}
            <Link
              to={`/profiles/username`}
              style={{ color: 'white', fontWeight: 'bold' }}
            >
              Bob
            </Link>
          </Typography>
        </Box>

        {/* Buttons aligned to the right */}
        <Box sx={{ display: 'flex', gap: 2 }}>
          {isHost ? (
            <>
              <Button
                variant="contained"
                color={isCancelled ? 'success' : 'error'}
                onClick={() => {}}
              >
                {isCancelled ? 'Re-activate Activity' : 'Cancel Activity'}
              </Button>
              <Button
                variant="contained"
                component={Link}
                to={`/manage/activityId`}
                disabled={isCancelled}
                sx={{
                  backgroundColor: '#570abc',
                  '&:hover': { backgroundColor: '#923dbc' },
                }}
              >
                Manage Event
              </Button>
            </>
          ) : (
            <Button
              variant="contained"
              sx={{
                backgroundColor: isGoing ? '#570abc' : undefined,
                '&:hover': isGoing ? { backgroundColor: '#923dbc' } : undefined,
              }}
              color={isGoing ? undefined : 'info'}
              onClick={() => {}}
              disabled={isCancelled || loading}
            >
              {isGoing ? 'Cancel Attendance' : 'Join Activity'}
            </Button>
          )}
        </Box>
      </Box>
    </Card>
  )
}
