import React, { memo } from 'react';
import styled from 'styled-components';
import { useAppDispatch } from 'Redux/store';
import { changeCurrentPage } from 'Redux/slices/CurrentPageSlice';
import { useSelector } from 'react-redux';
import currentPageSelector from 'Redux/selectors/CurrentPageSelector';

const Pagination = () => {
  const dispatch = useAppDispatch();
  const currentPage = useSelector(currentPageSelector);

  return (
    <Container>
      {currentPage > 1 && (
        <ItemContainer
          onClick={() => dispatch(changeCurrentPage(currentPage - 1))}
        >
          &#8610; Prev Page
        </ItemContainer>
      )}

      <CurrentPage>{currentPage}</CurrentPage>
      <ItemContainer
        onClick={() => dispatch(changeCurrentPage(currentPage + 1))}
      >
        Next Page &#8611;
      </ItemContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
`;

const ItemContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 125px;
  height: 35px;
  background-color: #ffffff;
  margin-right: 12px;
  color: #000;
  border-radius: 8px;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  transition: 0.4s ease-out;
  &:hover {
    background-color: #40526d;
    color: #fff;
  }
  -webkit-box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.75);
`;

const CurrentPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
  background-color: #ffffff;
  color: #000;
  margin-right: 12px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 16px;
  -webkit-box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.75);
`;

export default memo(Pagination);
