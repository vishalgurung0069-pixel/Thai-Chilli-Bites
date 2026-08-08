import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


import noodle from "../assets/noodle.png";
import duck from "../assets/duck.png";
import curry from "../assets/curry.png";

gsap.registerPlugin(ScrollTrigger);

interface Dish {
  title: string;
  image: string;
  description: string;
}

const dishes: Dish[] = [
  {
    title: "Noodle Dishes",
    image: noodle,
    description:
      "We offer an extensive rice and noodle selection and are happy to cook to your requirements.",
  },
  {
    title: "Signature Dishes",
    image: duck,
    description:
      "Try our signature dishes like the popular Duck Plam Sauce or Baramundi Garlic and Ginger Sauce.",
  },
  {
    title: "Curries & Stir Fried",
    image: curry,
    description:
      "A full selection of Thai curries and wok-fried stir fried dishes.",
  },
];

export default function PopularDishes() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headingRef.current, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      });

      const cards = cardsRef.current?.querySelectorAll(".dish-card");

      if (cards) {
        gsap.from(cards, {
          opacity: 0,
          y: 80,
          scale: 0.9,
          duration: 0.8,
          stagger: 0.2,
          ease: "back.out(1.4)",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 80%",
            once: true,
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="menu"
      className="section menu-section"
      ref={sectionRef}
    >
      <div
        className="section-heading"
        ref={headingRef}
      >
        <span className="eyebrow">
          EXCITE YOUR TASTE BUD
        </span>

        <h2>Our Popular Dish</h2>
      </div>

      <div
        className="dish-grid"
        ref={cardsRef}
      >
        {dishes.map((dish) => (
          <article
            className="dish-card"
            key={dish.title}
          >
            <div className="dish-image">
              <img
                src={dish.image}
                alt={dish.title}
              />
            </div>

            <div className="dish-body">
              <h3>{dish.title}</h3>

              <p>{dish.description}</p>

              <a href="#contact">
                SEE THE DISHES
                <span>→</span>
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}