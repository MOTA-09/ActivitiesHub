import axios from 'axios'
import { useQuery } from '@tanstack/react-query'

export const useActivities = () => {
  const { data: activities, isPending } = useQuery({
    queryKey: ['activities'],
    queryFn: async () => {
      const response = await axios.get<Activity[]>(
        'https://localhost:5001/api/V1/events',
      )
      return response.data
    },
  })

  return { activities, isPending }
}
