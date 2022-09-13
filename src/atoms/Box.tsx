import styled from 'styled-components';
import { LabelGroup } from './LabelGroup';

const StyledDescBox = styled.div`
  bottom: 48px;
  background-color: #ffffff;
  border: 1px solid #e0e0e0;
  // box-shadow: 0 1px 4px rgba(0, 0, 0, 0.22);
  height: 210px;
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
          <div style={{ display: 'flex' }}>
            <LabelGroup label='시/도'>{city.ctp}</LabelGroup>
            <LabelGroup label='시/군/구' style={{ marginLeft: 16 }}>{city.name}</LabelGroup>
          </div>
          <LabelGroup label='위도/경도'>{`${city.coord.lat}/${city.coord.lon}`}</LabelGroup>
        </>
      ) : (<></>)}
    </StyledDescBox>
  )
}