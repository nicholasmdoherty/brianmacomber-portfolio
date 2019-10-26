import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import "./show-page.css";
import { isBrowser, isMobile } from "react-device-detect";

class ShowBanner extends Component {
  /*
    Props: 
      - title: string
      - location: string
      - date: string
      - time: string
      - linkToTickets: string
      - price - string
      - lineup: string[]
*/

  render() {
    let {
      title,
      location,
      date,
      time,
      lineup,
      linkToTickets,
      price
    } = this.props;

    if (isMobile) {
      return (
        <Card className="text-left mx-auto m-4 show-card">
          <Card.Header className="button-title-block">
            <div className="p-1 text-left">
              <Card.Title className="display-4">{title}</Card.Title>
            </div>
          </Card.Header>
          <Card.Body className="d-flex space-away">
            <div className="maxw-50">
              <Card.Text className="margin-fix">
                <p className="d-inline main-paragraph">{location}</p>
              </Card.Text>
              <Card.Text className="margin-fix">
                <p className="d-inline main-paragraph">{date}</p>
              </Card.Text>
              <Card.Text>
                <p className="d-inline main-paragraph">{time}</p>
              </Card.Text>

              <Card.Text className="margin-fix">
                <h5 className="d-inline">Lineup:</h5>
              </Card.Text>
              {lineup.map(name => {
                return (
                  <Card.Text className="margin-fix">
                    <p className="d-inline"> - {name}</p>
                  </Card.Text>
                );
              })}
            </div>

            <div className="p-1 text-right">
              <Button
                href={linkToTickets}
                variant="outline-dark"
                size="sm"
                className="p-1"
              >
                <p className="button-text">Buy Tickets!</p>
              </Button>
              <h6 className="price-display p-2">{price}</h6>
            </div>
          </Card.Body>
        </Card>
      );
    } else {
      return (
        <Card className="text-left w-75 mx-auto m-4 show-card">
          <Card.Header className="d-flex button-title-block">
            <div className="p-1 text-left">
              <Card.Title className="display-4">{title}</Card.Title>
            </div>

            <div className="p-1 text-right">
              <Button
                href={linkToTickets}
                variant="outline-dark"
                size="sm"
                className="p-1 button-link"
              >
                <p className="button-text">Buy Tickets!</p>
              </Button>
              <h6 className="price-display p-2">{price}</h6>
            </div>
          </Card.Header>
          <Card.Body>
            <Card.Text className="margin-fix">
              <p className="d-inline main-paragraph">
                {date}, {time}
              </p>
            </Card.Text>
            <Card.Text>
              <p className="d-inline main-paragraph">{location}</p>
            </Card.Text>
            <Card.Text className="margin-fix">
              <h5 className="d-inline">Lineup:</h5>
            </Card.Text>
            {lineup.map(name => {
              return (
                <Card.Text className="margin-fix">
                  <p className="d-inline"> - {name}</p>
                </Card.Text>
              );
            })}
          </Card.Body>
        </Card>
      );
    }
  }
}

export default ShowBanner;
