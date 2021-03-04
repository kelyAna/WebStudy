import './Navigator.css'

export function Navigator() {
  return (
    <>
      <div className="navigator">
        <div className="logo">
          <img src="/suitcase.svg"/>
        </div>
        <div className="navigator-items">
          <img src="https://github.com/kelyAna.png" alt="Ana Kely" />
          <button>
            <a>EDIT MY PROFILE</a>
          </button>
        </div>
      </div>
      <hr/>
    </>
  )
}