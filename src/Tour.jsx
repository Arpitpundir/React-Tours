import { useState } from "react";

function Tour({id, image, name, price, info, removeTour}){
  const [isExpanded, setIsExpanded] = useState(false);
  const handleRemoveTour = () => {
    removeTour(id)
  }
  const handleCardToogle = () => {
    const newToggleState = !isExpanded;
    setIsExpanded(newToggleState);
  }
  return (<article className="single-tour">
    <img src={image} alt={name} className="img" />
    <span className="tour-price">${price}</span>
    <div className="tour-info">
      <h5>{name}</h5>
      <p>{isExpanded?info:`${info.substring(0,100)}...`} 
      <button className="info-btn" onClick = {handleCardToogle}>{isExpanded?"Show less":"Read More"}</button>
      </p>
      <button className="btn btn-block delete-btn" onClick = {handleRemoveTour}>Remove Tour</button>

    </div>
  </article>);
};
export default Tour;