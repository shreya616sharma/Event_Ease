import {createContext,useState, useContext, useEffect} from "react";

const ClubContext = createContext();

export const useClubContext = () => useContext(ClubContext);

export const ClubProvider = ({children}) => {
    const [favourites,setFavourites] = useState([])

    useEffect(() => {
        const storedFavs =localStorage.getItem("favourites")

        if (storedFavs) setFavourites(JSON.parse(storedFavs))
        },[])
        
    useEffect(()=> {
        localStorage.setItem('favourites',JSON.stringify(favourites))
    },[favourites])

    const addToFavourites = (club) => {
       setFavourites(prev => [...prev, club])
    }

    const removeFromFavourites = (clubId) => {
        setFavourites(prev => prev.filter(club => club.id !== clubId))
    }

    const isFavourite = (clubId) => {
        return favourites.some(club => club.id === clubId)
    }

    const value = {
        favourites,
        addToFavourites,
        removeFromFavourites,
        isFavourite
    }
    return <ClubContext.Provider value = {value}>
            {children}
            </ClubContext.Provider>
}