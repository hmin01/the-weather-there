import React from 'react';
import { useCallback, useEffect, useState } from 'react';
import { DescBox } from './Desc';
// Component
import Layout from './Layout';
import Map from './Map';
import Search from './Search';

const App: React.FC<any> = (): JSX.Element => {
  // 선택한 도시
  const [city, setCity] = useState<any>(undefined);
  // 도시 선택 상태
  const [selected, setSelected] = useState<any>(undefined);
  const [prevId, setPrevId] = useState<string | undefined>(undefined);
  // UI 로딩 상태
  const [loading, setLoading] = useState<boolean>(false);
  // 정보 팝업 상태
  const [activate, setActivate] = useState<boolean>(false);

  /** [Event handler] 도시 선택 */
  const onSelect = useCallback((params: any): void => {
    // 로딩 활성화
    setLoading(true);
    // 선택된 도시 데이터 추출
    const st: any = params.data.value;
    // 데이터 저장
    setSelected({ uuid: new Date().getTime(), id: st.id, ctp: st.ctp, name: st.name, lat: st.coord.lat, lon: st.coord.lon });
  }, []);
  /** [Event handler] 도시 선택에 따른 처리 */
  useEffect(() => {
    // 이전 선택과 비교
    if (prevId && selected && selected.id === prevId) {
      // 팝업 비활성화
      setActivate(false);
      // 로딩 비활성화
      setLoading(false);
      // 데이터 초기화
      setCity(undefined);
      setPrevId(undefined);
      setSelected(undefined);
    } else if (selected) {
      // 팝업 활성화
      setActivate(true);
      // 날씨 정보 API 호출
      fetch(`${process.env.REACT_APP_API_URL}?lat=${selected.lat}&lon=${selected.lon}`).then((res: any): any => res.json()).then((data: any): void => {
        if (data.result) {
          // 데이터 저장
          setCity({ ...data.message, ctp: selected.ctp, id: selected.id, name: selected.name });
        } else {
          console.error(`[API ERROR] ${data.message}`);
        }
        // 로딩 비활성화
        setLoading(false);
      });
      // 이전 선택 ID 저장
      setPrevId(selected.id);
    }
  }, [selected]);

  // 컴포넌트 반환
  return (
    <Layout>
      <Search />
      <Map city={city} loading={loading} onSelect={onSelect} />
      <DescBox activate={activate} city={city} loading={loading} />
    </Layout>
  );
}

export default App;