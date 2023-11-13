import { useState } from "react";

export default function ToTopBtn() {
  const [scroll, setScroll] = useState("");

  const scrollFunc = function () {
    let y = window.scrollY;
    setScroll(y > 350 ? "top-link show" : "top-link hide");
  };

  const scrollToTop = () => {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
      window.requestAnimationFrame(scrollToTop);

      window.scrollTo(0, c - c / 10);
    }
  };
  window.addEventListener("scroll", scrollFunc);
  return (
    <>
      <a
        onClick={(e) => {
          e.preventDefault();
          scrollToTop();
        }}
        className={scroll}
        href=""
        id="js-top"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 6">
          <path d="M12 6H0l6-6z" />
        </svg>
        {/* <span className="screen-reader-text">Back to top</span> */}
      </a>
    </>
  );
}
