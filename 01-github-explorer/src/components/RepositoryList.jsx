import { RepositoryItem } from "./RepositoryItem";

const repository = {
  name: 'unform',
  description: 'forms in react',
  link: 'https://github.com/unform/unform'
}
export function RepositoryList() {

  return (
    <section className="repository-list">
      <h1>Lista de Repositorios</h1>

        <RepositoryItem repository={repository}/>
        {/** as propriedades do repository, tendem a ser muitas 
         * entao o recomendado é guardalas dentro de um objecto 
         * js
         */}
        <RepositoryItem repository={repository}/>
        <RepositoryItem repository={repository}/>
        <RepositoryItem repository={repository}/>
      <ul>
        
      </ul>
    </section>
  )
}