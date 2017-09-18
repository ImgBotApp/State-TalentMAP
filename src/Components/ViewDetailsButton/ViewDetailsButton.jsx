import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import LinkButton from '../LinkButton';

const ViewDetailsButton = ({ id }) => (
  <LinkButton toLink={`/details/${id}`} className="white-button">
    <span className="white-button-icon">
      <FontAwesome name="plus-circle" />
    </span>
    View details
  </LinkButton>
);

ViewDetailsButton.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default ViewDetailsButton;
