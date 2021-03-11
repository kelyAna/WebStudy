import './Navigator.css'

export function Navigator(props) {
  return (
    <>
      <div className="navigator">
        <div className="logo">
          <img src="/suitcase.svg" alt="logo"/>
        </div>
        <div className="navigator-items">
          <img src="https://github.com/kelyAna.png" alt="Ana Kely" />
          <button>
            <a href="https://www.google.com.br/">EDIT MY PROFILE</a>
          </button>
        </div>
      </div>
      <hr/>
    </>
  )
}