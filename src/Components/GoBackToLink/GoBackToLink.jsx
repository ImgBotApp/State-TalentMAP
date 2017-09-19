import React from 'react';
import FontAwesome from 'react-fontawesome';
import { GO_BACK_TO_LINK } from '../../Constants/PropTypes';

const GoBackLink = ({ goBackLink }) => (
  <div className="position-details-header-back">
    {
      <div>
        <FontAwesome name="arrow-left" />
          &nbsp;
        <a
          className="back-link"
          tabIndex="0"
          role="link"
          onClick={() => window.history.back()}
        >
          {goBackLink.text}
        </a>
      </div>
          }
  </div>
);

GoBackLink.propTypes = {
  goBackLink: GO_BACK_TO_LINK.isRequired,
};

export default GoBackLink;
