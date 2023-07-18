// Write your code here
import './index.css'

const DestinationItem = props => {
  const {cityList} = props
  const {name, imgUrl} = cityList

  const displayItem = (
    <li className="city-list">
      <div className="city-card-cont">
        <img src={imgUrl} alt={name} className="city-img" />
        <p className="city-name">{name}</p>
      </div>
    </li>
  )
  return displayItem
}

export default DestinationItem
