import { useState, useEffect, useRef } from 'react'
import { Wrapper, Content, SearchInput, SearchIcon } from "./SearchBar.styles";
import IconMagnifier from '../../images/icons/icon-magnifier-grey.svg';
const SearchBar = ({ setSearchValue }) => {
    const [state, setState] = useState('');
    const BeforeMount = useRef(true);
    useEffect(() => {
      if(BeforeMount.current){
        BeforeMount.current = false;
        return;
      }
      const timeOut = setTimeout(() => {
        setSearchValue(state);
      }, 500);

      return () => clearTimeout(timeOut)
     
    },[setSearchValue, state])
  return (
    <>
    <Wrapper>
    <Content> 
      <SearchIcon src={ IconMagnifier } />
      <SearchInput 
      type="text" 
      placeholder="Search movies..." 
      onChange={e => setState(e.currentTarget.value)}
      value={state}
      />
    </Content>
    </Wrapper>
    </>
  )
}

export default SearchBar;