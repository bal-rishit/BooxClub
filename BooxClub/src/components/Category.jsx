import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import "./Category.css";
import Japan from "../Images/Japan.jpg";
import London from "../Images/London.jpg";
import Norway from "../Images/Norway.jpg";
import Products from '../components/Products';
import { Link } from "react-router-dom";

function Category() {
  const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
  };

  useEffect(() => {
    // Initialize ScrollReveal
    ScrollReveal().reveal(".discover__card", {
      ...scrollRevealOption,
      interval: 500,
    });

    ScrollReveal().reveal(".discover__card__content", {
      ...scrollRevealOption,
      interval: 500,
      delay: 200,
    });
  }, [scrollRevealOption]);
  

  return (
    <section className="discover" id="discover">
      <div className="section__container discover__container">
        <h2 className="section__header">Discover the most engaging study materials</h2>
        <p className="section__subheader">
          Let's introduce you to the world of quality education.
        </p>
        <div className="discover__grid">
          <div className="discover__card">
            <div className="discover__image">
              <img src={Norway} alt="discover" />
            </div>
            <div className="discover__card__content">
              <h4>Beginner</h4>
              <p>For ages 6+</p>

              <Link to={`/Products?proudct.category=product.category1`}>
        
      
              <button className="discover__btn">
                Discover More <i className="ri-arrow-right-line"></i>
              </button>
              </Link>
            </div>
          </div>
          <div className="discover__card">
            <div className="discover__image">
              <img src={London} alt="discover" />
            </div>
            <div className="discover__card__content">
              <h4>Intermediate</h4>
              <p>For ages 9+</p>
              <button className="discover__btn">
                Discover More <i className="ri-arrow-right-line"></i>
              </button>
            </div>
          </div>
          <div className="discover__card">
            <div className="discover__image">
              <img src={Japan} alt="discover" />
            </div>
            <div className="discover__card__content">
              <h4>Advanced</h4>
              <p>For ages 12+</p>
              <button className="discover__btn">
                Discover More <i className="ri-arrow-right-line"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Category;
