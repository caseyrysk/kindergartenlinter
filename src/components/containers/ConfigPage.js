import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/storyPageActions';

// const HomePage = () => {
export class ConfigPage extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {badTokens: props.badTokens.join(', ')};

    this.saveChanges = this.saveChanges.bind(this);
    this.onBadTokensChange = this.onBadTokensChange.bind(this);
  }

  onBadTokensChange = e => {
    const badTokens = e.target.value;

    if (badTokens !== null) {
      this.setState({ badTokens: badTokens });
    }
  }

  saveChanges () {
    this.props.actions.saveBadTokens(this.state.badTokens);
  }

  render() {
    return (
      <div>
        <h1>Configuration Options</h1>
        <div className="story-entry">
          <h3>Kindergarten swear words</h3>
          <textarea id="badTokens" className="text-entry" onChange={this.onBadTokensChange} defaultValue={this.state.badTokens} />
        </div>       
        <button title="save" onClick={this.saveChanges} value="save">save</button>
      </div>
    );
  }
}

ConfigPage.propTypes = {
  actions: PropTypes.object.isRequired,
  badTokens: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    badTokens: state.storySaving.badTokens
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
)(ConfigPage);

