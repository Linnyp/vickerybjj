export default function Instructors() {
  const carlMarcel = require("../images/Carl-profile.jpg");
  const carlSean = require("../images/Carl-profile2.jpg");
  const patbb = require("../images/pat-bb.jpg");

  return (
    <div style={{ color: "white" }}>
      <section className="carl-profile">
        <a className="prev">&#10094;</a>
        <h1 style={{ border: "solid", marginBottom: "1.5rem" }}>
          CARL VICKERY
        </h1>
        <a className="next">&#10095;</a>
        <p>
          Carl Lee Vickery began his journey in boxing in 1997 training under
          Mark Hager. He spent 5 years under Mark’s direction, winning many
          amateur title fights. <br />
          Carl also trained under Larry Willis for a few years. He is very
          thankful for these two mentors that helped prepare him to be the
          fighter he is today. Carl’s amateur boxing career is extensive, and he
          has never stopped training. He still boxes at least 3 times a week.
        </p>
        <img src={carlSean} alt="" />
        <p>
          Carl started training Brazilian Jiu Jitsu in 2005 with blue belt Mark
          Fusco. He has very fond memories of Mark and is very thankful for his
          instruction. <br />
          At the end of 2005, Carl started training under Sean Wilson, who was
          Sensei to Black Trunk Martial Arts in Cape Coral, Florida. <br />
          He spent seven years training under Sean until his passing in June of
          2012. Carl loves Sean very deeply and will forever be grateful for the
          years he was given with Sean on the mat.
        </p>
        <img src={carlMarcel} alt="" />;
        <p>
          In the fall of 2012, as a brown belt, Carl began training with Fight
          Sports. There, in December of 2014, he received his blackbelt from
          Roberto “Cyborg” Abreu.
        </p>
        <p>
          In February of 2015, Carl and his girlfriend, brown belt Kristina
          Youngquist, opened their academy, Vickery Jiu-Jitsu & MMA, in Fort
          Myers, FL. Carl is excited to bring the collective wisdom and talent
          from these many years with his mentors and Jiu-Jitsu family to Vickery
          Jiu-Jitsu & MMA.
        </p>
      </section>

      <section className="pat-profile">
        <h1>Patrick Moran</h1>
        <img src={patbb} alt="" />
        <p>
          Patrick started training Brazilian Jiu Jitsu in June 2011, and
          received his black belt from Carl Vickery on March 25th, 2019.
        </p>
        <p>
          He has learned from some great instructors over the years, and is
          happy to have a home at Vickery Jiu Jitsu & MMA, where he has trained
          since 2015.
        </p>
        <p>
          Pat loves studying and teaching BJJ and is looking forward to seeing
          you in his daytime class.
        </p>
      </section>
    </div>
  );
}
