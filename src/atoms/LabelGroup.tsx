import styled from 'styled-components';

const StyledGroup = styled.div`
  display: block;
  margin-bottom: 12px;
  position: relative;
  .label {
    color: #b0bec5;
    display: block;
    font-size: 12px;
    font-weight: 600;
    line-height: 1.4;
    margin-bottom: 2px;
  }
  .content {
    font-size: 15px;
    font-weight: 400;
    line-height: 1.4;
    margin: 0;
  }
`;

interface LabelGroupProps {
  children?: React.ReactNode;
  label: React.ReactNode;
  style?: React.CSSProperties;
}

export const LabelGroup: React.FC<LabelGroupProps> = ({ children, label, style }): JSX.Element => {
  return (
    <StyledGroup style={style}>
      <label className='label'>{label}</label>
      <div className='content'>{children}</div>
    </StyledGroup>
  );
}