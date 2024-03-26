'use client'
import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Products = () => {
  useEffect(() => {
    // Get all panels
    const panels = document.querySelectorAll(".panel");

    // Loop through each panel
    panels.forEach((panel, index) => {
      // Create a timeline for each panel
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: panel,
          start: "top center",
          toggleActions: "play none none reverse",
        },
      });

      // Animate the panel's position
      timeline.fromTo(
        panel,
        { xPercent: 100 },
        { xPercent: 0, duration: 1, ease: "power2.out" }
      );
    });
  }, []);

  return (
    <div className="container">
      <div className="description panel blue">
        <div>
          <h1>Horizontal snapping sections (simple)</h1>
          <p>
            Scroll vertically to scrub the horizontal animation. It also
            dynamically snaps to the sections in an organic way based on the
            velocity. The snapping occurs based on the natural ending position
            after momentum is applied, not a simplistic "wherever it is when
            the user stops".
          </p>
          <div className="scroll-down">
            Scroll down<div className="arrow"></div>
          </div>
        </div>
      </div>

      <div className="panel red">
        <img
          src="https://assets-global.website-files.com/637404ee09bc310b8286e675/6452e6fd4f4e416745f2a454_20230307_AUTHORNE_CAMPAIGN_14648%20copy.jpg"
          alt="Image 1"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="panel orange">
        <img
          src="https://assets-global.website-files.com/637404ee09bc310b8286e675/6452e6fd4f4e416745f2a454_20230307_AUTHORNE_CAMPAIGN_14648%20copy.jpg"
          alt="Image 2"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="panel purple">
        <img
          src="https://assets-global.website-files.com/637404ee09bc310b8286e675/6452e6fd4f4e416745f2a454_20230307_AUTHORNE_CAMPAIGN_14648%20copy.jpg"
          alt="Image 3"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="panel green">
        <img
          src="https://assets-global.website-files.com/637404ee09bc310b8286e675/6452e6fd4f4e416745f2a454_20230307_AUTHORNE_CAMPAIGN_14648%20copy.jpg"
          alt="Image 4"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="panel gray">
        <img
          src="https://assets-global.website-files.com/637404ee09bc310b8286e675/6452e6fd4f4e416745f2a454_20230307_AUTHORNE_CAMPAIGN_14648%20copy.jpg"
          alt="Image 5"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Products;
