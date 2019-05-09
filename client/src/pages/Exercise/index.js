import React, { Component } from "react";
import Graphs from "../../components/graphs";
import Midi from "../../components/Midi/MidiTest";
import Piano from "../../components/virtualPiano/nvirtualPiano";
import "./style.css";

// function renderInput() {
//   navigator.requestMIDIAccess().then(midiAccess => {
//     if (midiAccess.inputs.size > 0) {
//       return true;
//     } else {
//       return false;
//     }
//   });
// }

class Exercise extends Component {
  render() {
    console.log(this.state);
    return <Graphs />;
  }
  //   if (this.state.showPiano) {
  //     return (
  //       <div>
  //         <a href="/home">Dashboard</a>
  //         <h1>EXERCISE</h1>
  //         {/* <Graphs /> */}
  //         {/* <Piano /> */}
  //         {/* <Midi /> */}
  //       </div>
  //     );
  //   } else {
  //     return (
  //       <div>
  //         <a href="/home">Dashboard</a>
  //         <h1>EXERCISE</h1>
  //         {/* <Graphs /> */}
  //         {/* <Midi /> */}
  //       </div>
  //     );
  //   }
  // }
}

export default Exercise;
