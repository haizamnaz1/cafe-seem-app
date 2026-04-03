import React from 'react';
import './menu.css';
import menuImage1 from './assets/Menu.png';
import menuBg from './assets/Menu3.png';

const Menu = () => {
  // Single slide narrative lines
  const lines = [
    "Discover the art of Sri Lankan hospitality.",
    "A symphony of spices in every single bite.",
    "Experience flavors that tell our unique story."
  ];

  // Menu Category Cards Data
  const categories = [
    { title: "Signature Coffee", img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=400&q=80" },
    { title: "Buddha Bowls", img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=400&q=80" },
    { title: "Sri Lankan Kottu", img: "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?auto=format&fit=crop&w=400&q=80" },
    { title: "Kebuli Rice", img: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=400&q=80" },
    { title: "Healthy Juices", img: "https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=400&q=80" }
  ];

  // Beverage Cards Data
  const beverages = [
    { title: "Premium Espresso", price: "Rs. 850", img: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&w=400&q=80" },
    { title: "Ceylon Spiced Tea", price: "Rs. 450", img: "https://images.unsplash.com/photo-1594631252845-29fc45865157?auto=format&fit=crop&w=400&q=80" },
    { title: "Tropical Smoothie", price: "Rs. 950", img: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=400&q=80" },
    { title: "Iced Caramel Latte", price: "Rs. 1100", img: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=400&q=80" }
  ];

  // Burger Cards Data
  const burgers = [
    { title: "Classic Seema Beef", price: "Rs. 1450", img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=400&q=80" },
    { title: "Crispy Chicken Zinger", price: "Rs. 1250", img: "https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?auto=format&fit=crop&w=400&q=80" },
    { title: "Spicy Veggie Delight", price: "Rs. 950", img: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=400&q=80" },
    { title: "Double Cheese Monster", price: "Rs. 1850", img: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=400&q=80" }
  ];

  return (
    <div className="menu-page dark-theme">
      {/* Fixed Background - Now using Menu3.png */}
      <div className="menu-parallax-bg" style={{ backgroundImage: `url(${menuBg})` }}></div>

      {/* 1st Section: Sticky Hero */}
      <section className="menu-sticky-hero">
        <div className="menu-image-frame">
          <div className="animation-wrapper">
            <div className="dark-overlay"></div>
            <img src={menuImage1} alt="Hero" className="menu-image animated-zoom" />
            <div className="menu-caption-v2">
              {lines.map((line, idx) => (
                <p key={idx} className={`animated-sentence ${idx === lines.length - 1 ? 'last-sentence' : ''}`}
                   style={{ animationDelay: `${idx * 3}s` }}>
                  {line}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2nd Section: Details */}
      <section className="menu-details-section">
        <div className="container">
          <div className="details-grid">
            <div className="details-item">
              <h3>House Specialties</h3>
              <p>Experience our chef's hand-picked selections, from traditional Cheese Kottu to our aromatic Kebuli Rice.</p>
            </div>
            <div className="details-item">
              <h3>Fresh & Organic</h3>
              <p>We source 90% of our ingredients from local farmers in the Kandy hills, ensuring peak freshness.</p>
            </div>
            <div className="details-item">
              <h3>Dietary Friendly</h3>
              <p>Extensive Vegan, Vegetarian, and Halal-certified options crafted with the same Seema passion.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3rd Section: Categories (White) */}
      <section className="menu-white-section">
        <div className="container">
          <header className="section-header">
            <h1 className="section-title">Menu Categories</h1>
            <div className="section-underline"></div>
          </header>
          <div className="menu-cards-carousel">
            {categories.map((cat, index) => (
              <div key={index} className="menu-category-card">
                <div className="card-img-wrapper"><img src={cat.img} alt={cat.title} /></div>
                <div className="card-info"><h4>{cat.title}</h4></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4th Section: Parallax Spacer */}
      <section className="menu-parallax-spacer"></section>

      {/* 5th Section: Beverages (Dark) */}
      <section className="menu-beverages-section">
        <div className="container">
          <header className="beverages-header">
            <h2 className="beverages-title">Beverages</h2>
            <div className="beverages-underline"></div>
          </header>
          <div className="beverages-grid">
            {beverages.map((bev, index) => (
              <div key={index} className="beverage-card">
                <div className="bev-img-wrapper"><img src={bev.img} alt={bev.title} /></div>
                <div className="bev-info">
                  <h4>{bev.title}</h4>
                  <span className="bev-price">{bev.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6th Section: Burgers (Dark) */}
      <section className="menu-burgers-section">
        <div className="container">
          <header className="beverages-header">
            <h2 className="beverages-title">Burgers</h2>
            <div className="beverages-underline"></div>
          </header>
          <div className="beverages-grid">
            {burgers.map((burger, index) => (
              <div key={index} className="beverage-card">
                <div className="bev-img-wrapper"><img src={burger.img} alt={burger.title} /></div>
                <div className="bev-info">
                  <h4>{burger.title}</h4>
                  <span className="bev-price">{burger.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Menu;
