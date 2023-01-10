import './imageList.css'
import ImageShow from './ImageShow'

function ImageList({ images }) {
  const renderedImages = images.map((image, index) => {
    return <ImageShow key={index} image={image}></ImageShow>
  });
  
  return <div className='image-list'>{renderedImages}</div>
}

export default ImageList;