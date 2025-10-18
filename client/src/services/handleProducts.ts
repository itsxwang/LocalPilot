export type Products = {
    id: string,
    host_id: string, 
    title: string,
    description: string,
    images: string[],
    price: number,
    category: string,
    stock: number,
    rating: number,
    reviews: number,
    created_at: string
}