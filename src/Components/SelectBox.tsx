import React, { memo, FormEvent } from 'react';
import styled from 'styled-components';

interface PropTypes {
  onChange:(e:FormEvent<HTMLSelectElement>) => void;
}

const SelectBox = (props:PropTypes) => (
  <Select onChange={props.onChange}>
    <option value="">All</option>
    <option value="movie">Movie</option>
    <option value="series">Series</option>
    <option value="episode">Episode</option>
  </Select>
);

const Select = styled.select`
  height:45px;
  width:150px;
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

export default memo(SelectBox);
