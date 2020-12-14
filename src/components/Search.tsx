import React, {useState} from 'react'
import cx from 'classnames'
import googlapi from '../http/googleapi'

function Search() {
  const [searchError, setSearchError] = useState(false)
  const [searchInput, setSearchInput] = useState('')
  const onSearch = async (e: any) => {
    e.preventDefault();
    if (!searchInput.length) {
      return setSearchError(true)
    }
    const result = await googlapi.searchByTitle(searchInput)
    console.log(result)
  }
  return (
    <form className="form-inline my-2 my-lg-0">
      <input onChange={(e) => {setSearchInput(e.target.value)}} className={cx("form-control mr-sm-2 ", {"is-invalid": searchError})} type="search" placeholder="Search" aria-label="Search" />
      <button onBlur={() => {setSearchError(false)}} onClick={onSearch} className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  )
}

export default Search