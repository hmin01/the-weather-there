import styled from 'styled-components';
// Component
import { Input } from 'antd';
// Icon
import { IoSearch } from 'react-icons/io5';
import { useCallback, useState } from 'react';

// Style
const SearchForm = styled.div`
  background-color: #ffffff;
  border: 1px solid #f0f0f0;
  border-radius: 12px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.22);
  left: 30%;
  padding: 2px;
  position: fixed;
  top: 48px;
  width: 40%;
  z-index: 100;

  @media (max-width: 992px) {
    left: 20%;
    top: 36px;
    width: 60%;
  }
  @media (max-width: 768px) {
    left: 15%;
    top: 28px;
    width: 70%;
  }
  @media (max-width: 480px) {
    left: 5%;
    top: 24px;
    width: 90%;
  }
`;
const StyledSearchIcon = styled.span`
  align-items: center;
  display: flex;
  justify-content: center;
  margin-right: 4px;
`;

const Search: React.FC<any> = (): JSX.Element => {
  // 검색 단어
  const [value, setValue] = useState<any>('');
  /** [Event handler] 데이터 변경 */
  const onChange = useCallback((e: any) => setValue(e.target.value), []);
  /** [Event handler] 검색 */
  const onSearch = useCallback(() => console.log(value), [value]);

  return (
    <SearchForm>
      <Input allowClear bordered={false} onChange={onChange} onPressEnter={onSearch} prefix={<SearchIcon />} style={{ width: '100%' }} value={value} />
    </SearchForm>
  );
}
const SearchIcon: React.FC<any> = (): JSX.Element => {
  return (
    <StyledSearchIcon>
      <IoSearch />
    </StyledSearchIcon>
  )
}

export default Search;