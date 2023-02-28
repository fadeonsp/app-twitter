import { ApiService } from "../services/ApiService";
import useSWR from 'swr'

export function useApi(enpoint, config) {
    const {data, error} = useSWR(enpoint, async (url) => {
        const response = await ApiService(url, config)

        return response.data
    })
    return { data, error }
}
