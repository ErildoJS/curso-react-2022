import { GlobalStyle } from "./styles/global"
import {Header} from './components/Header'
import {Dashboard} from './components/Dashboard'
import { useState } from "react"
import Modal from 'react-modal'

Modal.setAppElement('#root')

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false)

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true)//abrir o modal
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false)//fechar o modal
  }

  return (
    <>
      <Header  onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      <Dashboard />

      {/** onRequestClose - fecha o modal */}
      <Modal 
        isOpen={isNewTransactionModalOpen}
        
        onRequestClose={handleCloseNewTransactionModal} 
      >
        <h2>Cadastrar transação</h2>
      </Modal>      

      <GlobalStyle />
    </>
  );
}

