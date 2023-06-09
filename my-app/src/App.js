import React, { Component } from 'react';

class App extends Component {
  state = {
    person: {
      fullName: 'John Doe',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imgSrc: 'https://via.placeholder.com/150',
      profession: 'Developer'
    },
    show: false,
    mountedTime: null
  };

  toggleShow = () => {
    this.setState(prevState => ({ show: !prevState.show }));
  };

  componentDidMount() {
    this.setState({ mountedTime: new Date() });
    this.intervalId = setInterval(() => {
      this.setState({ mountedTime: new Date() });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    const { person, show, mountedTime } = this.state;
    return (
      <div>
        <button onClick={this.toggleShow}>Toggle Show</button>
        {show && (
          <div>
            <img src={person.imgSrc} alt="Person" />
            <h2>{person.fullName}</h2>
            <p>{person.bio}</p>
            <p>{person.profession}</p>
          </div>
        )}
        <p>Mounted time: {mountedTime && mountedTime.toLocaleTimeString()}</p>
      </div>
    );
  }
}

export default App;
