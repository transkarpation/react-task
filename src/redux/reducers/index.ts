import { combineReducers } from 'redux'
import search from './search'

export type rootState = {
  search: {
    searchText: '',
    searchResults: Array<any>
  }
}

export default combineReducers({
  search
})