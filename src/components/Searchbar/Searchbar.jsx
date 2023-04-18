
import {SearchbarWr,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput} from "./Searchbar.styled"


 export const Searchbar =({onSubmit}) => {
    return(
        <SearchbarWr>
  <SearchForm onSubmit={onSubmit}>
    <SearchFormButton type="submit" >
      <SearchFormButtonLabel>Search</SearchFormButtonLabel>
    </SearchFormButton>

    <SearchFormInput
      type="text"
      autocomplete="off"
      autoFocus
      placeholder="Search images and photos"
    />
  </SearchForm>
</SearchbarWr>
    )
 }