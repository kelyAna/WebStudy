import './HeaderProfile.css'
import '../../styles/global.css'

import { Card } from '../Card/Card'

export function HeaderProfile(props) {
  return (
    <>
      <div className="container-profile">
        <div className="profile">
          <img src="https://github.com/kelyAna.png" alt="Ana Kely" />
          <p>Ana Kely Lopes</p>

          <div className="social-media">
            <a href="https://www.google.com.br/"><img src="/github.svg" alt="GiHub" /></a>
            <a href="https://www.google.com.br/"><img src="/linkedin.svg" alt="GiHub" /></a>
          </div>
        </div>

        <div className="container-skills">
          <Card/>
        </div>
      </div>
    </>
  )
}