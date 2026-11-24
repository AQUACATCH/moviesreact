import axios from "axios"

export const img_300 = 'https://image.tmdb.org/t/p/w300'
export const img_500 = 'https://image.tmdb.org/t/p/w500'

const api =axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params:{
        api_key: import.meta.env.VITE_TMDB_API_KEY,
        language: "hu-HU",
        include_adult:false,
        sort_by:"popularity.desc",
    }
})

export const getTrendings = async(page=1) => {
    const response = await api.get("/trending/all/week",{params:{page}})
    return response.data.results
}

export const getGenres = async()=> {
    const [moviegenre, tvgenre] = await Promise.all([
        api.get("/genre/movie/list"),
        api.get("/genre/tv/list"),
    ])
    // A genre végpontok { genres: [...] } formában adják vissza az adatot, nem results-ként
    const all = [...moviegenre.data.genres, ...tvgenre.data.genres]
    // Duplikátumok kiszűrése id alapján (pl. Animáció, Vígjáték mindkét listában benne van)
    return [...new Map(all.map((g) => [g.id, g])).values()]
}

export const getCategories = async(type) => {
    const response = await api.get(`/genre/${type}/list`)
    return response.data.genres
}

export const getMovies=async ()=> {
    const response = await api.get("discover/movie")
    return response.data.results
}

export const getTV= async ()=> {
    const response = await api.get("discover/tv")
    return response.data.results
}

export const getVote=(nr) => {
    const nrInt = Math.round(nr)
    return '⭐'.repeat(nrInt)
}

const pageTitle = [
    {type: "trending", title: "Popular This Week"},
    {type: "movie", title: "Movies"},
    {type: "tv", title: "TV Series"},
    {type: "search", title: "Search Media"},
]

export const getTitle = (type) => {
    const selected = pageTitle.find(obj => obj.type == type)
    return selected.title
}

export const getMedia = async (type, searchText, page) => {
    const response = await api.get(`/search/${type}`,{params:{query: searchText, page}})
    return response.data
}

export const getSelectedMediaCateg = async (type, selectedctgs, page=1) => {
    const response = await api.get(`/discover/${type}?with_genres=${selectedctgs}`,{params:{page}})
    return response.data.results
}

export const getTrailer= async (type, id) => {
    const response = await api.get(`/${type}/${id}/videos`)
    return response.data.results
}

export const getCredits= async (type, id) => {
    const response = await api.get(`/${type}/${id}/credits`)
    return response.data.cast
}