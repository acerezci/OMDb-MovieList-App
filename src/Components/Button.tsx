import React, { memo } from 'react';
import styled from 'styled-components';

interface PropTypes {
  onPress: () => void;
}

const Button = (props: PropTypes) => (
  <MyButton type="button" onClick={props.onPress}>
    Search
  </MyButton>
);

const MyButton = styled.button`
  width: 150px;
  height:45px;
  font-size: 20px;
  font-weight: 300;
  padding: 10px;
  border-radius: 8px;
  border: none;
  outline: none;
  color: #161d27;
`;

export default memo(Button);
