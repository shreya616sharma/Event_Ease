import ClubsCard from "../components/clubsCard"
import {useState} from "react"
import '../css/Home.css'
function Home() {

    const [searchQuery, setSearchQuery] = useState("");
    const [filteredClubs, setFilteredClubs] = useState([]);

    const clubs = [
        {id:1, title: "Tech Club", description: "Tech Club Technology and innovation club", members: "Members: 120", url: "src/clubs/images/tech.jpg"},
        {id:2, title: "Dance Club", description: "Dance and performance arts.", members: "Members: 85", url: "https://example.com/photo-club.jpg"},
        {id:3, title: "Art Club", description: "Exploring creativity through various art forms.", members: "Members: 60", url: "https://example.com/art-club.jpg"},
        {id:4, title: "Music Club", description: "For music enthusiasts and performers.", members: "Members: 90", url: "https://example.com/music-club.jpg"},
        {id:5, title: "Drama Club", description: "Theater and drama activities.", members: "Members: 70", url: "https://example.com/drama-club.jpg"},
        {id:6, title: "Science Club", description: "Exploring scientific concepts and experiments.", members: "Members: 110", url: "https://example.com/science-club.jpg"},
        {id:7, title: "Literature Club", description: "For book lovers and writers.", members: "Members: 50", url: "https://example.com/literature-club.jpg"},
        {id:8, title: "Photography Club", description: "Capturing moments through the lens.", members: "Members: 80", url: "https://example.com/photography-club.jpg"},
        {id:9, title: "Environmental Club", description: "Promoting environmental awareness and activities.", members: "Members: 95", url: "https://example.com/environmental-club.jpg"},
        {id:10, title: "Culinary Club", description: "For those passionate about cooking and food.", members: "Members: 40", url: "https://example.com/culinary-club.jpg"},
    ];

    const handleSearch = (e) => {
        e.preventDefault()
        if (!searchQuery.trim()){
            setFilteredClubs(clubs); // this shows all the cards if empty search bar 
            return;
        }  
        const query = searchQuery.toLowerCase();
        const results = clubs.filter(club => club.title.toLowerCase().includes(query));
        if (results.length === 0){
            alert("No clubs found matching your search.");
        }
        setFilteredClubs(results);
 
    };

    return (
    <div className="home">

        <form onSubmit ={handleSearch} className = "search-form">
        <input 
        type = "text" 
        placeholder="Search clubs..." 
        className="search-input"
        value = {searchQuery}
        onChange = {(e) => setSearchQuery(e.target.value)}/>
        <button type = "submit" className = "search-button">Search</button>
        </form>

        <div className = "clubs-grid">
        {/* // searching for the club can also use API */}
        {(filteredClubs.length > 0 ? filteredClubs : clubs).map(club => ( <ClubsCard club = {club} key = {club.id} />))}
        {/*{clubs.map(club => club.title.toLocaleLowerCase().startsWith(searchQuery) && <ClubsCard club={club} key={club.id}  />)}*/}
        </div>
    </div>
    )
}

export default Home;