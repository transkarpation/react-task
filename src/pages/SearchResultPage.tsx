import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {rootState} from '../redux/reducers'

function SearchResult () {
  const dispatch = useDispatch()

  useEffect(() => {
    return () => {
      console.log('component did unmount')
      dispatch({type: 'CLEAR_SEARCH_TEXT'})
    }
  })

  const state = useSelector((state: rootState) => state)

  return (
    <div>
      <h2>SearchResult</h2>
      <ul>
        { state.search.searchResults.map((el, index) => {
          return (
            <li key={index}>{el.volumeInfo.title}</li>
          )
        })}
      </ul>
    </div>
  )
}

export default SearchResult