import React, { Component } from "react";
import { Container, Col, Row, Image } from "react-bootstrap";
import "./feminine-hygiene.css";

export default class FeminineHygiene extends Component {
  render() {
    return (
      <Container className="wide-row-container feminine-hygiene-row">
        <Row className="flex-wrap">
          <Col className="feminine-hygiene-image-col" xs={12} md={6}>
            <Image
              className="feminine-hygiene-image"
              src="/assets/img/feminine-hygiene.png"
              fluid
            />
          </Col>
          <Col className="feminine-hygiene-text-col" xs={12} md={6}>
            <div className="text-right">
              <h2 className="roboto-font fw-600 feminine-hygiene-header">
                {" "}
                FEMININE HYGIENE DISPENSER{" "}
              </h2>
              <p>
                When plugged in, the SocialMirror is always connected to the
                SocialMirror network and the features that come with it. Your
                profile and saved outfits will always be visible to friends, who
                can share your style or use your outfits as inspiration. If you
                decide to make your profile public, you may show up as a
                trending Style Icon when recieving a lot of attention on a
                specific outfit.
              </p>
              <p>
                Want to get dressed and ready with your friends but need to be
                at home? You can also "drop-in" on your friends with real-time
                audio or video calling through your SocialMirror.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}
