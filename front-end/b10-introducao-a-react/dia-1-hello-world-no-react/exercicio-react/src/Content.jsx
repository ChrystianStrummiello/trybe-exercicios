import React from "react";

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
];

class Content extends React.Component {
  render () {
    return (
      <main className="content">
        {conteudos.map((item) => (
          <div key={item.conteudo} className="card">
            <h4>{`${item.conteudo}`}</h4>
            {/* <b><p>{`status:`}</p></b> */}
            <p>{item.status}</p>
            <p>{`Bloco: ${item.bloco}`}</p>
            </div>
        ))}
      </main>
    )
  }
}

export default Content;