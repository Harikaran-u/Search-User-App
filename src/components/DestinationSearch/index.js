// Write your code here
import {Component} from 'react'
import DestinationItem from '../DestinationItem'
import './index.css'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  findInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {destinationsList} = this.props
    const {searchInput} = this.state
    const showResult = destinationsList.filter(eachCity =>
      eachCity.name.toLowerCase().includes(searchInput),
    )
    const homePage = (
      <div className="home-page">
        <div className="search-cont">
          <h1 className="search-head">Destination Search</h1>
          <button type="button" className="input-cont">
            <input
              type="search"
              placeholder="search"
              className="input-design"
              value={searchInput}
              onChange={this.findInput}
            />
            <img
              className="search-img"
              alt="search icon"
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            />
          </button>
        </div>
        <ul className="city-card-container">
          {showResult.map(eachCity => (
            <DestinationItem cityList={eachCity} key={eachCity.id} />
          ))}
        </ul>
      </div>
    )
    return homePage
  }
}

export default DestinationSearch
