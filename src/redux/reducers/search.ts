const initState = {
  searchText: '',
  searchResults: []
}

const search = (state = initState, action: {type: string, payload: any}) => {
  switch (action.type) {
    case 'SET_SEARCH_RESULTS':
      return {
        ...state,
        searchResults: action.payload
      }
    case 'SET_SEARCH_TEXT':
      return {
        ...state,
        searchText: action.payload
      }
    case 'CLEAR_SEARCH_TEXT':
      return {
        ...state,
        searchText: ''
      }
    default:
      return state
  }
}

export default search