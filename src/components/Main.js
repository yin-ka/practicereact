import React from 'react'

function Main(props) {

  return (
    <div>
        <section>
            <div>
            <img src={`../images/${props.img}`} alt="img"></img>
            </div>
            <div>
                <img src="../images/Star 1.png" alt="tag"></img>
                <span>{props.country}</span>
                <span>{props.location}</span>
                <span><i href="">View on Google Maps</i></span>
                <span>{props.date}</span>
                <span>{props.text}</span>
            </div>
        </section>
    </div>
  )
}

export default Main;