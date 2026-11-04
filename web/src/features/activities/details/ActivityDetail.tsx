import {
  Button,
  Card,
  CardActions,
  CardMedia,
  Typography,
  CardContent,
} from '@mui/material'
import { useNavigate, Link, useParams } from 'react-router'
import { useActivities } from '../../../lib/hooks/useActivities'

export default function ActivityDetail() {
  const navigate = useNavigate()
  const { id } = useParams()
  const { activity, isLoadingActivity } = useActivities(id)

  if (!activity) return <Typography>Activity not found</Typography>
  if (isLoadingActivity) return <Typography>Loading...</Typography>
  if (activity) console.log(activity)

  return (
    <Card sx={{ borderRadius: 3, maxWidth: 450, mx: 'auto' }}>
      <CardMedia
        component="img"
        src={`../images/categoryImages/${activity.category}.jpg`}
      />
      <CardContent>
        <Typography variant="h5">{activity.title}</Typography>
        <Typography variant="subtitle1" sx={{ fontWeight: 'light' }}>
          {activity.date}
        </Typography>
        <Typography variant="body1">{activity.description}</Typography>
      </CardContent>
      <CardActions>
        <Button component={Link} to={`/manage/${activity.id}`} color="primary">
          Edit
        </Button>
        <Button onClick={() => navigate('/activities')} color="inherit">
          Cancel
        </Button>
      </CardActions>
    </Card>
  )
}
