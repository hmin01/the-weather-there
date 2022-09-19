import styled from 'styled-components';
// Component
import { LabelGroup } from './LabelGroup';
import Weather from './Weather';

const StyledDescBox = styled.div`
  bottom: 48px;
  background-color: #ffffff;
  border: 1px solid #e0e0e0;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.22);
  padding: 12px 18px;
  position: fixed;
  right: 48px;
  width: 326px;
`;

export const DescBox: React.FC<any> = ({ city }): JSX.Element => {
  return (
    <StyledDescBox>
      {city ? (
        <>
          <Weather weather={city.weather} />
          <div style={{ display: 'flex' }}>
            <LabelGroup label='시/도'>{city.ctp}</LabelGroup>
            <LabelGroup label='시/군/구' style={{ marginLeft: 16 }}>{city.name}</LabelGroup>
          </div>
          <div style={{ display: 'flex' }}>
            <LabelGroup label='현재 기온' style={{ flex: 1 }}>{`${city.temp.current}℃`}</LabelGroup>
            <LabelGroup label='최저 기온' style={{ flex: 1 }}>{`${city.temp.min}℃`}</LabelGroup>
            <LabelGroup label='최고 기온' style={{ flex: 1 }}>{`${city.temp.max}℃`}</LabelGroup>
            <LabelGroup label='체감 온도' style={{ flex: 1 }}>{`${city.temp.feels}℃`}</LabelGroup>
          </div>
          <div style={{ display: 'flex' }}>
            <LabelGroup label='강수량' style={{ flex: 1 }}>{`${city.rain !== null ? city.rain : '-'}`}</LabelGroup>
            <LabelGroup label='구름량' style={{ flex: 1 }}>{`${city.clouds.all}%`}</LabelGroup>
            <LabelGroup label='습도' style={{ flex: 1 }}>{`${city.temp.humidity}%`}</LabelGroup>
            <LabelGroup label='풍속' style={{ flex: 1 }}>{`${city.wind.speed}m/s`}</LabelGroup>
          </div>
        </>
      ) : (<></>)}
    </StyledDescBox>
  )
}