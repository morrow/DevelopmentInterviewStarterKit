import { connect } from 'react-redux'
import ActionButton from '../components/ActionButton'

const mapStateToProps = state => ({  });

const mapDispatchToProps = (dispatch, ownProps)=> ({
  onClick: (e)=> dispatch(ownProps.action())
})

export const ActionButtonContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ActionButton);

export default ActionButtonContainer
