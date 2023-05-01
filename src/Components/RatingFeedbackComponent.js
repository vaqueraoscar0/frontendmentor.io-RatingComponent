import '../App.css';
import iphoneImg from '../images/illustration-thank-you.svg'

function RatingFeedbackComponent({ratingValue}) {
    return (
        <div className="Rating">
            <div className={'imgBlock'}>
                <img className={'iphoneImg'} src={iphoneImg} alt={'transaction-result'}/>
            </div>
            <div className={'ratingResult'}>
                <h2>
                    You Selected {ratingValue} out of 5
                </h2>
            </div>
            <h3 className={'rSubmitTitle'}>Thank You!</h3>
            <p style={{textAlign: "center"}}>We appreciate you taking the time to give a rating.
                If you ever need more support, don't hesitate to
                get in touch!</p>
        </div>
    );
}

export default RatingFeedbackComponent;
