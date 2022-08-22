// == Import
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Form } from 'semantic-ui-react';
import './styles.scss';

// == Component
function FormCountdown({
  countdownInputNumber,
  onInputCountdownChange,
  onFormCountdownSubmit,
  className,
  ...rest
}) {
  return (
    <div
      className={classNames(className)}
      {...rest}
    >
      <Form
        onSubmit={onFormCountdownSubmit}
      >
        <Form.Input
          fluid
          focus
          icon="calendar"
          type="number"
          value={countdownInputNumber}
          onChange={onInputCountdownChange}
        />
      </Form>
    </div>
  );
}

FormCountdown.propTypes = {
  countdownInputNumber: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  onInputCountdownChange: PropTypes.func.isRequired,
  onFormCountdownSubmit: PropTypes.func.isRequired,
  className: PropTypes.string,
};
FormCountdown.defaultProps = {
  className: 'formcountdown',
};
export default React.memo(FormCountdown);
