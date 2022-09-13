import { init as initChart, registerMap } from 'echarts';
import React from 'react';
import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
// 한국 지도 데이터 불러오기
import korea from '../models/kr_result.json';
// 지도 데이터 등록
registerMap('korea', korea as any);

// Style
const MapLayout = styled.div`
  height: 268vh;
  position: relative;
  width: 100vw;
`;
const StyledMap = styled.div`
  margin-left: 200px;
  height: 100%;
  width: calc(100% - 200px);
`;

const Map: React.FC<any> = ({ onSelect }): JSX.Element => {
  // 지도 생성 여부 확인
  const [init, setInit] = useState<boolean>(false);
  // 맵 참조하기 위한 객체 생성
  const mapRef = useRef<any>(undefined);

  // 렌더링 시, 지도 생성
  useEffect(() => {
    if (mapRef.current && !init) {
      // 차트에서 사용하는 데이터 가공
      const data = korea.features.map((item: any): any => ({ name: item.properties.name, value: item.properties }));
      // 지도 데이터를 활용하여 차트 생성
      const chart: any = initChart(mapRef.current);
      // 차트 데이터 설정
      chart.setOption({
        series: [{
          map: 'korea',
          type: 'map',
          data
        }]
      });
      // 초기 생성 상태 변경
      setInit(true);
    }
  }, []);

  // 컴포넌트 반환
  return (
    <MapLayout>
      <StyledMap ref={mapRef} />
    </MapLayout>
  )
}

export default Map;