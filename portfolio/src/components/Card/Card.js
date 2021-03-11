import './Card.css'
import '../../styles/global.css'

export function Card() {
  return (
    <>
      <div className="skills">
        <p>
          Acadêmica em Sistemas de Informação na UFC - Campus Quixadá.
          Entusiasta à cientista de dados e desenvolvedora web, sempre em busca por conhecimento.
           Amo ler e ouvir músicas.
        </p>

        <hr/>

        <div className="techs">
          <p>JUPYTER NOTEBOOK</p>
          <p>JAVASCRIPT</p>
          <p>JAVA</p>
          <p>JAVASCRIPT</p>
          <p>RAKU</p>
          <p>C++</p>
          <p>TYPESCRIPT</p>
          <p>HTML</p>
          <p>C</p>
        </div>
      </div>
    </>
  )
}