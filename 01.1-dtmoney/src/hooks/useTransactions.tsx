import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import {api} from '../services/api'

type transactionProps = {
    id: number;
    title: string;
    amount: number;
    type: string;
    category: string;
    createdAt: string;
}

type TransactionsProviderProps = {
    children: ReactNode;
}

type TransactionInput = Omit<transactionProps, 'id' |'createdAt'>;

type TransactionsContextData = {
    transactions: transactionProps[];
    createTransaction: (transaction: TransactionInput) => Promise<void>;
}

const TransactionsContext = createContext<TransactionsContextData>( 
    {} as TransactionsContextData
)

export function TransactionsProvider({children}: TransactionsProviderProps) {
    const [transactions, setTransactions] = useState<transactionProps[]>([])

    useEffect(() => {
        api.get('transactions').then(response => setTransactions(response.data.transactions)
        )
    }, [])

async function createTransaction(transactionInput: TransactionInput) {
    
    const response = await  api.post('/transactions', {
        ...transactionInput,
        createdAt: new Date()
    })

    const {transaction} = response.data

    setTransactions([...transactions, transaction])
  }

    return (
        <TransactionsContext.Provider value={{transactions, createTransaction}}>
            {children}
        </TransactionsContext.Provider>
    )
}

export function useTransactions() {
    const context = useContext(TransactionsContext)

    return context
}