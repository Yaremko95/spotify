import React, { Component } from "react";
import { Col, ListGroup, Form } from "react-bootstrap";
import {
  faHome,
  faSearch,
  faBookOpen,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { useState } from "react";
import PlaylistModal from './forms/PlaylistModal'
import {createPlaylist,deletePlaylist} from '../redux/actions'

const mapDispatchToProps = ()=> {return {
  createPlaylist
}}

const mapStateToProps = (state) => ({ username: state.username,playlist:state.playlist });
const SideNav = (props)=> {

  const [playlist,setPlaylist] = useState(false)
  const [myPlaylists,setMyPlaylist] = useState(false)
  const [newPlaylist,setNewPlaylist]=useState(false)
  const [playListName,setplayListName]=useState('')

    return (
      <Col lg={2}  className="d-none d-md-flex Navbar ">
        <ListGroup className="text-center">
          <ListGroup.Item>
            <img
              className="img-fluid"
              src="https://i.ya-webdesign.com/images/spotify-logo-png-transparent-6.png"
            />
          </ListGroup.Item>
          <ListGroup.Item>
            <FontAwesomeIcon className="mr-2" size="lg" icon={faHome} />
            <Link to="/home">Home</Link>
          </ListGroup.Item>
          <ListGroup.Item>
            <FontAwesomeIcon className="mr-2" size="lg" icon={faSearch} />
            <Link to="/search">Search</Link>
          </ListGroup.Item>
          <ListGroup.Item>
            <div className="d-flex flex-column justify-content-center">
              <p className="m-0 p-0" onClick ={()=>setPlaylist(!playlist)}>
                <FontAwesomeIcon className="mr-2" size="lg" icon={faBookOpen} />{" "}
                Playlist
              </p>
              {playlist ? (
                <div className="m-0 mt-2">
                  <p className=" m-0 p-0 h6" onClick={()=>setNewPlaylist(true)} >New playlist</p>
                  <div className="d-flex flex-column justify-content-left">
                    <p className=" p-0 mt-1 mb-5 h6"onClick={()=>setMyPlaylist(!myPlaylists)}>My playlists</p>
                    {myPlaylists ? (
                      <div className="mr-auto">
                        {props.playlist.playlists.map(e=> {return(
                          <p className="m-0 p-0 mr-auto" style={{fontSize:'0.8em'}}>{e}</p>
                        )})}
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
          </ListGroup.Item>
          <ListGroup.Item className="mt-auto ">
            <FontAwesomeIcon className="mr-2" size="lg" icon={faUser} />
            {props.username.user}
          </ListGroup.Item>
        </ListGroup>
        <PlaylistModal show={newPlaylist} hide={()=>setNewPlaylist(false)} add={()=>{props.createPlaylist(playListName);setNewPlaylist(false)}} name={(e)=>setplayListName(e.target.value)} />
      </Col>
    );
  }
export default connect(mapStateToProps,mapDispatchToProps())(SideNav);
