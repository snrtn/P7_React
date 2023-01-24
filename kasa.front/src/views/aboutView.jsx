import "./view.css";
import translate from "../translate/fr.json"
import Accordion from "../components/common/accordion";

const AboutView = () => {
  return (
    <>
      <div className='homeJumbotron aboutJumbotron'>
        <div className="homeBackground" />
        <img className='homeImg auboutImg' src="/images/aboutBackground.png" alt="aboutBackground" />
      </div>

      <Accordion title={translate.about.reliability.title} content={translate.about.reliability.body} />
      <Accordion title={translate.about.respect.title} content={translate.about.respect.body} />
      <Accordion title={translate.about.service.title} content={translate.about.service.body} />
      <Accordion title={translate.about.security.title} content={translate.about.security.body} />
    </>
  )
}

export default AboutView