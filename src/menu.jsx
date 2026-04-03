import React from 'react';
import './menu.css';

const Menu = () => {

  // Professional Menu Data from Cafe Seema with Images - Extended
  const menuData = [
    {
      category: "Pasta",
      items: [
        { 
          id: "p1",
          name: "Chicken Pasta", 
          price: "900–1200", 
          description: "Creamy or tomato-based pasta with tender chicken",
          image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=400&q=80"
        },
        { 
          id: "p2",
          name: "Vegetable Pasta", 
          price: "800–1000", 
          description: "Mixed vegetables pasta with aromatic herbs",
          image: "https://images.unsplash.com/photo-1473093295203-cad00df16e50?auto=format&fit=crop&w=400&q=80"
        },
        { 
          id: "p3",
          name: "Prawns Pasta", 
          price: "1100–1400", 
          description: "Succulent prawns pasta in delicate sauce",
          image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=400&q=80"
        },
        { 
          id: "p4",
          name: "Garlic Butter Pasta", 
          price: "750–950", 
          description: "Silky pasta tossed in aromatic garlic butter",
          image: "https://images.unsplash.com/photo-1645112411341-6c4ee32510d8?auto=format&fit=crop&w=400&q=80"
        }
      ]
    },
    {
      category: "Burgers",
      items: [
        { 
          id: "b1",
          name: "Cheese Chicken Burger", 
          price: "700–900", 
          description: "Crispy chicken burger with melted cheese",
          image: "https://images.unsplash.com/photo-1562547256-b4b7b6b7b2b4?auto=format&fit=crop&w=400&q=80"
        },
        { 
          id: "b2",
          name: "Chicken Burger", 
          price: "600–800", 
          description: "Classic grilled chicken burger with fresh toppings",
          image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=400&q=80"
        },
        { 
          id: "b3",
          name: "Beef Burger", 
          price: "850–1050", 
          description: "Juicy beef patty with crispy bacon and cheddar",
          image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=400&q=80"
        },
        { 
          id: "b4",
          name: "Veggie Burger", 
          price: "650–850", 
          description: "Plant-based patty with avocado and fresh greens",
          image: "https://images.unsplash.com/photo-1520072959219-c595dc870360?auto=format&fit=crop&w=400&q=80"
        }
      ]
    },
    {
      category: "Fried Rice",
      items: [
        { 
          id: "f1",
          name: "Chicken Fried Rice", 
          price: "900–1200", 
          description: "Fragrant rice stir-fried with chicken and veggies",
          image: "https://images.unsplash.com/photo-1645112411341-6c4ee32510d8?auto=format&fit=crop&w=400&q=80"
        },
        { 
          id: "f2",
          name: "Prawns Fried Rice", 
          price: "1100–1400", 
          description: "Premium fried rice with succulent prawns",
          image: "https://images.unsplash.com/photo-1609501676725-7186f017a4b0?auto=format&fit=crop&w=400&q=80"
        },
        { 
          id: "f3",
          name: "Vegetable Fried Rice", 
          price: "750–950", 
          description: "Colorful mixed vegetables with aromatic seasonings",
          image: "https://images.unsplash.com/photo-1555661781-0bff8c896bc7?auto=format&fit=crop&w=400&q=80"
        },
        { 
          id: "f4",
          name: "Egg Fried Rice", 
          price: "700–900", 
          description: "Classic fried rice with fluffy scrambled eggs",
          image: "https://images.unsplash.com/photo-1609501676725-7186f017a4b0?auto=format&fit=crop&w=400&q=80"
        }
      ]
    },
    {
      category: "Kottu",
      items: [
        { 
          id: "k1",
          name: "Chicken Kottu", 
          price: "800–1200", 
          description: "Sri Lankan chopped roti with spiced chicken",
          image: "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?auto=format&fit=crop&w=400&q=80"
        },
        { 
          id: "k2",
          name: "Cheese Kottu", 
          price: "900–1300", 
          description: "Kottu with melted cheese and mixed vegetables",
          image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=400&q=80"
        },
        { 
          id: "k3",
          name: "Beef Kottu", 
          price: "950–1350", 
          description: "Spiced beef kottu with onions and peppers",
          image: "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?auto=format&fit=crop&w=400&q=80"
        },
        { 
          id: "k4",
          name: "Vegetable Kottu", 
          price: "700–1000", 
          description: "Vegetarian kottu with seasonal fresh vegetables",
          image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80"
        }
      ]
    },
    {
      category: "Sides",
      items: [
        { 
          id: "s1",
          name: "French Fries", 
          price: "400–600", 
          description: "Crispy golden fries with seasoned salt",
          image: "https://images.unsplash.com/photo-1585238341710-4dd0e06a3c6b?auto=format&fit=crop&w=400&q=80"
        },
        { 
          id: "s2",
          name: "Cheese Fries", 
          price: "600–800", 
          description: "French fries topped with melted cheese",
          image: "https://images.unsplash.com/photo-1630384478776-1be6e96e3795?auto=format&fit=crop&w=400&q=80"
        },
        { 
          id: "s3",
          name: "Spicy Wings", 
          price: "850–1100", 
          description: "Crispy fried wings with tangy spicy sauce",
          image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=400&q=80"
        },
        { 
          id: "s4",
          name: "Onion Rings", 
          price: "500–700", 
          description: "Golden fried onion rings with ranch dip",
          image: "https://images.unsplash.com/photo-1639024471694-fca29a246b10?auto=format&fit=crop&w=400&q=80"
        }
      ]
    }
  ];

  const handleAddToCart = (name, price) => {
    alert(`${name} added to cart! Price: Rs. ${price}`);
  };

  return (
    <div className="menu-page professional-theme">
      {/* Hero Section */}
      <div className="menu-hero">
        <div className="menu-hero__content">
          <div className="menu-hero__badge">EST. 2019 • KANDY, SRI LANKA</div>
          <h1 className="menu-hero__title">
            The Heart of <span className="menu-hero__accent">Flavors</span> in Kandy.
          </h1>
          <p className="menu-hero__description">
            A traveler-favorite spot offering a perfect blend of authentic Sri Lankan taste and healthy international options.
          </p>
          <div className="menu-hero__cta">
            <a href="/" className="menu-hero__btn menu-hero__btn--primary" style={{textDecoration: 'none', display: 'inline-block'}}>
              Back to Home
            </a>
          </div>
        </div>
      </div>

      {/* Menu Sections */}
      <div className="menu-container">
        {menuData.map((section, idx) => (
          <section key={idx} className="menu-section">
            <div className="section-header-professional">
              <h2 className="section-title-professional">{section.category}</h2>
              <div className="section-line"></div>
            </div>
            
            <div className="items-grid">
              {section.items.map((item) => (
                <div key={item.id} className="grid-item-card">
                  {/* Circular Image Container */}
                  <div className="image-circle">
                    <img src={item.image} alt={item.name} className="item-image" />
                  </div>

                  {/* Item Info */}
                  <h3 className="grid-item-name">{item.name}</h3>
                  <p className="grid-item-description">{item.description}</p>

                  {/* Price */}
                  <div className="grid-item-price">Rs. {item.price}</div>

                  {/* Add to Cart Button */}
                  <button 
                    className="add-to-cart-btn"
                    onClick={() => handleAddToCart(item.name, item.price)}
                  >
                    ADD TO CART
                  </button>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

export default Menu;
