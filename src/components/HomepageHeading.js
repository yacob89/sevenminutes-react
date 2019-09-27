import PropTypes from "prop-types";
import React, { Component } from "react";
import { Button, Container, Header, Icon } from "semantic-ui-react";
import TimerMachine from "react-timer-machine";
import moment from "moment";
import momentDurationFormatSetup from "moment-duration-format";

momentDurationFormatSetup(moment);

export default class HomepageHeading extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titleDisplay: "inline-block",
      timerDisplay: "inline-block",
      timerStart: false,
      timerPause: false,
      initialTime: 11000,
      currentTask: "calling",
      tick: 10
    };
    // Tasks:
    /* 
    1. calling 31
    2. praying 61
    3. prayreading 151
    4. confession 61
    5. consecration 31
    6. thanksgiving 31 
    7. petition 61
    */
    this.startTimer = this.startTimer.bind(this);
  }

  startTimer(start) {
    this.setState({ titleDisplay: "none" });
    this.setState({ timerDisplay: "inline-block" });
    this.setState({ timerStart: true });
  }

  render() {
    const { mobile } = this.props;

    return (
      <Container text textAlign="center">
        <div style={{display:"none"}}>
        <TimerMachine
          timeStart={this.state.initialTime} // start at 10 seconds
          timeEnd={0 * 1000} // end at 20 seconds
          started={this.state.timerStart}
          paused={this.state.timerPause}
          countdown={true} // use as stopwatch
          interval={1000} // tick every 1 second
          formatTimer={(time, ms) =>
            moment.duration(ms, "milliseconds").format("h:mm:ss")
          }
          onStart={time =>
            console.info(`Timer started: ${JSON.stringify(time)}`)
          }
          onStop={time =>{
            console.info(`Timer stopped: ${JSON.stringify(time)}`);
            var currentTask = this.state.currentTask;
            var currentTime = this.state.initialTime;
            var nextTime = 6000;
            if(currentTask === "calling"){
              this.setState({ initialTime: nextTime });
              console.log("Initial time: ", this.state.initialTime);
            }
          }}
          onTick={time => {
            console.info(`Timer ticked: ${JSON.stringify(time)}`);
            console.log("Detik: ", time.s);
            this.setState({ tick: time.s });
          }}
          onPause={time =>
            console.info(`Timer paused: ${JSON.stringify(time)}`)
          }
          onResume={time =>
            console.info(`Timer resumed: ${JSON.stringify(time)}`)
          }
          onComplete={time => {
            console.info(`Timer completed: ${JSON.stringify(time)}`);
            var currentTask = this.state.currentTask;
            var currentTime = this.state.initialTime;
            var nextTime = 6000;
            if(currentTask === "calling"){
              this.setState({ currentTask: "praying" });
              this.setState({ initialTime: nextTime });
              this.setState({ timerStart: true });
              console.log("Initial time: ", this.state.initialTime);
            }
            else{
              this.setState({ timerStart: false });
            }
          }}
        />

        </div>
        
        <div style={{ display: this.state.titleDisplay }}>
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
          <Button primary size="huge" onClick={this.startTimer}>
            Begin
            <Icon name="right arrow" />
          </Button>
        </div>
        <div style={{ display: this.state.timerDisplay }}>
          <Header
            as="h2"
            content="Do whatever you want when you want to."
            inverted
            style={{
              fontSize: mobile ? "1.5em" : "1.7em",
              fontWeight: "normal",
              marginTop: mobile ? "0.5em" : "0.5em"
            }}
          />
          <Header
            as="h1"
            inverted
            style={{
              fontSize: mobile ? "6.0em" : "6.8em",
              fontWeight: "normal",
              marginTop: mobile ? "0.1em" : "0.1em"
            }}
          >
            {this.state.tick}
          </Header>
          <Button.Group icon>
            <Button>
              <Icon name="play" />
            </Button>
            <Button>
              <Icon name="pause" />
            </Button>
            <Button>
              <Icon name="redo" />
            </Button>
          </Button.Group>
        </div>
      </Container>
    );
  }
}

HomepageHeading.propTypes = {
  mobile: PropTypes.bool
};
