import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { COMPARE_LIST, EMPTY_FUNCTION } from '../../Constants/PropTypes';
import LanguageList from '../LanguageList/LanguageList';
import * as SystemMessages from '../../Constants/SystemMessages';

class CompareList extends Component {

  onChildToggle() {
    this.forceUpdate();
    this.props.onToggle();
  }

  render() {
    const { compare } = this.props;
    return (
      <div>
        { compare.map(result => (
          <div key={result.id} id={result.id} className="usa-width-one-half compare-card">
            <div className="usa-grid-full">
              <Link to={`/details/${result.position_number}`}>
                <h3> Position Number: {result.position_number} </h3>
              </Link>
              <p>
                  Grade: {result.grade}
                <br />
                  Skill Code: {result.skill}
                <br />
                  Post: {result.post ? <Link to={`/post/${result.post.id}`}>{result.post.location}</Link> : SystemMessages.NO_POST }
                <br />
                  Bureau: {result.bureau}
                <br />
                  Tour of Duty: {result.post ?
                    result.post.tour_of_duty : SystemMessages.NO_TOUR_OF_DUTY}
                <br />
                  Language: <LanguageList languages={result.languages} />
                <br />
                  Post Differential: {result.post ?
                    result.post.differential_rate : SystemMessages.NO_POST_DIFFERENTIAL}
                <br />
                  Danger Pay: {result.post ? result.post.danger_pay : SystemMessages.NO_DANGER_PAY}
                <br />
                  COLA: {result.post ?
                    result.post.cost_of_living_adjustment : SystemMessages.NO_COLA}
              </p>
            </div>
          </div>
          ))}
      </div>
    );
  }
}

CompareList.propTypes = {
  compare: COMPARE_LIST,
  onToggle: PropTypes.func,
};

CompareList.defaultProps = {
  compare: [],
  onToggle: EMPTY_FUNCTION,
};

export default CompareList;
