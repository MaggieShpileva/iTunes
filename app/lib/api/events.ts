import { customAxios } from '../network'

export const serviceEvents = {
    search: async (text: string, limit?: number) => {
        try {
            const response = await customAxios.get(`/search`, {
                params: {
                    term: text,
                    limit: limit,
                },
            })

            return response.data.results
        } catch (error) {
            throw new Error('Search error')
        }
    },
    searchItem: async (id: number) => {
        try {
            const response = await customAxios.get(`/lookup`, {
                params: {
                    id: id,
                },
            })

            return response.data.results
        } catch (error) {
            throw new Error('Search error')
        }
    },
}
