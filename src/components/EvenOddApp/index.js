import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  onClicking = () => {
    this.setState(prevState => ({
      count: prevState.count + Math.floor(Math.random() * 100),
    }))
  }

  render() {
    const {count} = this.state
    let EvenOrOdd

    if (count % 2 === 0) {
      EvenOrOdd = 'Even'
    } else {
      EvenOrOdd = 'Odd'
    }

    return (
      <div className="bgCon">
        <div className="mainCon">
          <h1 className="mainH">Count {count}</h1>
          <p className="mainP">Count is {EvenOrOdd}</p>
          <button className="bton" type="button" onClick={this.onClicking}>
            Increment
          </button>
          <p className="subP">* Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
