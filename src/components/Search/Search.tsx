import React from 'react';
import InputAdornment from '@material-ui/core/InputAdornment';
import Helmet from '../../assets/icons/helmet.png';
import { SearchContainer, SearchInput, SearchItem } from './Search.styled';
import AllianceFlag from '../../assets/icons/alliance_flag.png';

const Search: React.FC = () => {
  return (
    <SearchContainer>
      <SearchItem>
        <SearchInput
          variant="filled"
          label="Search player"
          fullWidth
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <img src={Helmet} alt="Search player" />
              </InputAdornment>
            ),
          }}
        />
      </SearchItem>
      <SearchItem>
        <SearchInput
          variant="filled"
          label="Search alliance"
          fullWidth
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <img src={AllianceFlag} alt="Search alliance" />
              </InputAdornment>
            ),
          }}
        />
      </SearchItem>
    </SearchContainer>
  );
};

export default Search;
