import { useState, useEffect } from "react";
export default function Instructors() {
  const [currentContainer, setCurrentContainer] = useState(0);
  const carlMarcel = require("../images/Carl-profile.jpg");
  const carlSean = require("../images/Carl-profile2.jpg");
  const patbb = require("../images/pat-bb.jpg");
  const patHero = require("../images/patHero2.jpg");
  const containerData = [
    {
      title: "Carl Vickery",
      images: [<img src={carlMarcel} />, <img src={carlSean} />],
      paragraphs: [
        "    Carl Lee Vickery began his journey in boxing in 1997 training under Mark Hager. He spent 5 years under Mark’s direction, winning many  amateur title fights. Carl also trained under Larry Willis for a few years. He is very thankful for these two mentors that helped prepare him to be the fighter he is today. Carl’s amateur boxing career is extensive, and he has never stopped training. He still boxes at least 3 times a week. ",

        "Carl started training Brazilian Jiu Jitsu in 2005 with blue belt Mark Fusco. Carl has very fond memories of Mark and is very thankful for his instruction.  At the end of 2005, Carl started training under Sean Wilson, who was Sensei to Black Trunk Martial Arts in Cape Coral, Florida.  Carl spent seven years training under Sean until his passing in June of 2012.  Carl loves Sean very deeply and will forever be grateful for the years he was given with Sean on the mat.",

        "In the fall of 2012, as a brown belt, Carl began training with Fight Sports. There, in December of 2014, he received his blackbelt from Roberto “Cyborg” Abreu.",
        "In February of 2015, Carl and his girlfriend, blackbelt Kristina Youngquist, opened their academy, Vickery Jiu-Jitsu & MMA, in Fort Myers, FL.  Carl is excited to bring the collective wisdom and talent from these many years with his mentors and Jiu-Jitsu family to Vickery Jiu-Jitsu & MMA.",
      ],
    },
    {
      title: "Patrick Moran",
      images: [
        <img style={{ maxWidth: "100%" }} src={patbb} alt="" />,
        <img style={{ maxWidth: "100%" }} src={patHero} alt="" />,
      ],
      paragraphs: [
        "Patrick started training Brazilian Jiu Jitsu in June 2011, and received his black belt from Carl Vickery on March 25th, 2019.",
        "He has learned from some great instructors over the years, and is happy to have a home at Vickery Jiu Jitsu & MMA, where he has trained since 2015.",
        "Pat loves studying and teaching BJJ and is looking forward to seeing you in his daytime class.",
      ],
    },
    // Add more container data as needed
  ];

  const showNextContainer = () => {
    setCurrentContainer((prev) => (prev + 1) % containerData.length);
  };

  const showPrevContainer = () => {
    setCurrentContainer(
      (prev) => (prev - 1 + containerData.length) % containerData.length
    );
  };

  return (
    <main>
      <section
        className="instructor-container"
        style={{
          display: currentContainer === 0 ? "block" : "none",
        }}
      >
        <a
          className="prev"
          onClick={showPrevContainer}
          style={{ fontSize: "1.2rem", top: "3.2rem" }}
        >
          &#10094;
        </a>
        <h1 className="instructor-title">Carl Vickery</h1>
        <a
          className="next"
          onClick={showNextContainer}
          style={{ fontSize: "1.2rem", top: "3.2rem" }}
        >
          &#10095;
        </a>
        <div className="instructor-body">
          <div className="instruct-left">
            {containerData[0].paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <div className="instruct-right">
            {containerData[0].images.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section
        className="instructor-container"
        style={{
          display: currentContainer === 1 ? "block" : "none",
        }}
      >
        <a
          className="prev"
          style={{ fontSize: "1.2rem", top: "3.2rem" }}
          onClick={showPrevContainer}
        >
          &#10094;
        </a>
        <h1 className="instructor-title">{containerData[1].title}</h1>{" "}
        <a
          className="next"
          style={{ fontSize: "1.2rem", top: "3.2rem" }}
          onClick={showNextContainer}
        >
          &#10095;
        </a>
        <div className="instructor-body">
          <div className="instruct-left">
            {containerData[1].paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <div className="instruct-right">
            {containerData[1].images.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>
      {/* Add more divs for additional containers */}
    </main>
  );
}
