const ColoredStar = () => {
  return <img src="/images/stars.png" alt="stars" />;
};
const EmptyStar = (peops) => {
  return <img src="/images/star-empty.png" alt="stars" />;
};

const Product = (props) => {
  return (
    <div className="productContainer">
      <div className="productInfo">
        <h1 className="productTitle">{props.title}</h1>
        <p className="productLocation">{props.location}</p>
        <div className="productTagsContainer">
          {props.tags.map((tags) => (
            <div className="productTags" key={tags}>
              <p className="productTag">{tags}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="productPerson">
        <div className="productPersonContainer">
          <div className="productPersonName">
            <p>{props.hostName}</p>
          </div>
          <div className="productPersonImg">
            <img src={props.hostPicture} alt={"props.hostPicture"} />
          </div>
        </div>
        <div className="stars">
          {Array.from({ length: parseInt(props.rating) }, (element, index) => (
            <ColoredStar key={"colored-" + index} />
          ))}
          {Array.from(
            { length: 5 - parseInt(props.rating) },
            (element, index) => (
              <EmptyStar key={"empty-" + index} />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
