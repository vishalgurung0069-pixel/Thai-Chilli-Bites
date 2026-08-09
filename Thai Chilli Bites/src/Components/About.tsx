import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import aboutImage from "../assets/About.png";



gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(imageRef.current, {
        opacity: 0,
        x: -80,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      });

      gsap.from(contentRef.current, {
        opacity: 0,
        x: 80,
        duration: 1,
        delay: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="about-section" id="about" ref={sectionRef}>
      <div className="about-container">

        {/* LEFT - IMAGE */}
        <div className="about-image-wrapper">
          <img
            ref={imageRef}
            src={aboutImage}
            alt="Thai Chilli Bites food"
            className="about-image"
          />
        </div>

        {/* RIGHT - CONTENT */}
        <div className="about-copy" ref={contentRef}>
          <span className="eyebrow">
            ABOUT US
          </span>

          <h2>
            Thai Chilli Bites
          </h2>

          <p>
            At our restaurant, every dish is crafted with passion using
            the freshest, highest-quality ingredients, carefully selected
            to deliver exceptional taste in every bite. Our experienced
            chefs combine authentic recipes with modern culinary
            techniques to create meals that are rich in flavor,
            beautifully presented, and prepared fresh to order.
          </p>

          <p>
            Whether you're joining us for a quick lunch, enjoying a
            relaxing family dinner, or celebrating a special occasion,
            we're dedicated to making every visit unforgettable. We take
            pride in offering exceptional food, friendly service, and a
            warm, welcoming atmosphere where guests can gather, connect,
            and enjoy great moments together.
          </p>
        </div>

      </div>
    </section>
  );
}