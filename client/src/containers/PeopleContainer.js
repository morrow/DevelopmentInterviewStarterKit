import { People } from '../components/People'
import { connect } from 'react-redux'

const mapStateToProps = state => ({ people: state.people });

export const PeopleContainer = connect(
  mapStateToProps
)(People);

export default PeopleContainer
