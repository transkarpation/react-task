import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import cx from 'classnames';
import googlapi from '../http/googleapi';
import {rootState} from '../redux/reducers'

function Search() {
  const history = useHistory();
  const state = useSelector((state: rootState) => state);
  const [searchError, setSearchError] = useState(false);
  const dispatch = useDispatch();

  const onSearch = async (e: any) => {
    e.preventDefault();
    if (!state.search.searchText.length) {
      return setSearchError(true);
    }
    const result = await googlapi.searchByTitle(state.search.searchText);
    dispatch({ type: 'SET_SEARCH_RESULTS', payload: result.data.items });
    history.push('/search-result');
  };

  return (
    <form className="form-inline my-2 my-lg-0">
      <input
        onChange={(e) => {
          dispatch({ type: 'SET_SEARCH_TEXT', payload: e.target.value });
        }}
        value={state.search.searchText}
        className={cx('form-control mr-sm-2 ', { 'is-invalid': searchError })}
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
      <button
        onBlur={() => {
          setSearchError(false);
        }}
        onClick={onSearch}
        className="btn btn-outline-success my-2 my-sm-0"
        type="submit"
      >
        Search
      </button>
    </form>
  );
}

export default Search;
