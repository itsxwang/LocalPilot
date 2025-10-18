export type services = {
    id: string,
    host_id: string, 

    title: string,
    description: string,
    category: string,

    types: {title: string, price: number, min: number, description: string, images: string[]}[],
    timing: "Morning" | "Afternoon" | "Evening",
    language: string, 
    signLanguage: boolean,
    Duration: string,

    
    thingsToKnow: {title: string}[] | null,

    metLocation: {title: string, location: string, subLocation: string | null},

    is_active: boolean,
    created_at: string

}