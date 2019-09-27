import PropTypes from "prop-types";
import React, { Component } from "react";
import { Button, Container, Header, Icon } from "semantic-ui-react";

export default class HomepageHeading extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const HomepageHeading = ({ mobile }) => (
      <Container text>
        <Header
          as="h1"
          content="Seven Minutes With The Lord"
          inverted
          style={{
            fontSize: mobile ? "1.5em" : "2em",
            fontWeight: "normal",
            marginBottom: 0,
            marginTop: mobile ? "1.5em" : "3em"
          }}
        />
        <Header
          as="h2"
          content="Do whatever you want when you want to."
          inverted
          style={{
            fontSize: mobile ? "1.5em" : "1.7em",
            fontWeight: "normal",
            marginTop: mobile ? "0.5em" : "1.5em"
          }}
        />
        <Button primary size="huge">
          Begin
          <Icon name="right arrow" />
        </Button>
      </Container>
    );

    return <HomepageHeading />;
  }
}

HomepageHeading.propTypes = {
  mobile: PropTypes.bool
};
