import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Input = styled.input`
    position: fixed;
    width: 0;
    opacity: 0;
    background-color: ${({ theme }) => theme.background};
    :checked + label{
      box-shadow: inset 0 0 5px black;
    }
`;

const RadioInput = ({
  id, type, name, value, checked, onChange,
}) => (
  <Input
    id={id}
    type={type}
    name={name}
    value={value}
    checked={checked}
    onChange={onChange}
  />
);

RadioInput.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default RadioInput;
