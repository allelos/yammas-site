export const testimonials = `
  section {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    background: #e6af4b;
    padding-top: 4rem;
    padding-bottom: 4rem;
  }
  .testimonials-title {
    flex: 1 100%;
    font-weight: 700;
    font-size: 22px;
    color: white;
    margin-bottom: 2rem;
  }
  .testimonials-title > * {
    text-align: center;
  }
  .testimonials-grid {
    display: flex;
    flex: 1;
    flex-flow: column wrap;
    align-items: center;
    margin-bottom: 2rem;
  }
  .testimonials-grid--row {
    display: flex;
    width: 90%;
    flex: 1 auto;
    flex-flow: row nowrap;
  }
  .testimonials-grid--col {
    display: flex;
    flex: 1;
  }
  .img-container {
    display: flex;
    position: relative;
    overflow: hidden;
    flex: 1;
    align-items: center;
    justify-content: center;
    padding: 64px;
    cursor: pointer;
    transition: all 125ms ease-in-out;
  }
  .img-container:hover {
    transform: scale(1.1);
    box-shadow: 2px 4px 10px 10px rgba(0,0,0,0.125);
    z-index: 1;
  }
  .img-container > a {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 999;
  }
  .testimonials-img {
    width: 100%;
    height: auto;
  }
  .star {
    background: #0c1f35;
  }
  .startupper,
  .maxmag,
  .ka-business,
  .karfitsa {
    background: #f7f7f7;
  }
  .startup {
    background: #eeeeee;
  }
  .lifo {
    background: #E0001A;
  }
  .platform {
    background: #f22a37;
  }
  .nova {
    background: #1d1f5a;
  }
  .protothema {
    background: #f27600;
    padding: 32px;
  }
  .newmoney {
    background: #0b1344;
    padding: 32px;
  }
  .insider {
    background: #01579b;
  }
  .ka-business {
    padding: 32px;
  }
`