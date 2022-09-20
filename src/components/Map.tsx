import { registerMap } from 'echarts';
import * as echarts from 'echarts/core';
import React from 'react';
import { useCallback, useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
// Component
import ReactEChartsCore from 'echarts-for-react/lib/core';
import { DatasetComponent, GeoComponent } from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';
// 한국 지도 데이터 불러오기
import korea from '../models/kr_result.json';
// 지도 데이터 등록
registerMap('korea', korea as any);

interface MapProps {
  city: any;
  loading: boolean;
  onSelect: (params: any) => void;
}
interface MapLayoutProps {
  width: number;
}

// Style
const MapLayout = styled.div<MapLayoutProps>`
  height: 100%;
  margin-left: ${({ width }) => width / 8 }px;
`;

const Map: React.FC<MapProps> = ({ onSelect }): JSX.Element => {
  // 맵 너비
  const [width, setWidth] = useState<number>(0);
  // 차트 옵션 설정
  const option = useMemo(() => ({
    series: [{
      map: 'korea',
      type: 'map',
      data: korea.features.map((item: any): any => ({ name: item.properties.name, value: item.properties }))
    }]
  }), [korea]);
  // 차트 UI 옵션
  const uiOption = useMemo(() => ({ height: width }), [width]);
  // 차트 이벤트 옵션
  const eventOption = useMemo(() => ({ 'click': onSelect }), [onSelect]);
  // Set an echarts
  echarts.use([CanvasRenderer, DatasetComponent, GeoComponent]);

  /** [Event handler] 브라우저 너비 측정 */
  const measureWidth = useCallback(() => setWidth(window.innerWidth), []);
  /** [Event handler] 브라우저 크기 변경에 따라 맵 크기를 바꾸기 위해 너비 측정 */
  useEffect(() => {
    // 브라우저 너비
    measureWidth();
    // 브라우저 크기 변경에 따라 너비 확인
    window.addEventListener('resize', measureWidth);
    return () => window.removeEventListener('resize', measureWidth);
  }, []);

  // 컴포넌트 반환
  return (
    <MapLayout width={width}>
      <ReactEChartsCore echarts={echarts} option={option} opts={uiOption} onEvents={eventOption} />
    </MapLayout>
  )
}

export default React.memo(Map);