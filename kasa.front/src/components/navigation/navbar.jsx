import { Component } from 'react';
import { Link } from 'react-router-dom';
import "./navigation.css";
import translate from "../../translate/fr.json";

export class Navbar extends Component {
  render() {
    return (
      <div className='navContainer'>
        <div className='navWrapper'>
          <div className='navLeft'>
            <Link to={"/"}>
              <img className='navLogo' src="/images/logo.svg" alt="kasa logo" />
            </Link>
          </div>
          <div className='navRight'>
            <ul className='items'>
              <li className='item'>
                <Link to={"/"}>
                  {translate.navigation.navbar.home}
                </Link>
              </li>
              <li className='item'>
                <Link to={"/about"}>
                  {translate.navigation.navbar.about}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Navbar