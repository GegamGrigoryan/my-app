import React from "react";

let bannerText = "Оптовый";
let bannerTetxtBR = "\nонлайн-каталог"
let bannerSloganTittle = 'Более 13 лет'
let bannerSlogan = 'помогаем поставщикам и оптовым покупателям находить друг друга'

const Banner = () => {
  return (
    <>
    <div className="banner-container">
    <article className="banner-wrp">
        <h1 className="banner-tittle">
          {bannerText}<br />
          <span className="banner-tittle-text">{bannerTetxtBR}</span>
        </h1>
        <span className="banner-text">  
          {bannerSloganTittle}
        <p>{bannerSlogan}</p>
        </span>
      
      </article>
    </div>

    </>
  );
};
export default Banner;
