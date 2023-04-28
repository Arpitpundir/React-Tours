import Tour from "./Tour";
function Tours({tours, removeTour}){
  const tourCards = tours.map((curr, index) => {
    return <Tour key = {index}{...curr} removeTour = {removeTour}/>
  })
  return (
    <section>
      <div className="title">
        <h2>Our tours</h2>
        <div className="title-underline"></div>
      </div>
      <div className="tours">
        {tourCards}
      </div>
    </section>
  )
}

export default Tours;