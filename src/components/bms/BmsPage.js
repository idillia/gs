import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import _ from 'underscore';


const BmsPage = (bms_data) => {
  for (var prop in bms_data) {
    var infolist = _.map(bms_data[prop], function(info, i) {
      return <tr key={i}><td>{i}</td><td>{info.temperatureA}</td><td>{info.temperatureB}</td><td>{info.voltage}</td></tr>
    });
  }
    return (
      <div>
        <table className="battery-management-system table table-striped">
          <thead>
            <tr><th></th><th>Temperature A</th><th>Temperature B</th><th>Voltage</th></tr>
          </thead>
          <tbody>
          {infolist}
          </tbody>
        </table>
      </div>

    );
}

export default BmsPage;


