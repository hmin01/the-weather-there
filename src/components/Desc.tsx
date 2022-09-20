import { motion } from 'framer-motion';
import { useMemo } from 'react';
import styled from 'styled-components';
// Component
import { Col, Row, Spin } from 'antd';
import { LabelGroup } from '../atoms/LabelGroup';
import Weather from '../atoms/Weather';

// Style
const LoadingLayout = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
`;
const StyledDescBox = styled(motion.div)`
  bottom: 0;
  background-color: #ffffff;
  border: 1px solid #e0e0e0;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.22);
  overflow: hidden;
  padding: 12px 18px;
  position: fixed;
  left: calc(50% - 173px);
  width: 386px;

  @media (max-width: 526px) {
    left: 9%;
    width: 82%;
  }
`;

export const DescBox: React.FC<any> = ({ activate, city, loading }): JSX.Element => {
  // 애니메이션 설정
  const variants: any = {
    activate: {
      height: 278,
      transition: {
        type: "spring",
        stiffness: 45
      }
    },
    init: {
      height: 40,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    }
  };

  // 컴포넌트 반환
  return (
    <StyledDescBox animate={activate ? 'activate' : 'init'} variants={variants}>
      {city ? (
        <Spin spinning={loading}>
          <Weather weather={city.weather} />
          <Row gutter={8}>
            <Col span={12}>
              <LabelGroup label='시/도'>{city.ctp}</LabelGroup>
            </Col>
            <Col span={12}>
              <LabelGroup label='시/군/구'>{city.name}</LabelGroup>
            </Col>
          </Row>
          <Row gutter={8}>
            <Col span={6}>
              <LabelGroup label='현재 기온' style={{ flex: 1 }}>{`${city.temp.current}℃`}</LabelGroup>
            </Col>
            <Col span={6}>
              <LabelGroup label='최저 기온' style={{ flex: 1 }}>{`${city.temp.min}℃`}</LabelGroup>
            </Col>
            <Col span={6}>
              <LabelGroup label='최고 기온' style={{ flex: 1 }}>{`${city.temp.max}℃`}</LabelGroup>
            </Col>
            <Col span={6}>
              <LabelGroup label='체감 온도' style={{ flex: 1 }}>{`${city.temp.feels}℃`}</LabelGroup>
            </Col>
          </Row>
          <Row gutter={8}>
            <Col span={6}>
              <LabelGroup label='강수량' style={{ flex: 1 }}>{`${city.rain !== null ? city.rain : '-'}`}</LabelGroup>
            </Col>
            <Col span={6}>
              <LabelGroup label='구름량' style={{ flex: 1 }}>{`${city.clouds.all}%`}</LabelGroup>
            </Col>
            <Col span={6}>
              <LabelGroup label='습도' style={{ flex: 1 }}>{`${city.temp.humidity}%`}</LabelGroup>
            </Col>
            <Col span={6}>
              <LabelGroup label='풍속' style={{ flex: 1 }}>{`${city.wind.speed}m/s`}</LabelGroup>
            </Col>
          </Row>
        </Spin>
      ) : (
        <LoadingLayout>
          <Spin spinning={loading} />
        </LoadingLayout>
      )}
    </StyledDescBox>
  )
}