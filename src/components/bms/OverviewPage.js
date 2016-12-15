import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as bmsActions from '../../actions/bmsActions';
import Bms from './BmsPage';

export class OverviewPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const bms_data = this.props.bms_data;
    return (
      <div>
        <Bms bms_data = {bms_data}/>
      </div>
    );
  }
}

OverviewPage.propTypes = {
  // bms_data: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};


function mapStateToProps(state, ownProps) {
  let bms_data = {
    temperatureA: '',
    temperatureB: '',
    voltage: ''
  };

  if(state.bms.length > 0){
    bms_data = state.bms;
  }
  return {
    bms_data: bms_data
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(bmsActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(OverviewPage);