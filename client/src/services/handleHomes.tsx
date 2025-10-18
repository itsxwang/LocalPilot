
export type Homes = {
    id: string,
    host_id: string, 

    price: number, // price per night
    title: string,
    location: string,
    additional_info: string[],
    allowed: { Adults: false|number, Children: false|number, Infants: false|number},
    minStay: number, // in nights

    iamges: {title: string[] }[],
    description: {title: string, desc: string},
    amenities: string[],
    
    
    timePeriod: string,
    category: string,

    Duration: string,

    
    thingsToKnow: {title: string}[] | null,


    is_active: boolean,
    created_at: string

}
// done 