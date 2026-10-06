import { Box } from "@mui/material";
import ActivityCard from "./ActivityCard";

type Props = {
    activities: Activity[];
}

export default function ActivityList({ activities }: Props) {
    return (
        <Box sx={{display: 'flex', flexDirection: 'column', gap: 3, mt: 2}}>
            {activities.map((activity: Activity) => (
                <ActivityCard key={activity.id} activity={activity} />
            ))}
        </Box>
    )
}