const search = (state = [], action: {type: string, payload: any}) => {
  switch (action.type) {
    case 'SET':
      return [
        ...action.payload
      ]
    default:
      return state
  }
}

export default search