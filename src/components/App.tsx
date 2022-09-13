import React, { useCallback, useEffect } from 'react';
import { useState } from 'react';
// Component
import Layout from './Layout';
import Map from './Map';

const App: React.FC<any> = (): JSX.Element => {
  // 선태한 도시
  const [city, setCity] = useState<any>(undefined);

  /** [Event handler] 도시 선택 */
  const onSelect = useCallback((params: any): void => setCity(params.data.value), []);

  // Debugging
  useEffect(() => console.log(city), [city]);

  // 컴포넌트 반환
  return (
    <Layout>
      <Map city={city} onSelect={onSelect} />
    </Layout>
  );
}

export default App;