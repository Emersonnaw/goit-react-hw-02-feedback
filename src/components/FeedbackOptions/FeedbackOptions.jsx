import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css'
export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
   
    return (
        <>
            <ul className={css.btnContainer}>
                {options.map(option => (
                    <li key={option} >
                        <button className={css.btn} type="button" onClick={onLeaveFeedback}>{option}</button>
                    </li>

                ))}
            </ul>   
        </>
    );
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback:PropTypes.func.isRequired
}


