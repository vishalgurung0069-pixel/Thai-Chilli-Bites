import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const welcomeRef = useRef<HTMLParagraphElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      tl.from(welcomeRef.current, {
        opacity: 0,
        y: 40,
        duration: 0.8,
      })
        .from(
          titleRef.current,
          {
            opacity: 0,
            y: 45,
            duration: 0.9,
          },
          "-=0.5"
        )
        .from(
          subtitleRef.current,
          {
            opacity: 0,
            y: 25,
            duration: 0.7,
          },
          "-=0.5"
        )
        .from(
          buttonRef.current,
          {
            opacity: 0,
            scale: 0.8,
            duration: 0.6,
          },
          "-=0.3"
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="home" className="hero" ref={heroRef}>
      <div className="hero-overlay" />

      <div className="hero-content">
        <p ref={welcomeRef} className="hero-welcome">
          Welcome to
        </p>

        <h1 ref={titleRef}>Thai Chilli Bites</h1>

        <p ref={subtitleRef} className="hero-subtitle">
          Bringing People Together Through Food.
        </p>

        <a ref={buttonRef} href="#menu" className="primary-btn">
          View Menu
        </a>
      </div>
    </section>
  );
}