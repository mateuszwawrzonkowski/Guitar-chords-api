import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Input from 'components/atoms/RadioInput/RadioInput';

const RadioInputsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-content: space-between;
    margin: 10px 10px;
`;
const Label = styled.label`
    display: flex;
    align-self: flex-start;
    justify-content: center;
    cursor: pointer;
    min-width: 70px;
    padding: 5px;
    background-color: ${({ theme }) => theme.background};
    border-radius: 10px;
    border:1px solid #D0D0D0;
    overflow:auto;
    transition: 0.4s;
    box-shadow: 0px 6px 10px 0px rgba(0,0,0,0.5);
    border:none;
    font-weight: ${({ theme }) => theme.medium};
    font-size: 1.4rem;
    color: ${({ theme }) => theme.fontColor};
    text-transform: uppercase;
    :hover{
      background-color: ${({ theme }) => theme.backgroundDarken};
      color: ${({ theme }) => theme.background};
    }

    @media (min-width: 768px) {
      font-size: 1.8rem;
  }
`;

const RadioInputs = ({
  data, selectedInstrument, onChange,
}) => {
  const randomId = () => `_${Math.random().toString(36).substr(2, 9)}`;

  const inputs = data.map((item) => (
    <div key={randomId()}>
      <Input
        id={item.id}
        type={item.type}
        name={item.name}
        value={item.value}
        checked={selectedInstrument === item.value}
        onChange={onChange}
        selectedInstrument={selectedInstrument}
      />
      <Label key={randomId()} htmlFor={item.id}>{item.id}</Label>
    </div>
  ));

  return (
    <RadioInputsWrapper>
      {inputs}
    </RadioInputsWrapper>
  );
};

RadioInputs.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectedInstrument: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default RadioInputs;
