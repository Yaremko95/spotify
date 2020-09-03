import React from "react";
import ReactDOM from "react-dom";
import { Jumbotron, Container } from "react-bootstrap";
import { useSpring, animated } from "react-spring";
import FiltersNav from "./FiltersNav";

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`;
const trans2 = (x, y) => `translate3d(${x / 8 + 35}px,${y / 8 - 230}px,0)`;
const trans3 = (x, y) => `translate3d(${x / 6 - 250}px,${y / 6 - 200}px,0)`;
const trans4 = (x, y) => `translate3d(${x / 3.5}px,${y / 3.5}px,0)`;

function Jumbotron1() {
  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 },
  }));
  return (
    <div
      class="container"
      onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
    >
      <animated.div
        class="card1"
        style={{ transform: props.xy.interpolate(trans1) }}
      >
        {" "}
        <Jumbotron fluid className="p-2">
          <Container>
            <div className="d-flex m-0">
              <img
                style={{ maxHeight: "30em" }}
                className="img-fluid"
                src="https://www.visitflanders.com/en/binaries/Cover-LR_crop1400x560_tcm13-141348.jpg"
                alt="music"
              />
            </div>
          </Container>
        </Jumbotron>
      </animated.div>
      <FiltersNav
        collections={["SEARCH", "SEARCH", "SEARCH", "SEARCH", "SEARCH"]}
      />
    </div>
  );
}
export default Jumbotron1;
