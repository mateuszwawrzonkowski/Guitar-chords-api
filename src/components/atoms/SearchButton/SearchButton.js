import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 42px;
    width: 78px;
    background-color: ${({ theme }) => theme.background};
    border:none;
    border-left: 1px solid #AAA;
    border-radius: 0 10px 10px 0 ;
    outline: none;
    font-size: 1.6rem;
    cursor: pointer;
    font-family: 'Montserrat', sans-serif;
    :active{
        box-shadow: inset 0 0 8px black;
        outline: none;
    }
`;

const SearchIcon = styled(FontAwesomeIcon)`
  font-size: 25px;
  color: ${({ theme }) => theme.fontColor};
`;

const SearchButton = ({
  type, onClick,
}) => (
  <Button type={type} onClick={onClick}>
    <SearchIcon icon={faSearch} />
  </Button>
);

SearchButton.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

SearchButton.defaultProps = {
  type: '',
};

export default SearchButton;
