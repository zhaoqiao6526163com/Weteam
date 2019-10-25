import {createStore} from 'redux'
import reducer from './reducer'
// import createStore from 'antd/lib/table/createStore'
export default createStore(reducer)