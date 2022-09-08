import { connect } from 'react-redux'
import RegimenIndexItem from './regimen_index_item'

const mSTP = (state) => ({
 state: state
})


export default connect(mSTP)(RegimenIndexItem)