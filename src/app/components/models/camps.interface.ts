export interface Camp {
    id: number
    district_id: number
    name: string
    description: string | null
    latitude: string | null
    longitude: string | null
    created_at: number
    updated_at: number
    created_by: number
    updated_by: number
}
