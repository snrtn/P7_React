import { Component } from 'react'
import "./navigation.css"
import translate from "../../translate/fr.json"
import { Link } from 'react-router-dom'

export class Footer extends Component {
  render() {
    return (
      <div className='footContainer'>
        <div className='footWrapper'>
          <Link to={"/"}>
            <img className='footLogo' src="/images/logoBlanc.svg" alt="kasa logo blanc" />
          </Link>
          <h1 className='footTitle'>
            {translate.navigation.footer.copyright}
          </h1>
        </div>
      </div>
    )
  }
}

export default Footer