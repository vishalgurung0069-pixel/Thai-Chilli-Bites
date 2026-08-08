import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../assets/logo.png";

const links = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Our Menu", href: "#menu" },
  { label: "Contact us", href: "#contact" },
];

const API_URL = "http://localhost:5000";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [showOrderMessage, setShowOrderMessage] =
    useState<boolean>(false);
  const [checkingOrder, setCheckingOrder] =
    useState<boolean>(false);

  const handleOrderClick = async (): Promise<void> => {
    setCheckingOrder(true);

    try {
      const response = await fetch(
        `${API_URL}/api/orders/status`
      );

      if (!response.ok) {
        throw new Error("Unable to check order status");
      }

      const data: {
        success: boolean;
        ordersOpen: boolean;
        message: string;
      } = await response.json();

      if (!data.ordersOpen) {
        setShowOrderMessage(true);
        return;
      }

      // Orders are open
      window.location.href = "/order";

    } catch (error) {
      console.error("Order status error:", error);

      // If backend is unavailable,
      // show the closed message.
      setShowOrderMessage(true);

    } finally {
      setCheckingOrder(false);
    }
  };

  const closeMenu = (): void => {
    setMenuOpen(false);
  };

  return (
    <>
      

      <nav className="navbar">

  

        <a
          href="#home"
          className="brand"
          onClick={closeMenu}
        >
          <img
            src={logo}
            alt="Thai Chilli Bites"
          />
        </a>


        <div
          className={`nav-links ${
            menuOpen ? "open" : ""
          }`}
        >

          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={closeMenu}
            >
              {link.label}
            </a>
          ))}



          <button
            type="button"
            className="order-btn"
            onClick={handleOrderClick}
            disabled={checkingOrder}
          >
            {checkingOrder
              ? "Checking..."
              : "Order Now"}
          </button>

        </div>


        <button
          type="button"
          className="mobile-toggle"
          onClick={() =>
            setMenuOpen((previous) => !previous)
          }
          aria-label={
            menuOpen
              ? "Close menu"
              : "Open menu"
          }
        >
          {menuOpen ? (
            <FiX />
          ) : (
            <FiMenu />
          )}
        </button>

      </nav>


      {showOrderMessage && (
        <div
          className="order-overlay"
          onClick={() =>
            setShowOrderMessage(false)
          }
        >

          <div
            className="order-message"
            onClick={(event) =>
              event.stopPropagation()
            }
          >


            <button
              type="button"
              className="order-close"
              onClick={() =>
                setShowOrderMessage(false)
              }
              aria-label="Close"
            >
              ×
            </button>


            <h2>
              Orders Currently Closed
            </h2>


            <p>
              We are not taking orders right now.
              Please check back later.
            </p>


            <button
              type="button"
              className="order-ok"
              onClick={() =>
                setShowOrderMessage(false)
              }
            >
              Okay
            </button>

          </div>

        </div>
      )}

    </>
  );
}

export default Navbar;