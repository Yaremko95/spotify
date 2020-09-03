import React from "react";
import { Image, Col, Row } from "react-bootstrap";
import "../../style/Homepage.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";

const TracksCard = (props) => {
  const [showMore, setShowMore] = useState(false);
  const track = props.track;
  return (
    <Col xs={1} sm={2} md={4} lg={2} className="my-2">
      <Image
        onClick={() => {
          setShowMore(!showMore);
        }}
        fluid
        src={track.album.cover_medium}
        alt={track.title}
      />
      <p className="p-0 m-0">{track.title_short || track.title}</p>
      <div className={showMore ? "d-flex" : "d-none"}>
      <FontAwesomeIcon icon={faPlayCircle} size="md" />
        <p className="p-0 m-0" style={{fontSize:'0.8em'}}>
          {track.title_short || track.title} by {track.artist.name}
        </p>
      </div>
    </Col>
  );
};

export default TracksCard;
