import '../css/clubsCard.css'
import { useClubContext } from '../contexts/ClubContext.jsx'

// this is where we will write code specifically for displaying clubs 
function ClubsCard({club}) { // club is an object that will contain club name etc 
    const {addToFavourites, removeFromFavourites, isFavourite} = useClubContext();
    // here we are using this useClubContext to get access to the functions defined in ClubContext.jsx 
    // this useClubContext is a hook here.

    const favourite = isFavourite(club.id);

    function onFavoriteClick(e){
        e.preventDefault();
        if (favourite) removeFromFavourites(club.id)
        else addToFavourites(club);
    }
    return (
        <div className = "club-card">
            <div className= "club-poster">
                <img src= {club.url} alt = {club.title}/>
                <div className ="club-overlay">
                    <button className= {`favorite-btn ${favourite ? "active": ""}`} onClick= {onFavoriteClick}>
                        {favourite ? "❤️" : "🤍"}
                    </button>
                </div>
            </div>
            <div className = "club-info">
                <h3>{club.title}</h3>
                <p className = "club-description">{club.description}</p>
                <p className="club-members">{club.members}</p>
            </div>
        </div>
    )
}

export default ClubsCard;