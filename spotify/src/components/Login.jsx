import React, { Component } from "react";
import { Image, Button, Col, Row, Container } from "react-bootstrap";
import "../style/login.css";
import { setUsername } from "../redux/actions/index";
import { connect } from "react-redux";

const mapDispatchToProps = () => {
  return {
    setUsername,
  };
};
const mapStateToProps = (state) => ({
  loged: state.username,
});

class Login extends Component {
  state = {
    username: "",
  };
  render() {
    return (
      <div className="mainContainer">
        <div className="logoContainer">
          <Image
            className="logoImage"
            src="https://i.ya-webdesign.com/images/spotify-logo-png-transparent-6.png"
            alt="Spotify logo"
          />
        </div>
        <Container>
          <Row>
            <Col className="col-6 offset-3 text-center">
              <div className="loginArea d-flex flex-column">
                <h6 className="my-4" style={{ fontWeight: "bold" }}>
                  To continue, sign in to Spotify.
                </h6>
                <div className="my-3">
                  <div className="divider m-auto my-3">
                    <strong>o</strong>
                  </div>
                </div>
                <input
                  type="text"
                  className="my-3 mx-auto"
                  onChange={(e) => {
                    this.setState({ username: e.target.value });
                  }}
                  placeholder="   Insert an username"
                />
                <div>
                  <Row className="mt-3 mb-2">
                    <Col xs={6} className="my-2 d-flex checkCol">
                      <input type="checkBox" className="checkBox" />
                      <label>Remember me</label>
                    </Col>
                    <Col xs={6} className="checkCol">
                      <Button
                        className="mb-3 button3 "
                        onClick={() => {
                          this.props.setUsername(this.state.username);
                        }}
                      >
                        Login
                      </Button>
                    </Col>
                  </Row>
                  <h6 className="forgetPass">Did you forget your password? </h6>
                  <div className="my-4">
                    <div className="divider m-auto" />
                    <h4 className="newAccount my-4">Do not have an account?</h4>
                    <Button className="button4">Sign up</Button>
                    <div className="my-4"></div>
                    <div className="divider m-auto" />
                    <h6 className="my-3 terms">
                      If you click on "Log in with Facebook" and you are not a
                      Spotify user, you will be registered on Spotify and accept
                      the related
                      <span className="termsSpan">
                        {" "}
                        Terms and Conditions
                      </span>{" "}
                      and <span className="termsSpan"> Privacy Policy.</span>
                    </h6>
                  </div>
                </div>
              </div>
              {this.props.loged.login ? this.props.history.push("/home") : ""}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps())(Login);
