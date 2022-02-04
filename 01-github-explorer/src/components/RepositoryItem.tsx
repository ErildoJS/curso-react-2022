type RepositoryItemProps = {
  repository: {
    name: String,
    description: String,
    html_url: string
  }
}
export function RepositoryItem(props: RepositoryItemProps) {
  return (
    <li>
    <strong>{props.repository.name}</strong>
    {/** <strong>{props.repository ?? 'default'} <strong /> 
     * caso o repository esteja vazio o valor pafrao vai ser default
    */}
    <p>{props.repository.description}</p>
    

    <a href={props.repository.html_url} >
      acessar repositorios
    </a>
  </li>
  )
}