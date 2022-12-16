import Message from "/public/Message.png";
import Linkedin from "/public/Linkedin.png";
import Instagram from "/public/Instagram.png";
import Youtube from "/public/Youtube.png";
import Facebook from "/public/Facebook.png";
import Twitter from "/public/Twitter.png";
import Spotify from "/public/Spotify.png";
import EquisAccredited from "/public/EquisAccredited.png";
import FTImage from "/public/FT.png";
import MBA from "/public/MBA.png";

const Footer = () => {
  return (
    <footer className="bg-white">
      <article className="flex justify-around py-16 items-stretch max-lg:flex-col max-lg:items-center max-lg:text-center max-lg:divide-y lg:divide-x divide-secondary-gray-medium">
        <section className="flex flex-col p-8 text-primary-gray-dark gap-4">
          <h4 className="font-black font-nexaSlab">Fale Conosco</h4>
          <a href="tel:0800 941 9200">0800 941 9200</a>
          <a href="mailto:atendimento@fdc.org.br">atendimento@fdc.org.br</a>
        </section>
        <div className="flex items-center justify-end">
          <ul className="p-8 flex items-center gap-4">
            <li> <img src={Message.src} alt="" /></li>
            <li> <img src={Linkedin.src} alt="" /></li>
            <li> <img src={Instagram.src} alt="" /></li>
            <li> <img src={Youtube.src} alt="" /></li>
            <li> <img src={Facebook.src} alt="" /></li>
            <li> <img src={Twitter.src} alt="" /></li>
            <li> <img src={Spotify.src} alt="" /></li>
          </ul>
        </div>
        <div className="flex p-8 gap-6 items-center max-lg:flex-col">
          <h3 className="font-nexaSlab text-primary-gray-dark font-black max-w-min">
            Ranking e Certificações
          </h3>
          <ul className="flex gap-6 items-center max-lg:flex-col justify-around">
            <li><img src={FTImage.src} alt=""  /></li>
            <li><img src={MBA.src} alt="" /></li>
            <li><img src={EquisAccredited.src} alt=""  /></li>
          </ul>
        </div>
      </article>
    </footer>
  );
};
export default Footer;
