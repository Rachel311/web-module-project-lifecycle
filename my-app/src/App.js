import React from 'react';
import axios from 'axios';
import './App.css';



class App extends React.Component {
  state = {
    users: [],
    followers: []
  }

  componentDidMount() {
    axios.get(`https://api.github.com/users/Rachel311/`)
    .then(res => {
      console.log(res.data)
      this.setState({ users: res.data })})
    .catch(err => console.error('unable to retrieve users:', err))
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.followers !== this.state.followers) {
      axios.get(`https://api.github.com/users/Rachel311/followers`)
      .then(res => {
        console.log(res.data)
          this.setState({ users: res.data })})
          
      .catch(err => console.error('unable to fetch followers: ', err))
    }
  }

  handleFollowers = e => {
    e.preventDefault();
    this.setState({
      followers: []
    })
  }


  render() {
    return ( 
      <div className='App-header'>
        <h1>Rachel's UserCards</h1>
        <div><button onClick={this.handleFollowers}>get followers</button></div>
        {this.state.users.map(usercards => {
          return <img alt="user cards" src={usercards} key={usercards}/>
        })}
      </div>
    )
  }
}


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
