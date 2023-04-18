import { BsSearchHeart} from 'react-icons/bs'

import {SearchbarWr,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput} from "./Searchbar.styled"


 export const Searchbar =({onSubmit, query}) => {
  const  handleChange = e => {
   
    this.props.query(e.target.value.toLowerCase().trim());
  };
  const  handleSubmit = e => {
    
    e.preventDefault();
    this.props.onSubmit(query);
  };
    return(
        <SearchbarWr>
  <SearchForm onSubmit={handleSubmit}>
    <SearchFormButton type="submit">
      <SearchFormButtonLabel><BsSearchHeart /></SearchFormButtonLabel>
    </SearchFormButton>

    <SearchFormInput
      type="text"
      autocomplete="off"
      autoFocus
      placeholder="Search images and photos"
      onChange={handleChange}
    />
  </SearchForm>
</SearchbarWr>
    )
 }