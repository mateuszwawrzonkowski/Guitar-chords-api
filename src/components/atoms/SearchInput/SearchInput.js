import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import noteIcon from 'assets/music-solid.svg';

const Input = styled.input`
    width:100%;
    padding: 10px 20px 10px 55px;
    margin: 0 auto;
    font-size: 1.9rem;
    font-weight: ${({ theme }) => theme.medium};
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.fontColor};
    border: none;
    border-radius: 10px 0 0 10px;
    background-image: url(${noteIcon});
    background-size:25px;
    background-position:15px 50%;
    background-repeat:no-repeat;
    text-transform: capitalize;

    ::placeholder{
      text-transform: uppercase;
      font-size: 1.6rem;
      font-weight: ${({ theme }) => theme.medium};
      color: ${({ theme }) => theme.fontColor};
      letter-spacing: 1px;
    }
    :focus{
      outline: none;
    }
    :focus::placeholder {
      color: transparent;
    }
`;

const SearchInput = ({
  value, onChange, type, name,
}) => (
  <Input placeholder="type artist or song..." onChange={onChange} value={value} type={type} name={name} />
);

SearchInput.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

SearchInput.defaultProps = {
  value: '',
};

export default SearchInput;
