import './index.css'

const ActiveEventRegistrationDetails = props => {
  const {status, eventStatusConst} = props

  switch (status) {
    case eventStatusConst.initial:
      return (
        <div className="active-container">
          <p className="initial-text">
            Click on an event, to view its registration details
          </p>
        </div>
      )
    case eventStatusConst.registered:
      return (
        <div className="active-container-2">
          <img
            src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
            alt="registered"
            className="registered-img"
          />
          <h1>You have already registered for the event</h1>
        </div>
      )
    case eventStatusConst.notRegistered:
      return (
        <div className="active-container-2">
          <img
            src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
            alt="yet to register"
            className="register-img"
          />
          <p>
            A live performance brings so much to your relationship with dance.
            Seeing dance live can often make you fall totally in love with this
            beautiful art form.
          </p>
          <button type="button" className="button">
            Register Here
          </button>
        </div>
      )
    case eventStatusConst.closed:
      return (
        <div className="active-container-2">
          <img
            src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
            alt="registrations closed"
            className="closed-img"
          />
          <h1>Registrations Are Closed Now!</h1>
          <p>Stay tuned. We will reopen the registrations soon</p>
        </div>
      )
    default:
      return null
  }
}

export default ActiveEventRegistrationDetails
