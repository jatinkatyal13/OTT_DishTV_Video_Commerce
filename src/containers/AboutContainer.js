import { connect } from 'react-redux';
import {
  fetchContributors,
  getContributors,
  contributorsLoaded
} from '../modules/about';

import About from '../components/About';


const mapDispatchToProps = {
  fetchContributors: () => fetchContributors()
};

const mapStateToProps = (state) => {
  return {
    contributors: getContributors(state),
    loaded: contributorsLoaded(state),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(About);