import React, { useState, useEffect } from "react";

const ScrollSpy = ({ sectionIds, activeClass = "is-current", closeMenu }) => {
  const [activeSection, setActiveSection] = useState(
    sectionIds[0].replace("#", "")
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-50% 0px", // Trigger when section is 50% visible
      }
    );

    sectionIds.forEach((id) => {
      const element = document.querySelector(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [sectionIds]);

  const handleClick = (e, id) => {
    e.preventDefault();
    document
      .querySelector(id)
      .scrollIntoView({ behavior: "smooth", block: "center" });
    setActiveSection(id.replace("#", "")); // Set the active section
    closeMenu(); // Close the menu after clicking
  };

  return (
    <>
      {sectionIds.map((id) => (
        <li
          key={id}
          className={activeSection === id.replace("#", "") ? activeClass : ""}
        >
          <a href={id} onClick={(e) => handleClick(e, id)}>
            {id.replace("#", "").charAt(0).toUpperCase() +
              id.slice(2).split("_").join(" ")}
          </a>
        </li>
      ))}
    </>
  );
};

export default ScrollSpy;