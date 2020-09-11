import React, {
  memo,
  useState,
  FormEvent,
  KeyboardEvent,
  useEffect,
} from 'react';
import styled from 'styled-components';
import { updateMovieList } from 'Redux/actions/MovieListAction';
import { useAppDispatch } from 'Redux/store';
import { useSelector } from 'react-redux';
import currentPageSelector from 'Redux/selectors/CurrentPageSelector';
import { changeCurrentPage } from 'Redux/slices/CurrentPageSlice';
import Input from './Input';
import SelectBox from './SelectBox';
import Button from './Button';

const Form = () => {
  const firstPage = 1;
  const [searchTerm, setSearchTerm] = useState('Pokemon');
  const [searchTypeTerm, setSearchTypeTerm] = useState('');
  const [year, setYear] = useState('');
  const currentPage = useSelector(currentPageSelector);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(updateMovieList(searchTerm, year, searchTypeTerm, currentPage));
    console.log('alperen');
  }, [currentPage]);

  const onKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && searchTerm) {
      dispatch(changeCurrentPage(firstPage));
      dispatch(updateMovieList(searchTerm, year, searchTypeTerm, firstPage));
    }
  };

  const onPress = () => {
    if (searchTerm) {
      dispatch(changeCurrentPage(firstPage));
      dispatch(updateMovieList(searchTerm, year, searchTypeTerm, firstPage));
    }
  };

  return (
    <Container>
      <FormItem>
        <Label>Movie Name : </Label>
        <Input
          placeholder="Search for a movie"
          value={searchTerm}
          onChange={(event: FormEvent<HTMLInputElement>) => setSearchTerm((event.target as HTMLInputElement).value)}
          onKeyPress={onKeyPress}
        />
      </FormItem>
      <FormItem>
        <Label>Year : </Label>
        <Input
          placeholder="Year"
          value={year}
          onChange={(event: FormEvent<HTMLInputElement>) => setYear((event.target as HTMLInputElement).value)}
          onKeyPress={onKeyPress}
        />
      </FormItem>
      <FormItem>
        <Label>Type : </Label>
        <SelectBox
          onChange={(event: FormEvent<HTMLSelectElement>) => setSearchTypeTerm((event.target as HTMLSelectElement).value)}
        />
      </FormItem>
      <FormItem>
        <Label />
        <Button onPress={onPress} />
      </FormItem>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const FormItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 16px;
`;

const Label = styled.h3`
  font-size: 23px;
  line-height: 27px;
  margin-right: 21px;
`;

export default memo(Form);
