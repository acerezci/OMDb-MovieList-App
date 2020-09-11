import React, { memo, FormEvent, KeyboardEvent } from 'react';
import styled from 'styled-components';

interface PropTypes {
  onChange: (event: FormEvent<HTMLInputElement>) => void;
  onKeyPress: (event: KeyboardEvent<HTMLInputElement>) => void;
  value: string;
  placeholder: string;
}

const Input = (props: PropTypes) => (
  <MyInput
    value={props.value}
    type="text"
    placeholder={props.placeholder}
    onChange={props.onChange}
    onKeyPress={props.onKeyPress}
  />
);

const MyInput = styled.input`
  height:45px;
  font-size: 20px;
  font-weight: 300;
  padding: 10px;
  border-radius: 8px;
  border: none;
  outline: none;
  color: #53565a;
  transition: 0.4s ease-out;
  &:focus {
    box-shadow: 0px 0px 8px 3px #53565a;
  }
`;

export default memo(Input);
