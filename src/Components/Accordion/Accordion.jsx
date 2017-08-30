import React from 'react';
import PropTypes from 'prop-types';

const shortid = require('shortid');

const Accordion = ({ items }) => (
  <ul className="usa-accordion">
    {
      items.map(item =>
        (
          <li key={shortid.generate()}>
            <button
              className="usa-accordion-button"
              aria-expanded={item.expanded}
              aria-controls={item.id}
            >
              {item.title}
            </button>
            <div id={item.id} className="usa-accordion-content" aria-hidden={!item.expanded}>
              {item.content}
            </div>
          </li>
        ),
      )
    }
  </ul>
);

Accordion.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      content: PropTypes.node,
      expanded: PropTypes.bool,
    }),
  ).isRequired,
};

export default Accordion;