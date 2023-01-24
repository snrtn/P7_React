import React from 'react';
import { Link } from 'react-router-dom';
import "./view.css";
import translate from "../translate/fr.json"

const NotFound = () => {
  return (
    <div className="nomatch">
      <h1>{translate.nomatch.title}</h1>
      <p>{translate.nomatch.body}</p>
      <Link className="backhome" to="/">{translate.nomatch.link}</Link>
    </div>
  )
}

export default NotFound;