import RatingFeedbackComponent from "./Components/RatingFeedbackComponent";
import RatingComponent from "./Components/RatingComponent";
import {useState} from 'react'
import './App.css';

function App() {
  const [isSubmit, setIsSubmit] = useState(true)
  const [rating, setRating] = useState()

  const handleSubmit = (value) =>{
    setRating(value)
    setIsSubmit(!isSubmit)
  }

  return (
      <div className="App">
        <div className={'ratingBox'}>
          {
            isSubmit? ( <RatingComponent handleSubmit={handleSubmit} /> ): (<RatingFeedbackComponent ratingValue={rating}/>)
          }
        </div>
      </div>
  );
}

export default App;
