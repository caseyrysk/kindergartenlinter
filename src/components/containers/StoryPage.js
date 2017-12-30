import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/storyPageActions';

export class StoryPage extends React.Component {
  saveStoryText = (text) => {
    this.props.actions.saveStoryText(text);
  }

  textEntryOnChange = e => {
    console.log(e.target.value); // eslint-disable-line
    const storyText = e.target.value;
    
    if (storyText !== null){
      this.saveStoryText(storyText);
    }
  }

  render() {
    return (
    <div>
      <h1>Write a kid safe story!</h1>
      <h2>Get Started</h2>
      <div className="story-entry">
        <h3>Enter your story below:</h3>
        <textarea className="text-entry" onChange={this.textEntryOnChange} />
      </div>
      <div className="story-clean">
        <span />
      </div>
    </div>
    );
  }
}

StoryPage.propTypes = {
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    storyRawText: state.storyRawText
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StoryPage);

