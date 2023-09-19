import { useState } from "react";
import "../App.css";

export default function Test() {
  const [toggle, setToggle] = useState(false);
  const [text, setText] = useState("");

  const toggler = () => {
    toggle ? setToggle(false) : setToggle(true);
  };

  const updateText = (event: any) => {
    setText(event.target.value);
  };

  return (
    <div>
      <div className="text-area">
        <h1>Input Bar</h1>
        <input
          type="text"
          onChange={(e) => {
            updateText(e);
          }}
        />
        <button onClick={toggler}>show/hide</button>
      </div>
      <h1>{toggle && text}</h1>

      <section className="columns">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
          possimus repudiandae sunt eligendi tenetur consectetur adipisci iusto
          voluptates optio? Voluptatum atque dignissimos maiores quo
          perspiciatis repellat aliquam vero sapiente voluptates!
        </p>
        <p>
          Sit esse quibusdam cupiditate ipsam adipisci repellat laudantium,
          molestiae praesentium vel blanditiis cum veritatis ipsa consequuntur
          est odit, officiis amet inventore sunt consectetur! Est distinctio ex
          obcaecati aliquid eligendi hic.
        </p>
        <p>
          Cupiditate id rerum impedit dolor quam eveniet est cum quisquam harum
          in, consequuntur totam voluptates, accusamus natus similique repellat
          labore maxime possimus vero excepturi expedita eos animi itaque.
          Corporis, incidunt!
        </p>
        <p>
          Sint at, autem suscipit doloremque quos consequatur soluta officia
          esse numquam amet asperiores cupiditate corporis mollitia, nobis
          tempore quae dolore officiis optio debitis eaque quia tenetur dolor
          alias? Corporis, reprehenderit.
        </p>
      </section>
      <p>
        Modi iste unde sunt quis iusto ea, ipsum dolorum aspernatur id delectus
        soluta architecto totam, non sequi pariatur alias fuga impedit! Odit quo
        ea maxime at aut ad, quisquam totam.
      </p>
      <div className="box"></div>
    </div>
  );
}
