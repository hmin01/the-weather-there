import React, { useEffect } from 'react';
import { useCallback, useState } from 'react';
// Component
import Layout from './Layout';
import Map from './Map';

const App: React.FC<any> = (): JSX.Element => {
  // 선택한 도시
  const [city, setCity] = useState<any>(undefined);
  // 현재 선택한 데이터
  const [selected, setSelected] = useState<any>(undefined);
  // 이전에 선택한 데이터
  const [prevSelected, setPrevSelected] = useState<any>(undefined);

  /** [Event handler] 도시 선택 */
  const onSelect = useCallback((params: any): void => setSelected({ uuid: new Date().getTime(), ctp: params.data.value.ctp, id: params.data.value.id, lat: params.data.value.coord.lat, lon: params.data.value.coord.lon, name: params.data.value.name }), []);
  // 이전에 선택한 데이터와 현재 선택한 데이터 비교
  useEffect(() => {
    if (prevSelected && selected && selected.id === prevSelected.id) {
      setSelected(undefined);
      setPrevSelected(undefined);
    } else {
      if (selected) {
        fetch(`${process.env.REACT_APP_API_URL}?lat=${selected.lat}&lon=${selected.lon}`).then((res: any): any => res.json()).then((data: any): void => {
          if (data.result) {
            setCity({ ...data.message, ctp: selected.ctp, id: selected.id, name: selected.name });
          } else {
            console.error(`[API ERROR] ${data.message}`);
          }
        });
      }
      setPrevSelected(selected);
    }
  }, [selected])

  // 컴포넌트 반환
  return (
    <Layout>
      <Map city={city} onSelect={onSelect} />
    </Layout>
  );
}

export default App;