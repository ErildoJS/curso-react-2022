import { useState, useEffect} from 'react'
import { RepositoryItem } from "./RepositoryItem";
import '../styles/repositories.scss'

type Repository = {
  name: string,
  description: string,
  html_url: string
}

export function RepositoryList() {
  const [repositories, setRepositories] = useState<Repository[]>([])

  
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