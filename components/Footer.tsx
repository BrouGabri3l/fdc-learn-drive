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
      <article className="flex justify-around py-16 items-stretch  divide-x-2 divide-red-500">
        <section className="flex flex-col text-primary-gray-dark gap-4">
          <h4 className="font-black font-nexaSlab">Fale Conosco</h4>
          <a href="tel:0800 941 9200">0800 941 9200</a>
          <a href="mailto:atendimento@fdc.org.br">atendimento@fdc.org.br</a>
        </section>
        <div className="py-8 flex justify-center">
          <div className="flex h-8 gap-4">
            <img src={Message.src} alt="" />
            <img src={Linkedin.src} alt="" />
            <img src={Instagram.src} alt="" />
            <img src={Youtube.src} alt="" />
            <img src={Facebook.src} alt="" />
            <img src={Twitter.src} alt="" />
            <img src={Spotify.src} alt="" />
          </div>
        </div>
        <div className="flex gap-6 items-center">
          <h3 className="font-nexaSlab text-primary-gray-dark font-black max-w-min">
            Ranking e Certificações
          </h3>
          <div className="flex gap-6 items-center justify-around">
            <img src={FTImage.src} alt="" className="h-14" />
            <img src={MBA.src} alt="" className="h-10" />
            <img src={EquisAccredited.src} alt="" className="h-16" />
          </div>
        </div>
      </article>
    </footer>
  );
};
export default Footer;
