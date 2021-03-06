import { Container } from "./styles";
import {useTransactions} from '../../hooks/useTransactions'



export function TransactionsTable() {
  const { transactions } = useTransactions()
    

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
          {transactions.map(transaction => (
            <tr key={transaction.id}>
            <td>{transaction.title}</td>
            <td className={transaction.type}>
              {new Intl.NumberFormat('pt-AO', {
                style: 'currency',
                currency: 'KWZ'
              }).format(transaction.amount)}
              </td>
            <td>{transaction.category}</td>
            <td>{new Intl.DateTimeFormat('pt-AO').format(new Date(transaction.createdAt))}
              </td>
          </tr>
          ))}
        </tbody>
      </table>
    </Container>
  )
}

