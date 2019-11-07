import React from 'react';
import { connect } from 'react-redux';
import { getAnimals, isLoading, hasErrored} from '../../actions';
import './App.scss';
import CardContainer from '../CardContainer/CardContainer';
import DonationContainer from '../DonationsContainer/DonationsContainer';
import { bindActionCreators } from 'redux';

class App extends React.Component {
    componentDidMount = async () => {
    this.props.getAnimals(await this.fetchAnimals("rescue-animals"));
  }

  fetchAnimals = async data => {
    this.props.isLoading(true);
    try {
      const response = await fetch(`http://localhost:3001/api/v1/${data}`);
      this.props.isLoading(false);
      return await response.json();
    } catch ({ message }) {
      this.props.isLoading(false);
      this.props.hasErrored(message);
  };
}

  render() {
    return (
      <section className="App">
        <header>
          <div>
            <DonationContainer />
          </div>
          <h2>Animal Rescue</h2>
        </header>
        <CardContainer />
      </section>
    );
  }
}

export const mapDispatchToProps = dispatch => (
  bindActionCreators({
    getAnimals,
    isLoading,
    hasErrored
  }, dispatch)
);

export default connect(null, mapDispatchToProps)(App);
