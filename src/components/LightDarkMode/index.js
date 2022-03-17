// Write your code here
import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {isDark: true}

  onDark = () => {
    this.setState(prevState => ({isDark: !prevState.isDark}))
  }

  render() {
    const {isDark} = this.state

    let cls
    let text

    if (isDark === true) {
      cls = 'dark-cls'
      text = 'Light Mode'
    } else {
      cls = 'light-cls'
      text = 'Dark Mode'
    }

    return (
      <div className="bg-container">
        <div className={`mode-container ${cls}`}>
          <h1 className="heading">Click To Change Mode</h1>
          <div>
            <button className="button" type="button" onClick={this.onDark}>
              {text}
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default LightDarkMode
