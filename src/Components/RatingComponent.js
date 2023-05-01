import '../App.css';
import starImg from '../images/icon-star.svg'
import {useState} from "react";

function RatingComponent({handleSubmit}) {
    const [rating, setRating] = useState()

    const handleChange = (e) =>{
        e.preventDefault()
        handleSubmit(rating)
    }

    return (
        <div className="Rating">
            <img className={'starImage'} src={starImg} alt={'submit-survey'}/>
            <h1>How Did We Do?</h1>
            <p>Please let us know how we did with your support
                request. All feedback is appreciated to help us
                improve our offering!</p>

            <div className={'buttonLine'}>
                {[1,2,3,4,5].map((value, idx) =>(
                    <button onClick={e => setRating(value)} className={'roundButton'} key={idx}>{value}</button>
                ))}
            </div>

            <button onClick={handleChange} className={'submitButton'}>SUBMIT</button>
        </div>
    );
}

export default RatingComponent;
