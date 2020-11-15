import React, { useState } from "react";
import "./Banner.css";

import { Button } from "@material-ui/core";
import Search from "../Search/Search";
import { useHistory } from "react-router-dom";
function Banner() {
    const history =useHistory();
  const [showSearch, setShowSearch] = useState(false);

  return (
     
    <div className='banner'>
      <div className='banner__search'>
        {showSearch && <Search />}
        <Button
          variant='outlined'
          className='banner__searchButton'
          onClick={() => setShowSearch(!showSearch)}
        >
          {showSearch ? `Hide` : `Search Date`}
        </Button>
      </div>
      <div className='banner__info'>
        <h1>Get out and strech your imagiantion</h1>
        <h5>
          Plan a diffrent kind of a getaway to uncover the hidden gems near you
        </h5>
    
          <Button variant='outlined' onClick={()=>history.push('/search')}> Explore Nearby</Button>
      
      </div>
    </div>
  );
}

export default Banner;
