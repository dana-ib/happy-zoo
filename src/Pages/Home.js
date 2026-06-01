import '../Styles/Home.css';
import { Link } from 'react-router-dom';
import zoo from '../Pictures/zoo.jpg';
const Home = () => {
    const showInfo =() =>
    {
       
  alert("Name: Dana Khoder Ibrahim - ID: 92330151");
};

    
    return(
        <div className="container">
          <h1>Welcome to Happy Zoo 🐾</h1>
          <img class="main-img" src={zoo} alt="Happy Zoo"/>



  <div class="homeBtns">
    <Link to="/anm"><button>View Animals</button></Link>
	<button class="infoBtn" onClick={showInfo}>Display Your Name and ID</button>
   <Link to="/emp"><button>View Employees</button></Link>
  </div>
</div>



      
    );

}
export default Home;