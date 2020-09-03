import React from "react";
import { Image, Col, Row } from "react-bootstrap";
import "../../style/Homepage.css";
import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";

const AlbumsCard = (props) => {
  const album = props.album;
  const calc = (x, y) => [
    -(y - window.innerHeight / 2) / 20,
    (x - window.innerWidth / 2) / 20,
    1.1,
  ];
  const trans = (x, y, s) =>
    `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;
  const [propss, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }));
  return (
    <Col xs={1} sm={2} md={4} lg={3} className="my-2">
      <animated.div
        onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
        onMouseLeave={() => set({ xys: [0, 0, 1] })}
        style={{ transform: propss.xys.interpolate(trans) }}
      >
        <Link to={"/playlist/" + album.id}>
          <Image fluid src={album.cover_medium} alt={album.title_short || album.title} />
        </Link>
        <div className="text-center">
          <p className="my-0 h5">{album.title}</p>
          <p className="my-0 h5">{album.artist.name}</p>
        </div>
      </animated.div>
    </Col>
  );
};

export default AlbumsCard;
