import React from 'react';
import { connect } from 'react-redux';
import './DonationContainer.scss';
import { bindActionCreators } from 'redux';

export class DonationsContainer extends React.Component {
  state = {
    name: "",
    donation: ""
  };

  
  fetchDonations = async () => {
    const donationData = {
      id: Date.now(),
      name: this.state.name,
      donation: this.state.donation
    };
    
    handleSubmit = e => {
      e.preventDefault();
      this.postDonor();
    };


  };

  render() {
    return (
      <section className="donations">
        <form>
          <input
            type="text"
            name="Name"
            value={this.state.name}
            onChange={this.collectInputs}
            autoComplete="off"
          />
          <input
            type="text"
            name="donation"
            value={this.state.donation}
            onChange={this.collectDonations}
          />
          <button className="button" onClick={this.handleSubmit}>
            Donate!
          </button>
        </form>
      </section>
    );
  }
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