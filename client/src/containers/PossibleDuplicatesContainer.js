import PossibleDuplicates from '../components/PossibleDuplicates'
import { connect } from 'react-redux'
import { getPossibleDuplicates } from '../utils'

const mapStateToProps = state => ({
  data: getPossibleDuplicates(state.people),
  columns: [
    {
      Header: 'Person A',
      accessor: 'person_a'
    },
    {
      Header: 'Person B',
      accessor: 'person_b',
    },
    {
      Header: 'Match Score',
      accessor: 'score'
    }
  ]
});

export const PossibleDuplicatesContainer = connect(
  mapStateToProps
)(PossibleDuplicates);

export default PossibleDuplicatesContainer
