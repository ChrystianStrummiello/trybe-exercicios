import React from 'react';
import { render, screen } from 
'@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('Testando componente App', () => {

  test('Verificando se existe o campo Email.', () => {
    // acessando os elementos na tela:
    render(<App />);
    const inputEmail = screen.getByLabelText('Email');
  
    // Fazendo os testes:
    expect(inputEmail).toBeInTheDocument();
    expect(inputEmail).toHaveProperty('type', 'email');
  });
  
  test('Verificando se existem dois botões na tela', () => {
    // acessar os elementos na tela
    render(<App />);
    const buttons = screen.getAllByRole('button');
  
    // Fazer os testes 
    expect(buttons).toHaveLength(2);
  });
  
  test('Verificando se existe um botão de enviar', () => {
    // acessar os elementos na tela
    render(<App />);
    const btnSend = screen.getByTestId('id-send');
    
    // Fazer os testes 
    expect(btnSend).toBeInTheDocument();
    expect(btnSend).toHaveProperty('type', 'button');
    expect(btnSend).toHaveValue('Enviar');
  });
  
  test('Verificando se o botão e o campo email estão funcionando.', () => {
    // acessar os elementos na tela
    render(<App />);
  
    const btnSend = screen.getByTestId('id-send');
    const inputEmail = screen.getByLabelText('Email');
    const EMAIL_USER = 'email@email.com';
    const textEmail = screen.getByTestId('id-email-user');
  
    // Interagir com os elementos (se for necessário)
    userEvent.type(inputEmail, EMAIL_USER);
    userEvent.click(btnSend);
    
    // Fazer os testes
    expect(textEmail).toBeInTheDocument();
    expect(textEmail).toHaveTextContent('Valor:');
    expect(inputEmail).toHaveValue('');
    expect(textEmail).toHaveTextContent(`Valor: ${ EMAIL_USER }`);
  
  });
});


  // acessar os elementos na tela
  // Interagir com os elementos (se for necessário)
  // Fazer os testes 
