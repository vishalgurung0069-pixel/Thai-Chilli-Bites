import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  FiFacebook,
  FiInstagram,
  FiMail,
  FiPhone,
} from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".footer-animation", {
        opacity: 0,
        y: 50,
        duration: 0.9,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 90%",
          once: true,
        },
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      className="footer"
      ref={footerRef}
    >
      <div className="quote footer-animation">
        <h2>
          “Fresh flavors, warm moments,
          unforgettable memories.”
        </h2>

        <p>
          “From fresh ingredients to unforgettable
          flavors, we're passionate about creating
          dining experiences that bring people
          together. Join us for great food, warm
          hospitality, and moments worth sharing.”
        </p>

        <a
          className="phone-pill"
          href="tel:+61296837773"
        >
          <FiPhone />
          (02) 9683 7773
        </a>
      </div>

      <div className="footer-links footer-animation">
        <a href="#home">Home</a>

        <a href="#about">About us</a>

        <a href="#menu">Menu</a>

        <a href="#contact">Contact</a>
      </div>

      <div className="socials footer-animation">
        <a href="#" aria-label="Facebook">
          <FiFacebook />
        </a>

        <a href="#" aria-label="Instagram">
          <FiInstagram />
        </a>

        <a
          href="mailto:info@example.com"
          aria-label="Email"
        >
          <FiMail />
        </a>
      </div>

      <div className="copyright footer-animation">
        <span>©</span>
        2026 Thai Chilli Bites.
        All Rights Reserved&nbsp; 
      </div>
    </footer>
  );
}