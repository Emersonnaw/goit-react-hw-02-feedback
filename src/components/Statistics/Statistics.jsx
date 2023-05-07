import PropTypes from 'prop-types'
import css from './Statistics.module.css';
export const Statistics =({good, neutral, bad, total, positivePercentage}) =>  {

    return (
      <>
        <ul className={css.statisticList}>
          <li>
            <p className ={css.statisticItem}>Good:  {good}</p>
          </li>
          <li>
            <p className ={css.statisticItem}>Neutral: {neutral}</p>
          </li>
          <li>
            <p className ={css.statisticItem}>Bad: {bad}</p>
          </li>
          <li>
            <p className={css.statisticItem}>Total: {total}</p>
          </li>
          <li>
            <p className ={css.statisticItem}>Positive feedback:  {positivePercentage} %</p>
          </li>  
        </ul>  
      </>
    );
  }

export default Statistics;


Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired
}