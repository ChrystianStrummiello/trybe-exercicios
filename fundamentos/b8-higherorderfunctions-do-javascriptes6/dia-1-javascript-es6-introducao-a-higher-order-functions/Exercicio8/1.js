
const retornaNome = (nomeCompleto) => ({ nomeCompleto, email: fazEmail(nomeCompleto)})
const fazEmail = (nome) => `${nome.replace(' ', '_').toLowerCase()}@trybe.com`

const newEmployees = () => {
    const employees = {
      id1: retornaNome('Pedro Guerra'),
      id2: retornaNome ('Luiza Drumond'),
      id3: retornaNome ('Carla Paiva'),
    }
    return employees;
  };
  console.log(newEmployees());