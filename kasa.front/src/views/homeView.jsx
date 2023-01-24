import { Component } from 'react'
import ProductList from '../components/dashboard/productList'
import "./view.css";
import translate from "../translate/fr.json"

export class HomeView extends Component {
  render() {
    return (
      <>
        <div className='homeJumbotron'>
          <div className="homeBackground" />
          <img className='homeImg' src="/images/homeBackground.png" alt="homeBackground" />
          <h1 className='homeTitle'>
            {translate.home.title}
          </h1>
        </div>
        <ProductList />
      </>
    )
  }
}

export default HomeView