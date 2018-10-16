import { PeoplePage } from '../components/PeoplePage'
import { connect } from 'react-redux'

const mapStateToProps = state => ({ app: state.app });

export const PeoplePageContainer = connect(
  mapStateToProps
)(PeoplePage);

export default PeoplePageContainer
