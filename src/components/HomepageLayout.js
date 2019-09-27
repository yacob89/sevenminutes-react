import React, { Component } from "react";
import {
  Container,
  Grid,
  Header,
  Segment
} from "semantic-ui-react";
import ResponsiveContainer from "./ResponsiveContainer";

export default class HomepageLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    return (
      <ResponsiveContainer>
        <Segment style={{ padding: "2em 0em" }} vertical>
          <Grid container stackable verticalAlign="middle">
            <Grid.Row>
              <Grid.Column width={12}>
                <Header as="h3" style={{ fontSize: "2em" }}>
                  1. Calling
                </Header>
                <p style={{ fontSize: "1.33em" }}>
                  Calling on the Name of the Lord to set our mind on the spirit
                  – 1 Cor.12:3; Rom. 8:6; 10:12-13 (1/2 Minute)
                </p>
                <Header as="h3" style={{ fontSize: "2em" }}>
                  2. Praying
                </Header>
                <p style={{ fontSize: "1.33em" }}>
                  Opening our heart, softening our heart and emptying ourselves.
                  Telling Him that we love Him – 2 Cor. 3:16; Psa. 62:8 (1
                  Minute)
                </p>
                <Header as="h3" style={{ fontSize: "2em" }}>
                  3. Pray-reading
                </Header>
                <p style={{ fontSize: "1.33em" }}>
                  Using our exercised spirit to pray over a verse or two.
                  Turning the verses into a personal prayer – Eph. 6:17-18; 2
                  Tim. 3:16 (2 1/2 Minutes)
                </p>
                <Header as="h3" style={{ fontSize: "2em" }}>
                  4. Confession
                </Header>
                <p style={{ fontSize: "1.33em" }}>
                  Confessing the sins and offenses on our conscience and
                  removing all blockages to fellowship. Asking for forgiveness
                  and cleansing – 1 John 1:7, 9; Psa. 66:18; Isa. 59:1-2 (1
                  Minute)
                </p>
                <Header as="h3" style={{ fontSize: "2em" }}>
                  5. Consecration
                </Header>
                <p style={{ fontSize: "1.33em" }}>
                  Presenting ourselves to the Lord afresh, giving Him the full
                  ground in us – Rom. 12:1-2; 6:13,19; Mark 12:30 (1/2 Minute)
                </p>
                <Header as="h3" style={{ fontSize: "2em" }}>
                  6. Thanksgiving
                </Header>
                <p style={{ fontSize: "1.33em" }}>
                  Giving thanks for all things; for all the persons, situations
                  and things in your life and praising Him – Eph. 5:20; 1 Thes.
                  5:18 (1/2 Minute)
                </p>
                <Header as="h3" style={{ fontSize: "2em" }}>
                  7. Petition
                </Header>
                <p style={{ fontSize: "1.33em" }}>
                  Asking the Lord for needs, growth and persons that need
                  salvation – 1 Tim. 2:1: Eph. 6:18; Matt. 7:7; Psa. 143:8 (1
                  Minute)
                </p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>

        <Segment inverted vertical style={{ padding: "5em 0em" }}>
          <Container>
            <Grid divided inverted stackable>
              <Grid.Row>
                <Grid.Column width={13}>
                  <Header as="h4" inverted>
                    Copyright
                  </Header>
                  <p>2019 @Churchinbandung. All rights reserved.</p>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </Segment>
      </ResponsiveContainer>
    );
  }
}
