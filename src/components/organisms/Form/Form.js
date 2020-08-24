import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import SearchInput from 'components/atoms/SearchInput/SearchInput';
import SearchButton from 'components/atoms/SearchButton/SearchButton';
import Spinner from 'components/atoms/Spinner/Spinner';
import RadioInputs from 'components/molecules/RadioInputs/RadioInputs';
import TabItems from 'components/molecules/TabItems/TabItems';

const radioInputs = [
  {
    id: 'chords',
    type: 'radio',
    name: 'selectedInstrument',
    value: 'chords',
  },
  {
    id: 'bass',
    type: 'radio',
    name: 'selectedInstrument',
    value: 'text_bass_tab',
  },
  {
    id: 'guitar',
    type: 'radio',
    name: 'selectedInstrument',
    value: 'text_guitar_tab',
  },
  {
    id: 'player',
    type: 'radio',
    name: 'selectedInstrument',
    value: 'player',
  },
];

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  position: absolute; 
  top: 135px;
  max-width: 900px;
`;

const FormWrap = styled.form`
display: flex;
flex-direction: column;
`;

const SearchInputWrapper = styled.div`
  display: flex;
  background-color: transparent;
  box-shadow: 0px 6px 10px 0px rgba(0,0,0,0.5);
  border-radius: 10px;
  margin: 0 10px;
`;

const Info = styled.div`
  display: flex;
  width: 50%;
  justify-content: center;
  border-radius: 10px;
  padding: 10px 0;
  margin: 10px;
  min-width: 300px;
  background-color: ${({ theme }) => theme.fontColor};
  color:${({ theme }) => theme.header};
  text-transform: uppercase;
`;

const Form = () => {
  const [formData, setFormData] = useState({
    songOrArtist: '',
    selectedInstrument: 'chords',
    send: false,
  });

  const [tabs, setTabs] = useState([]);

  const updateFormData = (e) => setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const sendData = (e) => {
    e.preventDefault();
    setTabs([]);
    setFormData({
      ...formData,
      send: true,
    });
  };
  const stopSendData = () => setFormData({
    ...formData,
    send: false,
  });

  const {
    songOrArtist, selectedInstrument, send,
  } = formData;

  const changeInstrumentName = (instrument) => {
    switch (instrument) {
      case 'chords':
        return 'chords';
      case 'text_bass_tab':
        return 'bass';
      case 'text_guitar_tab':
        return 'guitar';
      case 'player':
        return 'player';
      default:
        return '';
    }
  };

  const randomId = () => `_${Math.random().toString(36).substr(2, 9)}`;

  useEffect(() => {
    const urlSongOrArtist = songOrArtist.replace(' ', '+');
    const fetchUrl = `https://www.songsterr.com/a/ra/songs.json?pattern=${urlSongOrArtist}`;
    if (send) {
      fetch(fetchUrl)
        .then((value) => value.json())
        .then((value) => {
          setTabs(value);
        })
        .then(() => {
          stopSendData();
        })
        .catch((err) => {
          throw (err);
        });
    }
  }, [songOrArtist, send]);// eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Wrapper>
      <FormWrap onSubmit={handleSubmit} autoComplete="off">
        <RadioInputs
          data={radioInputs}
          selectedInstrument={selectedInstrument}
          onChange={
          (e) => updateFormData(e)
}
          key={randomId()}
        />
        <SearchInputWrapper>
          <SearchInput
            name="songOrArtist"
            type="text"
            value={songOrArtist}
            onChange={(e) => updateFormData(e)}
          />
          <SearchButton type="submit" onClick={(e) => sendData(e)} />
        </SearchInputWrapper>
      </FormWrap>
      {tabs.length > 0 ? (
        <TabItems
          tabs={tabs}
          key={randomId()}
          changeInstrumentName={changeInstrumentName}
          selectedInstrument={selectedInstrument}
          randomId={randomId}
        />
      ) : (
        <Info>
          {send ? <Spinner /> : ('')}
        </Info>
      )}
    </Wrapper>
  );
};

export default Form;
