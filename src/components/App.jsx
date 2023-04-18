import React, {Component} from "react"
import {getPosts} from "../services/imageAPI"
import {Searchbar} from "./Searchbar/Searchbar"
import { Button } from "./Button/Button";
import {ImageGallery} from './ImageGallery/ImageGallery'
import {Modal} from './Modal/Modal'
import {MainDiv} from './Searchbar/Searchbar.styled'
import {Loader} from "./Loader/Loader"

export class App extends Component{
  state = {
    images: [],
    LargeImg: null,
    showModal: false,
    loading: false,
    page: 1,
    error: '',
    query: '',
  };
handleSearch = data => { this.setState({query:data})};  
openModal = data => {this.setState({largeImg: data})};
closeModal = () => {this.setState({ largeImg: null });
};
loadMore = () => {this.setState
  (prevState => ({page: prevState.page + 1}))};
onClose = () => {
  this.setState(prevState => ({
    showModal: !prevState.showModal,
    largeItem: false,
  }))};
componentDidUpdate(_, prevState) {
  if (prevState.query !== this.state.query) {
    this.setState({ loading: true, error: '' })
    getPosts(this.state.query, this.state.page)
  .then(res => {
    if(!res.data.hits.length){this.setState({ error: 'Empty array', items: [] });
     alert('Try another query!') } else
     {
      this.setState(prevState => ({images: [...prevState.images, ...res.data.hits],}))
     }
  })
  .catch(error => {this.setState({ error: error.message })})
  .finally(this.setState({loading: false}))
}};
  render() {
    const {images, largeImg} = this.state;
    return (
      <MainDiv>
        <Searchbar onSubmit = {this.handleSearch}></Searchbar>
        {this.state.loading && <Loader/>}
        {!this.state.loading && (
          <div>
          <ImageGallery images={images} openModal={this.openModal}/>
          <Button clickHandler={this.loadMore}>Load more</Button>
          {largeImg && (
            <Modal largeImg= {largeImg}
            onClose = {this.closeModal}/>
          )}
          </div>
        )}
            </MainDiv>
    );
  };
};
     

