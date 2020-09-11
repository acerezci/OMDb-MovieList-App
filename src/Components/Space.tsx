import styled from 'styled-components';

type SpaceDirection = 'row' | 'column';

interface PropTypes {
  value: number;
  type?: SpaceDirection;
}

const Space = styled.div`
  margin-bottom: ${({ value, type = 'column' }: PropTypes) => {
    if (type === 'column') {
      return value;
    }

    return 0;
  }}px;
  margin-left: ${({ value, type = 'column' }: PropTypes) => {
    if (type === 'row') {
      return value;
    }

    return 0;
  }}px;
  height: 0px;
  width: 0px;
`;

export default Space;
