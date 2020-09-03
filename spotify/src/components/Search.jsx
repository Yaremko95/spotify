import React, { useState, useEffect } from "react";
import { Container, Spinner, Row, Col, Form,  } from "react-bootstrap";
import { Link } from "react-router-dom";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getTracks, myPlaylist } from "../redux/actions/index";
import { connect, useSelector } from "react-redux";
import MediaPlayer from "./MediaPlayer";
import Sidenav from "./SideNav";
import TrackCard from "./cards/TracksCard";
import AlbumCard from "./cards/AlbumCard";
import ArtistCard from "./cards/ArtistCard";

const mapDispatchToProps = () => {
  return {
    getTracks,
  };
};

const Search = (props) => {
  const [searchValue, setValue] = useState("");
  const [category, setCategory] = useState("track");
  const albums = useSelector((state) => state.albums);
  const tracks = useSelector((state) => state.tracks);
  const playlist = useSelector((state) => state.playlist);
  const artist = useSelector((state) => state.artists);

  const get = () => {
    props.getTracks(searchValue, category)
  };

  return (
    <>
      <Container fluid className="main">
        <Row className="main">
          <Sidenav />
          <Col xs={12} md={10} lg={10} className="mt-3">
            <div className="d-flex justify-content-center">
              <Form.Control
                className=""
                onChange={(e) => {
                  if (e.currentTarget.value.length > 2) {
                    setValue(e.currentTarget.value);
                  }
                }}
                className="w-25"
                size="sm"
                type="text"
                placeholder="Search "
              />
              <Form.Control
                size="sm"
                onChange={(e) => {
                  setCategory(e.currentTarget.value);
                }}
                as="select"
                style={{
                  width: "10em",
                  boxShadow: "none",
                  marginLeft: "1em",
                }}
              >
                <option value="track">Tracks</option>
                <option value="album">Albums</option>
                <option value="artist">Artists</option>
              </Form.Control>

              <FontAwesomeIcon
                className="ml-2 mt-1"
                onClick={() => get()}
                size="lg"
                icon={faSearch}
              />
            </div>
            <Container className="mt-5">
              {tracks.fetched || albums.fetched || artist.fetched ? (
                <>
                  {category === "track" ? (
                    <>
                      <h3>Tracks</h3>
                      <Row className="mt-2">
                        {tracks.fetched ? (
                          tracks.tracks.map((element,i) => {
                            return <TrackCard track={element} key={i}/>;
                          })
                        ) : (
                          <Spinner animation="grow" variant="success" />
                        )}
                      </Row>{" "}
                    </>
                  ) : (
                    ""
                  )}
                  {category === "album" ? (
                    <>
                      <h3>Albums</h3>
                      <Row className="mt-2">
                        {albums.fetched ? (
                          albums.albums.map((element,i) => {
                            return <AlbumCard album={element} key={i} />;
                          })
                        ) : (
                          <Spinner animation="grow" variant="success" />
                        )}
                      </Row>{" "}
                    </>
                  ) : (
                    ""
                  )}
                  {category === "artist" ? (
                    <>
                      <h3>Artists</h3>
                      <Row className="mt-2">
                        {artist.fetched ? (
                          artist.artists.map((element,i) => {
                            return <ArtistCard artist={element} key={i}/>;
                          })
                        ) : (
                          <Spinner animation="grow" variant="success" />
                        )}
                      </Row>{" "}
                    </>
                  ) : (
                    ""
                  )}
                </>
              ) : (
                <div className="welcomeSearch h-100 flex-column text-center">
                  <FontAwesomeIcon
                    className="display-1"
                    icon={faSearch}
                    size="lg"
                  />
                  <p className="display-4">Search for your favorite music</p>
                </div>
              )}
            </Container>
          </Col>
        </Row>
      </Container>
      <MediaPlayer />
    </>
  );
};

export default connect(null, mapDispatchToProps())(Search);
