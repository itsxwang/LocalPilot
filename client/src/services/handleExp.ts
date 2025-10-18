export type Experiences = {
    id: string,
    host_id: string,
    title: string,
    description: string,
    images: string[],
    price: number,
    location: string,
    todo: { title: string }[],
    metLocation: { title: string, location: string, subLocation: string | null},
    category: string,
    available: boolean,

    timings: { date: string, time: string, price : number, prevPrice: number|null }[],


    rating: number,
    reviews: number,
    thingsToKnow: { title: string }[] | null,
    created_at: string
}
// done