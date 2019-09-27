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
      timerDisplay: "none",
      timerStart: false,
      timerPause: false,
      initialTime: 11000,
      currentTask: "calling",
      currentText: "Calling",
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
    this.changeTime = this.changeTime.bind(this);
  }

  startTimer(start) {
    this.setState({ titleDisplay: "none" });
    this.setState({ timerDisplay: "inline-block" });
    this.setState({ timerStart: true });
  }

  changeTime(time) {
    var currentTask = this.state.currentTask;
    var nextTime = 6000;
    if (currentTask === "calling") {
      this.setState({ initialTime: nextTime });
    }
    if (currentTask === "praying") {
      this.setState({ initialTime: nextTime });
    }
    if (currentTask === "prayreading") {
      this.setState({ initialTime: nextTime });
    }
    if (currentTask === "confession") {
      this.setState({ initialTime: nextTime });
    }
    if (currentTask === "consecration") {
      this.setState({ initialTime: nextTime });
    }
    if (currentTask === "thanksgiving") {
      this.setState({ initialTime: nextTime });
    }
    if (currentTask === "petition") {
      this.setState({ initialTime: nextTime });
    }
    console.log("Initial time stop: ", this.state.initialTime);
    console.log("Task stop: ", this.state.currentTask);
  }

  render() {
    const { mobile } = this.props;

    return (
      <Container text textAlign="center">
        <div style={{ display: "none" }}>
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
            onStop={time => {
              console.info(`Timer stopped: ${JSON.stringify(time)}`);
              this.changeTime();
            }}
            onTick={time => {
              console.info(`Timer ticked: ${JSON.stringify(time)}`);
              console.log("Detik: ", time.s);
              this.setState({ tick: time.s });
              if(time.s === this.state.initialTime/1000 - 1){
                if (this.state.currentTask === "calling") {
                  this.setState({ currentText: "Calling" });
                }
                if (this.state.currentTask === "praying") {
                  this.setState({ currentText: "Praying" });
                }
                if (this.state.currentTask === "prayreading") {
                  this.setState({ currentText: "Pray Reading" });
                }
                if (this.state.currentTask === "confession") {
                  this.setState({ currentText: "Confession" });
                }
                if (this.state.currentTask === "consecration") {
                  this.setState({ currentText: "Consecration" });
                }
                if (this.state.currentTask === "thanksgiving") {
                  this.setState({ currentText: "Thanks Giving" });
                }
                if (this.state.currentTask === "petition") {
                  this.setState({ currentText: "Petition" });
                }
                if (this.state.currentTask === "ending") {
                  this.setState({ currentText: "Have a nice day, Grace be with you" });
                }
              }
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
              if (currentTask === "calling") {
                this.setState({ currentTask: "praying" });
                this.setState({ timerStart: true });
                console.log("Initial time: ", this.state.initialTime);
              }
              if (currentTask === "praying") {
                this.setState({ currentTask: "prayreading" });
                this.setState({ timerStart: true });
                console.log("Initial time: ", this.state.initialTime);
              }
              if (currentTask === "prayreading") {
                this.setState({ currentTask: "confession" });
                this.setState({ timerStart: true });
                console.log("Initial time: ", this.state.initialTime);
              }
              if (currentTask === "confession") {
                this.setState({ currentTask: "consecration" });
                this.setState({ timerStart: true });
                console.log("Initial time: ", this.state.initialTime);
              }
              if (currentTask === "consecration") {
                this.setState({ currentTask: "thanksgiving" });
                this.setState({ timerStart: true });
                console.log("Initial time: ", this.state.initialTime);
              }
              if (currentTask === "thanksgiving") {
                this.setState({ currentTask: "petition" });
                this.setState({ timerStart: true });
                console.log("Initial time: ", this.state.initialTime);
              }
              if (currentTask === "petition") {
                this.setState({ currentTask: "ending" });
                this.setState({ timerStart: true });
                console.log("Initial time: ", this.state.initialTime);
              }
              //this.setState({ tick: this.state.initialTime / 1000 - 1 });
              console.log("Initial time complete: ", this.state.initialTime);
              console.log("Task complete: ", this.state.currentTask);
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
            content="Let's begin contacting The Lord."
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
            content={this.state.currentText}
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
