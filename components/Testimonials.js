import { testimonials } from './styles';

const Testimonials = () => (
  <section>
    <div className="testimonials-title">
      <h1>Yammas, λένε . . .</h1>
    </div>

    <div className="testimonials-grid">
      <div className="testimonials-grid--row">
        <div className="testimonials-grid--col">
          <div className="img-container star">
            <a target="_blank" href="https://www.youtube.com/watch?v=y_Hc7Fm6Ymc&feature=youtu.be" />
            <img className="testimonials-img" src="http://www.star.gr/public/assets/images/logo.png" />
          </div>
        </div>
        <div className="testimonials-grid--col">
          <div className="img-container startupper">
            <a target="_blank" href="http://startupper.gr/yammas-gr-%CE%B1%CF%80%CF%8C-%CE%B5%CE%BD%CE%B1-%CE%BA%CE%AD%CF%81%CE%B1%CF%83%CE%BC%CE%B1-%CF%83%CE%B5-%CE%BC%CE%B9%CE%B1-startup/" />
            <img className="testimonials-img" src="https://startupper.gr/wp-content/uploads/2014/06/logo.png" />
          </div>
        </div>
        <div className="testimonials-grid--col">
          <div className="img-container startup">
            <a target="_blank" href="http://www.startup.gr/index.php?about=89&id=5879" />
            <img className="testimonials-img" src="https://www.startup.gr/images/initial.png" />
          </div>
        </div>
        <div className="testimonials-grid--col">
          <div className="img-container lifo">
            <a target="_blank" href="http://www.lifo.gr/print/foni_laou/113277" />
            <img className="testimonials-img" src="http://www.lifo.gr/img/lifo_tmlogo.png" />
          </div>
        </div>
      </div>
      <div className="testimonials-grid--row">
        <div className="testimonials-grid--col">
          <div className="img-container platform">
            <a target="_blank" href="http://www.platform.gr/life/prosopa/70382-panos-paravatos-neoi-pou-epixeiroyn-oi-epoxes-exoun-allaksei-giati-na-min-allaksei-kai-o-tropos-kerasmatos" />
            <img className="testimonials-img" src="http://www.platform.gr/templates/theme2073/images/platform_arnitiko4.png" />
          </div>
        </div>
        <div className="testimonials-grid--col">
          <div className="img-container ka-business">
            <a target="_blank" href="http://www.ka-business.gr/pages/innovation/13948/o-sygxronos-kai-o-kainotomikos-tropos-kerasmatos" />
            <img className="testimonials-img" src="http://www.ka-business.gr/resources/images/logo.png" />
          </div>
        </div>
        <div className="testimonials-grid--col">
          <div className="img-container maxmag">
            <a target="_blank" href="http://www.maxmag.gr/synenteukseis/yammas/" />
            <img className="testimonials-img" src="http://www.maxmag.gr/wp-content/uploads/2015/06/maxmag_white.png" />
          </div>
        </div>
        <div className="testimonials-grid--col">
          <div className="img-container karfitsa">
            <a target="_blank" href="http://www.karfitsa.gr/2017/02/14/%CE%98%CE%AD%CE%BC%CE%B1-karfitsa-%CE%97-%CE%B5%CF%86%CE%B1%CF%81%CE%BC%CE%BF%CE%B3%CE%AE-%CF%80%CE%BF%CF%85-%CE%BA%CE%B5%CF%81%CE%BD%CE%AC-%CF%83%CF%86%CE%B7%CE%BD%CE%AC%CE%BA%CE%B9%CE%B1-%CE%BA/" />
            <img className="testimonials-img" src="http://www.karfitsa.gr/wp-content/uploads/2016/11/logo1.png" />
          </div>
        </div>
      </div>
      <div className="testimonials-grid--row">
        <div className="testimonials-grid--col">
          <div className="img-container nova">
            <a target="_blank" href="https://vimeo.com/216833580/43180bb155" />
            <img className="testimonials-img" src="http://www.nova.gr/Themes/1/Default/Media/logo.png" />
          </div>
        </div>
        <div className="testimonials-grid--col">
          <div className="img-container protothema">
            <a target="_blank" href="http://www.protothema.gr/city-stories/article/679611/kerasmata-ex-apostaseos/" />
            <img className="testimonials-img" src="http://www.protothema.gr/Themes/1/Default/Media/logo.png" />
          </div>
        </div>
        <div className="testimonials-grid--col">
          <div className="img-container newmoney">
            <a target="_blank" href="http://www.newmoney.gr/new-business-wave/324609-panos-parabatos-yammas-to-kerasma-stin-psifiaki-epoxi" />
            <img className="testimonials-img" src="http://www.newmoney.gr/templates/gk_news2/images/style1/nm_logo_n1new_large.png" />
          </div>
        </div>
        <div className="testimonials-grid--col">
          <div className="img-container insider">
            <a target="_blank" href="http://www.insider.gr/epiheiriseis/tehnologia/46096/oi-startups-poy-theloyn-na-allaxoyn-pos-plironoyme" />
            <img className="testimonials-img" src="http://www.insider.gr/sites/default/files/insider_logo.png" />
          </div>
        </div>
      </div>
    </div>
    <style jsx>{testimonials}</style>
  </section>
);

export default Testimonials;
