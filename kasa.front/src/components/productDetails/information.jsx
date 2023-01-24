import Accordion from "../common/accordion";
import Product from "./product";
import Slider from "./slider";

const Information = (props) => {
  const { pictures, title, description, host, rating, location, equipments, tags } = props.product;
  return (
    <div className="infos">
      <div className="slide">
        <Slider picture={pictures}/>
      </div>
      <div className="infoDesc">
        <Product title={title} location={location} tags={tags} hostName={host.name} hostPicture={host.picture} rating={rating}/>
      </div>
      <div className="infoAccordion">
        <div className="infoAccordionItem">
          <Accordion title="Description" content={description}/>
        </div>
        <div className="infoAccordionItem">
          <Accordion title="Équipements"  content={equipments.map((equipment, i) => (
            <ul key={i}>
              <li>{equipment}</li>
            </ul>
          ))}/>
        </div>
      </div>
    </div>
  )
}

export default Information;