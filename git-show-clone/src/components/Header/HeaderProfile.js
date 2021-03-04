import './HeaderProfile.css'
import '../../styles/global.css'

export function HeaderProfile() {
  return (
    <>
      <div className="container-header">
        <div className="profile">
          <img src="https://github.com/kelyAna.png" alt="Ana Kely" />
          <p>Ana Kely Lopes</p>
        </div>

        <div className="about-me">
          <p>
            Acadêmica em Sistemas de Informação na UFC - Campus Quixadá.
            Entusiasta à cientista de dados e desenvolvedora web, sempre
            em busca por conhecimento. Amo ler e ouvir músicas.
          </p>
        </div>

        <div className="social-media">
          <a href="#"><img src="/github.svg" alt="GiHub" /></a>
          <a href="#"><img src="/linkedin.svg" alt="GiHub" /></a>
        </div>
      </div>
    </>
  )
}