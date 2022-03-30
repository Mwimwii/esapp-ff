export interface FaabsAttendance {
    created_at: number
    created_by: number
    duration: string | null
    faabs_group_id: number
    facilitators: string | null
    farmer_id: number
    full_names: string | null
    household_head_type: string | null
    id: number
    marital_status: string | null
    partner_organisations: string | null
    quarter: string | null
    sex: string | null
    topic: string | null
    topic_indicator: string | null
    topic_subcomponent: string | null
    training_date: string | null
    training_type: string | null
    updated_at: number
    updated_by: number
    year_of_birth: null
    youth_non_youth: null
}

export interface FaabsTopic {
    id: number
    faabs_id: number
    training_type: string
    topic_id: number
}

export interface FaabsGroup {
    id: number
    camp_id: number
    name: string
    code: string
    status: number
    created_at: number
    updated_at: number
    created_by: number
    updated_by: number
}
