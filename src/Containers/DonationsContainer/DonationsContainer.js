import React from 'react';
import { connect } from 'react-redux';
import './DonationContainer.scss';
import { bindActionCreators } from 'redux';

export class DonationsContainer extends React.Component {
 
}

export const mapDispatchToProps = dispatch => (
  bindActionCreators({
    updateDonations,
    isLoading,
    hasErrored
  }, dispatch)
);


export default connect(
  null,
  mapDispatchToProps
)(DonationsContainer);