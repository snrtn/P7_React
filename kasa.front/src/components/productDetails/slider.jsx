import { useState } from "react";
import "./productDetails.css"

const Slider = (props) => {
  const [ count, setCount ] = useState(0)


  const onNext = () => {
    if(count === props.picture.length - 1){
      setCount(0)
    } else {
      setCount(count + 1)
    }
}

  const onPrev = () => {
    if(count === 0){
      setCount(props.picture.length - 1)
    } else {
      setCount(count - 1)
    }
}

  return (
    <div className='slideContainer'>
      <div className='slideImgContainer' style={{transform: `translateX(-${count}00%)`}}>
        {props.picture.map((picture) => 
          <img className="slideImgs" src={picture} alt={picture} key={picture.index}/>
        )}
      </div>

      <div className="slideArrowContainer">
        <button className="slideArrow" onClick={onPrev}>
          <img src="/images/arrowLeft.svg" alt="" />
        </button>
        <button className="slideArrow" onClick={onNext}>
          <img src="/images/arrowRight.svg" alt="" />
        </button>
      </div>

      <div className='slideCounter'>{count + 1} / {props.picture.length}</div>
    </div>
  )
}

export default Slider;