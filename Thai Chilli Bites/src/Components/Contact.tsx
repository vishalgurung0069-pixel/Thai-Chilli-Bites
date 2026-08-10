import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  FiClock,
  FiMapPin,
  FiPhone,
} from "react-icons/fi";

import mapImage from "../assets/map.png";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const detailsRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headingRef.current, {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      });

      gsap.from(detailsRef.current, {
        opacity: 0,
        x: -80,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });

      gsap.from(mapRef.current, {
        opacity: 0,
        x: 80,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="contact"
      className="section contact-section"
      ref={sectionRef}
    >
      <div
        className="section-heading contact-heading"
        ref={headingRef}
      >
        <span className="eyebrow">
          CONTACT US
        </span>

        <h2>Find us in Northmead</h2>
      </div>

      <div className="contact-grid">
        <div
          className="contact-details"
          ref={detailsRef}
        >
          <div className="contact-item">
            <FiMapPin />

            <div>
              <h3>Address</h3>

              <p>
                Shop G3, 2-6 Campbell St
                <br />
                Northmead NSW 2152
              </p>
            </div>
          </div>

          <div className="contact-item">
            <FiPhone />

            <div>
              <h3>Phone</h3>

              <p>
                (02) 9683 7773
              </p>
            </div>
          </div>

          <div className="contact-item">
            <FiClock />

            <div>
              <h3>Time</h3>

              <p>
                Lunch: Tues - Fri:
                11:00am to 2:30pm
              </p>

              <p>
                Dinner: Tues - Sun:
                5pm to 9:30pm
              </p>

              <p>
                We deliver within 5km of
                our Northmead venue.
              </p>
            </div>
          </div>
        </div>

      <div
  className="map-wrap"
  ref={mapRef}
>
  <a
    href="https://maps.app.goo.gl/Yv4nQ7tJKsUrtKnx9"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Open Thai Chilli Bites location in Google Maps"
  >
    <img
      src={mapImage}
      alt="Map showing Thai Chilli Bites in Northmead"
    />
  </a>
</div>
      </div>
    </section>
  );
}