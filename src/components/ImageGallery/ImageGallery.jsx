import styled from 'styled-components'
import { ImageGalleryItem } from "../ImageGalleryItem/ImageGalleryItem";

export const ImageGallery = ({ images, openModal }) => {
  return <ImageGalleryList>
    {images.map(image => (
            <ImageGalleryItem key={image.id} image = {image} openModal ={openModal}></ImageGalleryItem>
          ))}
  </ImageGalleryList>;
};

const ImageGalleryList = styled.ul`
    display: grid;
    max-width: calc(100vw - 48px);
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    grid-gap: 16px;
    margin-top: 0;
    margin-bottom: 0;
    padding: 0;
    list-style: none;
    margin-left: auto;
    margin-right: auto;
    `
  
