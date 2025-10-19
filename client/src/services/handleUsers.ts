export type user = {
    id: string ,
    name: string,
    email: string,
    password_hash: string,

    hobby: string | null,
    funFact: string | null,
    timedActivity: string | null,
    skills: string[] | null,
    mywork: string | null,
    achievements: { title: string }[] | null,
    askAbout: { title: string }[] | null,
    visitedPlaces: { name: string, image: string, date: string }[] | null,
    born: string | null,
    location: string | null,
    languages: string[] | null,
    institution: string | null,

    role: 'user' | 'host',
    profile_picture: string | null,
    profile_banner: string | null,
    bio: string | null,
    rating: number,
    reviews: number,
    verified: boolean,
    created_at: string, // can be used as joined time       
}

// export function addUser(user: {name: string, email: string, password_hash: string, profile_picture: string | undefined }) {
        
// }