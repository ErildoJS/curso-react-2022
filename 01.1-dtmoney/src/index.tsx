import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import {createServer, Model} from 'miragejs'

createServer({
  models: {//essa models é como se fosse o nome do db
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [//transactions e o nome do model so que no plural
        {
          id: 1,
          title: 'aluguer',
          type: 'withdraw',
          category: 'casa',
          amount: 1000,
          createdAt: new Date('2022-01-01 09:00:00')
        },
        {
          id: 2,
          title: 'leading page',
          type: 'deposit',
          category: 'dev',
          amount: 500,
          createdAt: new Date('2022-01-10 04:00:00')
        }
      ]
    })
  },

  routes() {
    this.namespace = 'api'

    this.get('/transactions', () => {
      return this.schema.all('transaction')

      /**
       * criando um dade no mirajs
       * return [
        {
          id: 1,
          title: 'Transaction',
          amount: 400,
          type: 'deposit',
          category: 'Food',
          createdAt: new Date()
        }
      ]
       */
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)
      //schema - o nome da nossa model

      return schema.create('transaction', data)
    })
  }
})


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
