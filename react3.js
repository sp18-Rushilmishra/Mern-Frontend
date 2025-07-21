import React from "react";
import ReactDOM from "react-dom/client";
import style from './index.css';

const Header = () => {
    return(
        <div className = "header">
        <div className = "img-container">
        <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS89BwTGXAHcN0imO2JzlgxhAkzHdfKaOhW7g&s"></img>
        </div>
        <div className = "nav-items">
        <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
            </ul>
            </div>
        </div>
    )
}

const RestaurantCard = (props) => {
    const {resName , cuisine} = props;
return(
    <div className = "res-card">
        <img
        className="res-logo"
        alt = "res-logo"
        src = "https://content.jdmagicbox.com/v2/comp/delhi/e6/011pxx11.xx11.230606183538.b6e6/catalogue/thalairaj-biryani-kapashera-delhi-restaurants-1ip5fkesx8.jpg"></img>
        <h3>{props.resName}</h3>
        <h4>{props.cuisine}</h4>
        <h4>4.3 Stars</h4>npm 
        <h4>38 Minutes</h4>
    </div>
)
}

const body = () => {
    return(
        <div className = "body">
        <div className = "search">Search</div>
        <div className = "res-container">
            <RestaurantCard resName = "Thalairaja Biryani" cuisine = "biryani , North indian"/>
            <RestaurantCard resName = "kfc"  cuisine = "Burger,fast-food" />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
        </div>
        </div>
    )
}


const Applayout = () => {
    return <div className = "app">
         {Header()}
         {body()}
         {RestaurantCard()}
        </div>
     
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Applayout />)