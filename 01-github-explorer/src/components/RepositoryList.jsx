import { useState, useEffect} from 'react'
import { RepositoryItem } from "./RepositoryItem";
import '../styles/repositories.scss'



const repository = {
  name: 'unform',
  description: 'forms in react',
  link: 'https://github.com/unform/unform'
}

export function RepositoryList() {
  const [repositories, setRepositories] = useState([])

  useEffect(() => {
    fetch('https://api.github.com/users/ErildoJS/repos').
      then(response => response.json())
      .then(data => setRepositories(data))
  }, [])
  return (
    <section className="repository-list">
      <h1>Lista de Repositorios</h1>

        
      <ul>
        {repositories.map(repositorie => {
          return <RepositoryItem key={repositorie.name} repository={repositorie}/>
        })}
      
        {/** as propriedades do repository, tendem a ser muitas 
         * entao o recomendado é guardalas dentro de um objecto 
         * js
         */}
        
      </ul>
    </section>
  )
}