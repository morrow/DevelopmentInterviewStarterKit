import EmailCharacterFrequency from '../components/EmailCharacterFrequency'
import { connect } from 'react-redux'
import { getEmailCharacterFrequency } from '../utils'

const mapStateToProps = state => ({
  data: getEmailCharacterFrequency(state.people),
  columns: [
    {
      Header: 'Character',
      accessor: 'character'
    },
    {
      Header: 'Count',
      accessor: 'frequency'
    }
  ]
});

export const EmailCharacterFrequencyContainer = connect(
  mapStateToProps
)(EmailCharacterFrequency);

export default EmailCharacterFrequencyContainer

