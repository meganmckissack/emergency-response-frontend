import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getFmaThunk, getFmaData, getFmaPanelData } from '../../state';

class MapPanel extends Component {
  render() {
    console.log('rendered map panel');
    const stats = this.props.fmaPanelData.stats;
    return (
      <div>
        <h1>Fire Management Area {stats.fma}</h1>
        <div className="panel-column-1">
          <h3>Area Demographics</h3>
          <ul style={{ listStyleType: 'none' }}>
            <li><span>{stats.fma_population_total}</span> population</li>
            <li><span>{stats.median_hh_income}</span> median income</li>
            <li><span>{stats.percent_non_white}</span> non-white</li>
            <li><span>{stats.percent_total_lesh}</span> limited english proficiency</li>
            <li><span>{stats.percent_below_pov}</span> households below poverty line</li>
            <li><span>{stats.percent_member_65plus}</span> households with someone over 65</li>
          </ul>
        </div>
        <div className="panel-column-2">
          <h3>Incidents</h3>
          <ul style={{ listStyleType: 'none' }}>
            <li><span>{stats.total_incidents_2016}</span> emergencies</li>
            <li><span> fire emergencies </span></li>
          </ul>
        </div>
        <div className="panel-column-3">
          <h3>Median Response Time</h3>
          <ul style={{ listStyleType: 'none' }}>
            <li><span>{stats.median_response_time} min</span> total</li>
            <li><span>{stats.median_resp_time_med} min</span> medical</li>
            <li><span>{stats.median_resp_time_fire} min</span> fire</li>
          </ul>
        </div>
      </div>
    );
  }
}


export default connect(
  state => ({
    fmaData: getFmaData(state),
    fmaPanelData: getFmaPanelData(state),
  }),
  dispatch => ({
    getFmaData: inputs => dispatch(getFmaThunk(inputs)),
  }),
)(MapPanel);
