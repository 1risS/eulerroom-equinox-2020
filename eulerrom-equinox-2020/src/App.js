import React from 'react';
import Link from 'react';
import './App.css';

function App() {
  render() {
    return (
      <div className="App">
        <div className="descriptionContainer">
          <h1>Eulerroom Equinox 2020</h1>
          <h3>March Equinox (3:50am Fri 20th March, and surrounding days)</h3>
          <h4>CALL FOR CONTRIBUTIONS AND EVENTS</h4>
          <p>An equinox is a day when the whole world gets 12 hours of sunlight. The March 
            equinox marks the beginning of autumn in the southern hemisphere and spring in the northern hemisphere.<br></br>
            For March Equinox 2020 we will celebrate sixteen years of the TOPLAP live coding community with a nonstop online stream, 
            over 20th-22nd March. <br></br>
            If you want to contribute to the stream, you can do that either as an individual from your home/studio/workplace/local 
            cafe etc, or from an organised event.<br></br><br></br>
            This is an open call for:
          </p>
        </div>
        <div className="linksContainer">
          <Link to="/LocalEvents"> Local Events</Link>
          <Link to="/StreamedEvents"> Streamed Events</Link>
          <Link to="/TalksDemos"> Talks/Demos</Link>
          <Link to="/Performances"> Performances</Link>
          <Link to="/Reviewers"> Reviewers</Link>
          <Link to="/Volnteers"> Volunteers</Link>
        </div>
      </div>
    )
  }
}

export default App;
