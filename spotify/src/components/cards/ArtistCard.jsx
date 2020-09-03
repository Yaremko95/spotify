import React from "react";
import { Image, Col, Row } from "react-bootstrap";
import "../../style/Homepage.css";
import {Link} from 'react-router-dom'

const ArtistCard = ({artist}) => {
    console.log(artist)
    return (
      <Col xs={1} sm={2} md={4} lg={2} className="my-2">
          <Link to={`/artist/${artist.id}`}>
            <img src={artist.picture_medium} className="img-fluid" alt={artist.name}/>
          </Link>
          
      </Col>
    );
  };
  
  export default ArtistCard;