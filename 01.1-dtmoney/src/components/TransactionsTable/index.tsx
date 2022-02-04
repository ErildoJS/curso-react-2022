import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionsTable() {
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    api.get('transactions').then(response => console.log(response.data)
      )
  }, [])


  
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titílo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Desenvolvimento de uma EAD</td>
            <td className="deposit">kwz200.000,00</td>
            <td>Desenvolvimento</td>
            <td>01/01/2022</td>
          </tr>

          <tr>
            <td>aluguer</td>
            <td className="withdraw">-kwz100.000,00</td>
            <td>casa</td>
            <td>10/01/2022</td>
          </tr>

        </tbody>
      </table>
    </Container>
  )
}