import './index.css'

const EventItem = props => {
  const {details, onClickEvent} = props
  const {imageUrl, name, location, registrationStatus} = details

  const onClickEventItem = () => {
    onClickEvent(registrationStatus)
  }

  return (
    <li className="event-item">
      <button type="button" onClick={onClickEventItem} className="img">
        <img src={imageUrl} alt="event" className="event-image" />
      </button>
      <div className="event-text">
        <p className="event-name">{name}</p>
        <p className="event-location">{location}</p>
      </div>
    </li>
  )
}

export default EventItem
