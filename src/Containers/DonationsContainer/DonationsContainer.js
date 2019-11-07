import React from 'react';
import { connect } from 'react-redux';
import './DonationsContainer.scss';
import { bindActionCreators } from 'redux';
import { fetchDonations } from '../../util/apiCalls';
import { getDonations, isLoading, hasErrored } from '../../actions';


export class DonationsContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      donationValue: 0
    }
  };
  getDonations = async () => {
    const donationData = {
      id: Date.now(),
      name: this.state.name,
      donation: this.state.donation
    };
    fetchDonations(donationData)
  }
    handleSubmit = e => {
      e.preventDefault();
      this.getDonations();
    };

    getDonationData = (e) => {
      this.setState({ [e.target.name]: [e.target.donationValue] });
    }
    
    render() {
      return (
        <section className="donations">
        <form>
          <input
            type="text"
            name="Name"
            value={this.state.name}
            onChange={this.getDonationData}
            autoComplete="off"
            />
          <input
            type="text"
            name="donation"
            value={this.state.donationValue}
            onChange={this.getDonationData}
            />
          <button className="button" onClick={this.handleSubmit}>
            Submit Donation
          </button>
        </form>
      </section>
    );
  }
};
  
  
export const mapDispatchToProps = dispatch => (
  bindActionCreators({
    getDonations,
    isLoading,
    hasErrored
  }, dispatch)
);


export default connect(
  null,
  mapDispatchToProps
)(DonationsContainer);