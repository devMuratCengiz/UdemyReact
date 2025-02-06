function ImageShow({ type }) {
  return <div>
    <img src={type.urls.full} alt={type.alt_description} />
  </div>;
}

export default ImageShow;
