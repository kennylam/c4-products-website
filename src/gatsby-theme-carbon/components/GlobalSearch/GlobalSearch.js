//
// Any changes to this file will be overwritten (during build)
//

// START COPY FROM https://github.com/carbon-design-system/gatsby-theme-carbon/blob/main/packages/gatsby-theme-carbon/src/components/GlobalSearch/GlobalSearch.js

// https://www.w3.org/TR/wai-aria-practices/examples/combobox/aria1.1pattern/listbox-combo.html/#ex1
/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/role-has-required-aria-props */

import React, {
  useState,
  useEffect,
  useContext,
  useRef,
  useMemo,
  useCallback,
} from 'react';
import { Close20, Search20 } from '@carbon/icons-react';
import _throttle from 'lodash.throttle';
import cx from 'classnames';
import NavContext from 'gatsby-theme-carbon/src/util/context/NavContext';
import { useOnClickOutside } from 'gatsby-theme-carbon/src/util/hooks';

import {
  container,
  input,
  label,
  searchButton,
  searchButtonClose,
  inputWrapper,
  inputFocusWithin,
  hidden,
  inactive,
} from 'gatsby-theme-carbon/src/components/GlobalSearch/GlobalSearch.module.scss';

import lunr from 'lunr';

import Menu, { MenuContext } from './Menu';
import cdaiConfig from '../../../../cdai-config.json';
const { search: searchConfiguration } = cdaiConfig;


const MAX_RESULT_LIST_SIZE = 8;

const defaultSearchPages = [
  { url: 'https://pages.github.ibm.com/cdai-design' },
  { url: 'https://pages.github.ibm.com/cdai-design/practices', },
  { url: 'https://pages.github.ibm.com/cdai-design/guidance', },
  { url: 'https://pages.github.ibm.com/cdai-design/digital' },
  { url: 'https://pages.github.ibm.com/cdai-design/dux' },
  { url: 'https://pages.github.ibm.com/cdai-design/pal' },
  { url: 'https://pages.github.ibm.com/cdai-design/cloud-pal' },
];

let searchPages = (searchConfiguration?.pages || defaultSearchPages);

if (process.env.NODE_ENV === 'production' && typeof window !== 'undefined') {
  Promise.all(
    // Fetch index data for each page
    searchPages.map(async (page) => {
      page.data = await fetch(page.url + '/search_index.json')
        .then(res => res.json())
        .catch(console.error);
    })
  ).then(() => {
    // Filter out failed fetches
    searchPages = searchPages.filter(page => page.data);
    // Load search (lunr) index for each page
    searchPages.forEach(page => {
      page.lunr = {
        index: lunr.Index.load(page.data['en'].index),
        store: page.data['en'].store,
      };
    });
  });
}

const search = _throttle((queryString) => {
  try {
    // Query each page index
    var pageMatches = searchPages.map(page =>
        page.lunr.index.search(queryString+'*')
            .map(match => ({...page, ...match, ...page.lunr.store[match.ref]}))
    ).flat();
    pageMatches.sort((a,b) => b.score - a.score);
    
    // Limit total search results
    const searchResults = pageMatches
      .slice(0, MAX_RESULT_LIST_SIZE);
    return searchResults;
  } catch {
    console.error(`Lunr is having issues querying for '${queryString}'`);
  }
}, 150);

// TODO pass magnifying ref for escape/close? keep focus within outline for input,
const GlobalSearchInput = () => {
  const optionsRef = useRef([]);
  const [focusedItem, setFocusedItem] = useState(0);
  const inputRef = useRef(null);
  const containerRef = useRef(null);
  const openButtonRef = useRef(null);
  const [inputIsFocused, setInputIsFocused] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const {
    toggleNavState,
    searchIsOpen,
    isManagingFocus,
    setIsManagingFocus,
  } = useContext(NavContext);

  const clearAndClose = useCallback(() => {
    setQuery('');
    toggleNavState('searchIsOpen', 'close');
    if (openButtonRef.current && isManagingFocus) {
      openButtonRef.current.focus();
    }
  }, [isManagingFocus, toggleNavState]);

  const value = useMemo(
    () => ({ optionsRef, focusedItem, setFocusedItem, clearAndClose }),
    [clearAndClose, focusedItem]
  );

  useEffect(() => {
    if (inputRef.current && searchIsOpen) {
      inputRef.current.focus();
      setInputIsFocused(true);
    }
  }, [searchIsOpen]);

  useOnClickOutside(containerRef, () => {
    toggleNavState('searchIsOpen', 'close');
    setQuery('');
  });

  useEffect(() => {
    if (query) {
      const searchResults = search(query) || [];
      setResults(searchResults);
    } else {
      setResults([]);
    }
    return () => {
      setResults([]);
    };
  }, [query]);

  const onKeyDown = (e) => {
    switch (e.key) {
      case 'ArrowDown': {
        e.preventDefault();
        setIsManagingFocus(true);
        setFocusedItem((focusedItem + 1) % results.length);
        break;
      }
      case 'ArrowUp': {
        e.preventDefault();
        setIsManagingFocus(true);
        if (focusedItem - 1 < 0) {
          setFocusedItem(results.length - 1);
        } else {
          setFocusedItem(focusedItem - 1);
        }
        break;
      }
      case 'Escape': {
        e.preventDefault();
        if (query === '') {
          clearAndClose();
        } else {
          setQuery('');
          setIsManagingFocus(true);
          inputRef.current.focus();
        }
        break;
      }
      case 'Enter': {
        e.preventDefault();
        const page = results[focusedItem];
        if (page) {
          window.location.href = page.url + page.path;
        }
        break;
      }
      default:
    }
  };

  // Check if there are results, if there are the listbox is open
  // and set focus to the first menu item
  const getAriaActiveDescendantValue = () => {
    if (results.length > 0) {
      return `menu-item-${focusedItem}`;
    }

    return null;
  };

  return (
    <MenuContext.Provider value={value}>
      <div
        ref={containerRef}
        className={cx(container, {
          [hidden]: !searchIsOpen,
          [inputFocusWithin]: inputIsFocused,
        })}
        role="search">
        <label htmlFor="search-input" id="search-label" className={label}>
          Search
        </label>
        <div
          className={inputWrapper}
          aria-owns="search-menu"
          aria-haspopup="menu">
          <button
            tabIndex={searchIsOpen ? '-1' : '0'}
            className={cx(searchButton, {
              [inactive]: searchIsOpen,
            })}
            ref={openButtonRef}
            type="button"
            aria-label="Open search"
            aria-expanded={searchIsOpen}
            onClick={() => {
              toggleNavState('searchIsOpen', 'open');
              toggleNavState('switcherIsOpen', 'close');
            }}>
            <Search20 description="Open search" />
          </button>
          <input
            autoComplete="off"
            tabIndex={searchIsOpen ? '0' : '-1'}
            onBlur={() => setInputIsFocused(false)}
            onFocus={() => setInputIsFocused(true)}
            ref={inputRef}
            type="text"
            aria-autocomplete="list"
            aria-controls="search-menu"
            aria-activedescendant={getAriaActiveDescendantValue()}
            className={cx(input, {
              [hidden]: !searchIsOpen,
            })}
            aria-label="Site wide search input"
            id="search-input"
            placeholder="Search"
            value={query}
            onKeyDown={onKeyDown}
            onChange={(evt) => setQuery(evt.target.value)}
          />
          <button
            tabIndex={searchIsOpen ? '0' : '-1'}
            className={cx(searchButton, searchButtonClose, {
              [hidden]: !searchIsOpen,
            })}
            type="button"
            aria-label="Clear search"
            onClick={clearAndClose}>
            <Close20 description="Clear search" />
          </button>
        </div>
        <Menu onKeyDown={onKeyDown} results={results} />
      </div>
    </MenuContext.Provider>
  );
};

export default GlobalSearchInput;
