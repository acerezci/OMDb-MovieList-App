import React, { memo } from 'react';
import styled from 'styled-components';
import { useAppDispatch } from 'Redux/store';
import { changeCurrentPage } from 'Redux/slices/CurrentPageSlice';
import { useSelector } from 'react-redux';
import currentPageSelector from 'Redux/selectors/CurrentPageSelector';

interface PropTypes {
  numberOfPages: number;
}

const Pagination = ({
  numberOfPages,
}: PropTypes) => {
  const dispatch = useAppDispatch();
  const currentPage = useSelector(currentPageSelector);

  return (
    <Container>
      {Array.from(Array(numberOfPages), (_, index) => (
        <PageContainer
          active={index + 1 === currentPage}
          key={index.toString()}
          value={index + 1}
          onClick={() => dispatch(changeCurrentPage(index + 1))}
        >
          {index + 1}
        </PageContainer>
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
`;

const PageContainer = styled('div')<{ active: boolean; value: number }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
  background-color: ${({ active }) => (active === true ? '#eb5e22' : '#fefefe')};
  color: #000;
  margin-right: 6px;
  margin-bottom: 6px;
  border-radius: 6px;
  cursor: pointer;
  -webkit-box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.75);
  transition: 0.4s ease-out;
  &:hover {
    background-color: #eb5e22;
    color: #fff;
  }
`;

export default memo(Pagination);
