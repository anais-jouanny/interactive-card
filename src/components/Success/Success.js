import PropTypes from 'prop-types';
import { useState } from 'react';
import './Success.scss';

function Success({ final, setFinal }) {
  const cssClass = final ? 'success success-final' : 'success';

  return (
    <div className={cssClass}>
      <div className="check">&#10004;</div>
      <h1>thank you!</h1>
      <p>We've added your card details</p>
      <button
        type="button"
        onClick={() => {
          setFinal(!final);
        }}
      >Continue
      </button>
    </div>
  );
}

Success.propTypes = {
  final: PropTypes.bool.isRequired,
  setFinal: PropTypes.func.isRequired,
};

export default Success;
