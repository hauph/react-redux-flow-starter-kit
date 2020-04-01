// @flow
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Actions from '../redux/actions'
import MainContainer from '../components/MainContainer' 

const mapStateToProps = (state) => {
	return { 
		app_data: state.app_data,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		actions: bindActionCreators(Actions, dispatch)
	}
} 

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(MainContainer)