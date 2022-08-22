// == Import
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './styles.scss';

// == Component
function Countdown({
  days,
  hours,
  minutes,
  seconds,
  className,
  ...rest
}) {
  return (
    <div
      className={classNames(className)}
      {...rest}
    >
      <ul className="countdown__list">
        <li className="countdown__list__item--days">
          {days} day{days > 1 ? 's' : ''}
        </li>
        <li className="countdown__list__item--hours">
          {hours} hour{hours > 1 ? 's' : ''}
        </li>
        <li className="countdown__list__item--minutes">
          {minutes} minute{minutes > 1 ? 's' : ''}
        </li>
        <li className="countdown__list__item--secondes">
          {seconds} second{seconds > 1 ? 's' : ''}
        </li>
      </ul>
    </div>
  );
}

Countdown.propTypes = {
  days: PropTypes.number.isRequired,
  hours: PropTypes.number.isRequired,
  minutes: PropTypes.number.isRequired,
  seconds: PropTypes.number.isRequired,
  className: PropTypes.string,
};
Countdown.defaultProps = {
  className: 'countdown',
};
export default React.memo(Countdown);
