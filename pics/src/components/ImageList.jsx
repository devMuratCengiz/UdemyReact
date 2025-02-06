import ImageShow from "./ImageShow";
import './ImageList.css';

function ImageList({ imageList }) {
  const renderedAnimals = imageList.map((image) => {
    return <ImageShow type={image} key={image.id} />;
  });

  return (
    <div className="image-list">
      {renderedAnimals}
    </div>
  );
}

export default ImageList;