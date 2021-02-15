import React from 'react';
import { connect } from 'react-redux';
import { removeFeature } from '../actions/actions.js';

const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={() => props.removeFeature(props)}>X</button>
      {props.feature.name}
    </li>
  );
};

const mapStateToProps = state => {
  console.log(state);
  return {
    additionalFeatures: state.additionalFeatures,
  };
}

export default connect(mapStateToProps, {removeFeature})(AddedFeature);
