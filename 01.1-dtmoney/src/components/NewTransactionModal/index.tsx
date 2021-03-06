import { FormEvent, useState } from 'react'
import Modal from 'react-modal'
import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import { Container, RadioBox, TransactionTypeContainer } from './styles'
import {useTransactions} from '../../hooks/useTransactions'


type NewTransactionModalProps = {
  isOpen: boolean;
  onRequestClose: () => void
}

export function NewTransactionModal({isOpen, onRequestClose}:NewTransactionModalProps) {
  const { createTransaction } = useTransactions()

  const [type, setType] = useState('deposit')
  const [title, setTitle] = useState('')
  const [value, setValue] = useState(0)
  const [category, setCategory] = useState('')


  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault()

    await createTransaction({
      title,
      amount: value,
      category,
      type
    })

    setTitle('')
    setValue(0) 
    setCategory('')
    setType('deposit')
    onRequestClose()
  }



  return (
      <Modal 
        isOpen={isOpen}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
        onRequestClose={onRequestClose} 
      >

        <button type="button" onClick={onRequestClose} className="react-modal-close">
          <img src={closeImg} alt="Fechar Modal"/>
        </button>

        <Container onSubmit={handleCreateNewTransaction}>

        <h2>Cadastrar transação</h2>

        <input
         placeholder='titulo'
         value={title}
         onChange={event => setTitle(event.target.value)}
         />

        <input type="number" 
        placeholder='valor' 
        value={value}
         onChange={event => setValue(Number(event.target.value))}
        />

        <TransactionTypeContainer>

          <RadioBox 
          type='button'
          onClick={() => {setType('deposit')}}
          isActive={type === 'deposit'}
          activeColor="green"
          >
            <img src={incomeImg} alt="Entradas"/>
            <span>Entradas</span>
          </RadioBox>

          <RadioBox
          type='button'
           onClick={() => {setType('withdraw')}}
           isActive={type === 'withdraw'}
           activeColor="red"
           >
            <img src={outcomeImg} alt="Saidas"/>
            <span>Saidas</span>
          </RadioBox>
        </TransactionTypeContainer>
        
        <input
         placeholder='categoria' 
         value={category}
         onChange={event => setCategory(event.target.value)}
         />
        <button type="submit">Cadastrar</button>
        </Container>
      </Modal> 
  )
}

