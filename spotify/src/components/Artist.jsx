import React, { useEffect,useState } from "react";
import { Container, Row, Col, ListGroup, Jumbotron } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";
import { getSingleArtist, getTracks } from "../redux/actions/index";
import { connect } from "react-redux";
import MediaPlayer from "./MediaPlayer";
import SideNav from "./SideNav";
import AlbumCard from './cards/AlbumCard'

const mapDispatchToProps = () => {
  return {
    getSingleArtist,
    getTracks,
  };
};
const mapStateToProps = (state) => ({
  albums: state.albums,
  artist: state.singleArtist,
});

const Artist = ({artist,albums,getSingleArtist,getTracks,match}) => {

  useEffect(()=>{
    getSingleArtist(match.params.id).then(getTracks(artist.singleArtist.name,'album'))
  },[])
  
    return (
      <>
        <Container fluid className="main">
          <Row className="main">
            <SideNav />
            <Col xs={12} md={10} lg={10} className="mt-3">
              {artist.fetched ? (
                <Container fluid>
                  <Jumbotron
                    fluid
                    className="text-center rounded"
                    style={{
                      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),url(https://wallpaperstock.net/hands-concert-audience_wallpapers_54047_2560x1440.jpg)`,
                      height: "40vh",
                    }}
                  >
                    <Container>
                      <h1>{artist.singleArtist.name}</h1>
                      <p>50,000,000 monthly listeners !</p>
                    </Container>
                  </Jumbotron>
                  <Row>
                    {albums.fetched ? albums.albums.map(e=>{
                      return <AlbumCard album={e} />
                    }):''}
                  </Row>
                </Container>
              ) : (
                <div>Loading</div>
              )}
            </Col>
          </Row>
        </Container>
        <MediaPlayer />
      </>
    );
  }

export default connect(mapStateToProps, mapDispatchToProps())(Artist);
