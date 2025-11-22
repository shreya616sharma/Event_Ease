import '../css/Favourites.css'
import { useClubContext } from '../contexts/ClubContext';
import ClubsCard from '../components/clubsCard';

function Favourite(){
    const {favourites} = useClubContext();

    if (favourites && favourites.length > 0){
        return (
        <div className ="favorites">
                <h2> Your Favourites </h2>
           <div className = "clubs-grid">
            {favourites.map(club => (
                <ClubsCard club={club} key={club.id} />
            ))}
            </div>
        </div>
        )
    }
    return (<div className = "favorites-empty">
        <h1>No favourite Clubs Yet! </h1>
        <p>Start adding clubs to favourite here and they will appear here.</p>
    </div>)

}
export default Favourite;