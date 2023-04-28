const url = 'https://course-api.com/react-tours-project';
import { useEffect, useState } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
const App = () => {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const fetchTours = async () => {
    try{
      setLoading(true);
      const response = await fetch(url);
      const data = await response.json();
      setTours(data);
      console.log(data);
      setLoading(false);
    }catch(error){
      console.log(error);
      setLoading(false);
    }
  }

  const removeTour = (tourId) => {
    const newTours = tours.filter(currTour => currTour.id !== tourId)
    setTours(newTours);
  }

  useEffect(() => {
    fetchTours();
  }, []);

  if(loading){
    return <Loading/>
  }
  return (
    <main>
          <Tours tours = {tours} removeTour = {removeTour}/>

    </main>
  )
};
export default App;
