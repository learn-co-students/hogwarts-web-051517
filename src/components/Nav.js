import tony from '../porco.png';
import React from 'react';

const clickedTony = () => {
  fetch('http://api.icndb.com/jokes/random')
  .then(res => res.json())
  .then(results => alert(results.value.joke))
}

const Nav = () => {
  return (
    <div className="navWrapper">
      <span className="headerText">Hogs, Hogs, Mo' Hogs</span>
      <div className="TwirlyPig">
        <img src={tony} className="App-logo" alt="tony" onClick={clickedTony} />
      </div>

      <span className="normalText">Yep...</span>
    </div>
  )
}

export default Nav
