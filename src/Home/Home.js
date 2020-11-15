import React from 'react'
import './Home.css'
import Card from "../Card/Card"
import Banner from '../Banner/Banner'
function Home() {
    return (
        <div className="home">
           <Banner/>
          
          <div className="home__section">
          <Card 
             src="https://media.nomadicmatt.com/2018/apartment.jpg"
              title="Entire homes"
              description="Comfortable private places,with room for friends or family"
             price="KSH.350/night"
             />
          <Card 
             src="https://media.nomadicmatt.com/2018/apartment.jpg"
              title="Entire homes"
              description="Comfortable private places,with room for friends or family"
              price="KSH.350/night"
            />
          <Card 
             src="https://media.nomadicmatt.com/2018/apartment.jpg"
              title="Entire homes"
              description="Comfortable private places,with room for friends or family"
              price="KSH.350/night"
            />
            
  
          </div>
          <div className="home__section">
          <Card 
             src="https://media.nomadicmatt.com/2018/apartment.jpg"
              title="Entire homes"
              description="Comfortable private places,with room for friends or family"
              price="KSH.350/night"
            />
                  <Card 
             src="https://media.nomadicmatt.com/2018/apartment.jpg"
              title="Entire homes"
              description="Comfortable private places,with room for friends or family"
              price="KSH.350/night"
            />
                   <Card 
             src="https://media.nomadicmatt.com/2018/apartment.jpg"
              title="Entire homes"
              description="Comfortable private places,with room for friends or family"
              price="KSH.350/night"
             />
              
          </div>
        </div>
    )
}

export default Home
