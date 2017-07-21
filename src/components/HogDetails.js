import React from 'react'
import {Image, Reveal} from 'semantic-ui-react'

const pigifyImages = (hogName) => {
  return require(`../../public/hog-imgs/${hogName.replace(/\s/g, '_').toLowerCase()}.jpg`)
}

const HogTemplate = props => {
  return (
    <Reveal animated='small fade' className="cardContainer">
      <Reveal.Content visible>
        <Image shape='rounded' size='medium' src={pigifyImages(props.name)} className="piggyImage" alt="pig_picture" />
      </Reveal.Content>
      <Reveal.Content hidden>
        <div className="hogCard three wide column ui card">
          <div className="content">
            <h1 className="insideCard">{props.name}</h1><br />
            <div className="ui large left icon">
              <i className="heart outline icon"></i>
              {props.specialty}
            </div>
            <div className="ui large left icon">
              <i className="heart outline icon"></i>
              {props.greased ? "Greased" : "Ungreased"}
            </div>
            <div className="ui large left icon">
              <i className="heart outline icon"></i>
              {props['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}
            </div>
            <div className="ui large left icon">
              <i className="heart outline icon"></i>
              {props['highest medal achieved']}
            </div>
          </div>
        </div>
      </Reveal.Content>
    </Reveal>
  )
}

const HogDetails = props => {
  if (props.hogs.length > 0) {
    return (
      <div className="ui grid container">
        { props.hogs.map((hog, index)=> HogTemplate(hog)) }
      </div>
    )
  } else {
    return (
      <div className="ui container">
        <h1>No hogs!</h1>
      </div>
    )
  }

}

export default HogDetails
