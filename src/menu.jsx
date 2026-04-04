import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './menu.css';
import {
  fadeUpVariants,
  staggerContainerVariants,
  staggerItemVariants,
  hoverScale,
  hoverLift,
  viewportSettings
} from './components/animations';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  // Professional Menu Data from Cafe Seema with Images
  const menuData = [
    {
      category: "Pasta",
      eyebrow: "Italian inspired",
      items: [
        { 
          id: "p1",
          name: "Chicken Pasta", 
          price: "1000", 
          image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=400&q=80"
        },
        { 
          id: "p2",
          name: "Vegetable Pasta", 
          price: "850", 
          image: "https://images.unsplash.com/photo-1473093295203-cad00df16e50?auto=format&fit=crop&w=400&q=80"
        },
        { 
          id: "p3",
          name: "Prawns Pasta", 
          price: "1300", 
          image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=400&q=80"
        },
        { 
          id: "p4",
          name: "Garlic Butter Pasta", 
          price: "850", 
          image: "https://images.unsplash.com/photo-1645112411341-6c4ee32510d8?auto=format&fit=crop&w=400&q=80"
        },
        { 
          id: "p5",
          name: "Seafood Pasta", 
          price: "1400", 
          image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?auto=format&fit=crop&w=400&q=80"
        }
      ]
    },
    {
      category: "Burgers",
      eyebrow: "Gourmet grilled",
      items: [
        { 
          id: "b1",
          name: "Cheese Chicken Burger", 
          price: "800", 
          image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=400&q=80"
        },
        { 
          id: "b2",
          name: "Chicken Burger", 
          price: "700", 
          image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=400&q=80"
        },
        { 
          id: "b3",
          name: "Beef Burger", 
          price: "950", 
          image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=400&q=80"
        },
        { 
          id: "b4",
          name: "Veggie Burger", 
          price: "750", 
          image: "https://images.unsplash.com/photo-1520072959219-c595dc870360?auto=format&fit=crop&w=400&q=80"
        },
        { 
          id: "b5",
          name: "Fish Burger", 
          price: "850", 
          image: "https://images.unsplash.com/photo-1610440042657-612c34d95e9f?auto=format&fit=crop&w=400&q=80"
        }
      ]
    },
    {
      category: "Fried Rice",
      eyebrow: "Asian classics",
      items: [
        { 
          id: "f1",
          name: "Chicken Fried Rice", 
          price: "1000", 
          image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=400&q=80"
        },
        { 
          id: "f2",
          name: "Prawns Fried Rice", 
          price: "1300", 
          image: "https://images.unsplash.com/photo-1589984662646-e7b2e4962f18?auto=format&fit=crop&w=400&q=80"
        },
        { 
          id: "f3",
          name: "Vegetable Fried Rice", 
          price: "850", 
          image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=400&q=80"
        },
        { 
          id: "f4",
          name: "Egg Fried Rice", 
          price: "800", 
          image: "https://images.unsplash.com/photo-1609501676725-7186f017a4b0?auto=format&fit=crop&w=400&q=80"
        },
        { 
          id: "f5",
          name: "Mixed Seafood Rice", 
          price: "1500", 
          image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80"
        }
      ]
    },
    {
      category: "Kottu",
      eyebrow: "Sri Lankan specialty",
      items: [
        { 
          id: "k1",
          name: "Chicken Kottu", 
          price: "1000", 
          image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=400&q=80"
        },
        { 
          id: "k2",
          name: "Cheese Kottu", 
          price: "1100", 
          image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=400&q=80"
        },
        { 
          id: "k3",
          name: "Beef Kottu", 
          price: "1200", 
          image: "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?auto=format&fit=crop&w=400&q=80"
        },
        { 
          id: "k4",
          name: "Vegetable Kottu", 
          price: "850", 
          image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80"
        },
        { 
          id: "k5",
          name: "Egg Kottu", 
          price: "900", 
          image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=400&q=80"
        }
      ]
    },
    {
      category: "Sides",
      eyebrow: "Perfect accompaniments",
      items: [
        { 
          id: "s1",
          name: "French Fries", 
          price: "500", 
          image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=400&q=80"
        },
        { 
          id: "s2",
          name: "Cheese Fries", 
          price: "700", 
          image: "https://images.unsplash.com/photo-1630384478776-1be6e96e3795?auto=format&fit=crop&w=400&q=80"
        },
        { 
          id: "s3",
          name: "Spicy Wings", 
          price: "1000", 
          image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=400&q=80"
        },
        { 
          id: "s4",
          name: "Onion Rings", 
          price: "600", 
          image: "https://images.unsplash.com/photo-1639024471694-fca29a246b10?auto=format&fit=crop&w=400&q=80"
        },
        { 
          id: "s5",
          name: "Garlic Bread", 
          price: "450", 
          image: "https://images.unsplash.com/photo-1619535860434-ba1d8fa12536?auto=format&fit=crop&w=400&q=80"
        }
      ]
    }
  ];

  // Get all categories for navigation
  const categories = ['all', ...menuData.map(section => section.category.toLowerCase())];

  // Scroll to section when category is clicked
  const scrollToCategory = (category) => {
    setActiveCategory(category);
    if (category === 'all') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(`section-${category}`);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Reveal animation on scroll
  useEffect(() => {
    // Framer Motion handles animations, no need for IntersectionObserver
  }, []);

  const handleAddToCart = (name, price) => {
    alert(`${name} added to cart! Price: Rs. ${price}`);
  };

  return (
    <motion.div 
      className="menu-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {/* Minimalist Hero Header */}
      <motion.header 
        className="menu-hero"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="menu-hero__content">
          <motion.div 
            className="menu-hero__badge"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            EST. 2019 • KANDY, SRI LANKA
          </motion.div>
          <motion.h1 
            className="menu-hero__title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.05 }}
          >
            Our <span className="menu-hero__accent">Menu</span>
          </motion.h1>
          <motion.p 
            className="menu-hero__description"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            Authentic Sri Lankan flavors and healthy international plates — crafted with care, 
            served with warmth. Every dish tells a story of tradition and quality.
          </motion.p>
          
          {/* Category Navigation Pills */}
          <nav className="menu-hero__nav" aria-label="Menu categories">
            {categories.map((cat) => (
              <motion.button
                key={cat}
                className={`menu-hero__pill ${activeCategory === cat ? 'menu-hero__pill--active' : ''}`}
                onClick={() => scrollToCategory(cat)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {cat === 'all' ? 'All' : cat.charAt(0).toUpperCase() + cat.slice(1)}
              </motion.button>
            ))}
          </nav>

          {/* Accent Image with Glassmorphism */}
          <motion.div 
            className="menu-hero__accent-image"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80" 
              alt="Signature dish at Seema Café"
            />
            <div className="menu-hero__accent-card">
              <div className="menu-hero__accent-label">Chef's Pick</div>
              <div className="menu-hero__accent-text">Seasonal specials weekly</div>
            </div>
          </motion.div>
        </div>
      </motion.header>

      {/* Menu Sections */}
      <main className="menu-container">
        {menuData.map((section) => (
          <motion.section 
            key={section.category}
            id={`section-${section.category.toLowerCase()}`}
            className="menu-section"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeUpVariants}
          >
            {/* Section Header */}
            <motion.header 
              className="section-header"
              variants={fadeUpVariants}
            >
              <p className="section-header__eyebrow">{section.eyebrow}</p>
              <h2 className="section-header__title">
                {section.category}
              </h2>
              <div className="section-header__divider">
                <span className="section-header__line"></span>
                <span className="section-header__dot"></span>
                <span className="section-header__line"></span>
              </div>
            </motion.header>

            {/* Items Grid */}
            <motion.div 
              className="items-grid"
              variants={staggerContainerVariants}
            >
              {section.items.map((item) => (
                <motion.article 
                  key={item.id} 
                  className="menu-item-card"
                  variants={staggerItemVariants}
                  whileHover={hoverScale}
                >
                  {/* Card Image */}
                  <div className="menu-item-card__image-wrapper">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="menu-item-card__image"
                      loading="lazy"
                    />
                  </div>

                  {/* Card Content */}
                  <div className="menu-item-card__content">
                    <h3 className="menu-item-card__name">{item.name}</h3>
                    <div className="menu-item-card__divider"></div>
                    
                    <div className="menu-item-card__footer">
                      <span className="menu-item-card__price">Rs. {item.price}</span>
                      <motion.button 
                        className="menu-item-card__btn"
                        onClick={() => handleAddToCart(item.name, item.price)}
                        aria-label={`Add ${item.name} to cart`}
                        whileHover={hoverLift}
                        whileTap={{ scale: 0.95 }}
                      >
                        Add
                        <span className="menu-item-card__btn-icon" aria-hidden="true">+</span>
                      </motion.button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </motion.section>
        ))}
      </main>
    </motion.div>
  );
};

export default Menu;
