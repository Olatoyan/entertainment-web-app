import { useForm } from "react-hook-form";
import styled from "styled-components";

const StyledSearchBox = styled.form`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-top: 3rem;
  margin-bottom: 2rem;
`;

const SearchIcon = styled.img`
  height: 2.7rem;
  width: 2.7rem;
`;

const Input = styled.input`
  border: none;
  outline: none;
  background-color: transparent;
  width: 100%;
  font-size: 2.4rem;
  font-weight: 300;
  caret-color: var(--red);
  padding-bottom: 0.7rem;
  border-bottom: 1px solid transparent;

  &::placeholder {
    opacity: 0.4979;
  }

  &:focus,
  &:hover {
    border-bottom: 1px solid var(--greyish-blue);
  }
`;

function SearchBox({ placeholder, onSearch }) {
  const { register, handleSubmit } = useForm();

  function onSubmit(data) {
    console.log(data);
    onSearch(data.searchTerm);
  }

  return (
    <StyledSearchBox onSubmit={handleSubmit(onSubmit)}>
      <SearchIcon src="./icon-search.svg" alt="search icon" />
      <Input
        type="text"
        placeholder={placeholder}
        {...register("searchTerm")}
      />
    </StyledSearchBox>
  );
}

export default SearchBox;
