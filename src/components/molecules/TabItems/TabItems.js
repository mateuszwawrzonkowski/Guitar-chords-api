import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ItemsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  flex-basis:90%;
  margin-top: 25px;
`;

const Item = styled.a`
  display: flex;
  flex-basis: 45%;
  flex-direction: column;
  flex-wrap: wrap;
  align-content:center;
  align-items: center;
  justify-content: center;
  margin: 10px 10px;
  border-radius: 5px;
  padding: 15px 10px;
  min-width: 280px;
  max-width: 500px;
  background-color: ${({ theme }) => theme.fontColor};
  color:${({ theme }) => theme.header};
  text-transform: uppercase;
  word-wrap: break-word;
  text-decoration:none;
  transition: 0.3s;
  :hover{
    background-color: ${({ theme }) => theme.backgroundDarken};
    color: white;
  }
`;

const ArtistTitle = styled.h1`
  align-self: center;
  text-align: center;
`;

const SongTitle = styled.h2`
  align-self: center;
  margin-bottom: 12px;
  text-align: center;
`;

const InstrumentsWrapper = styled.div`
  display: flex;
  flex-wrap:wrap;
  justify-content: center;
`;

const Instrument = styled.p`
  margin:0 10px;
`;

const TabItems = ({
  tabs, changeInstrumentName, selectedInstrument, randomId,
}) => (

  <ItemsWrapper>
    {tabs
      .filter((tab) => (tab.tabTypes).includes(selectedInstrument.toUpperCase()))
      .map((tab) => (
        <Item href={`http://www.songsterr.com/a/wa/bestMatchForQueryString?s=${tab.title}&a=${tab.artist.name}&inst=${changeInstrumentName(selectedInstrument)}`} key={randomId()} target="_blank">
          <ArtistTitle>{tab.artist.name}</ArtistTitle>
          <SongTitle>{tab.title}</SongTitle>
          <InstrumentsWrapper>
            {(tab.tabTypes).map((tabType) => (
              <Instrument key={randomId()}>
                {
                        changeInstrumentName(tabType.toLowerCase())
                      }
              </Instrument>
            ))}
          </InstrumentsWrapper>
        </Item>
      ))}
  </ItemsWrapper>
);

TabItems.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.object).isRequired,
  changeInstrumentName: PropTypes.func.isRequired,
  selectedInstrument: PropTypes.string.isRequired,
  randomId: PropTypes.func.isRequired,
};

export default TabItems;
