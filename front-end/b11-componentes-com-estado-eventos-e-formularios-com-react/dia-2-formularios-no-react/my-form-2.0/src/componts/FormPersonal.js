import React from "react";

class FormPersonal extends React.Component {
  render() {
    return (
      <form>
        <h1>
          Dados Pessoais
        </h1>
        <fieldset>
          <legend>formulario:</legend>
          
          <label htmlFor="name" >Nome:</label>
          <input type='text' id="name"  ></input>

          <label htmlFor="Email" >Email:</label>
          <input type='email' id="Emial"  ></input>

          <label htmlFor="CPF" >CPF:</label>
          <input type='text' id="CPF"  ></input>

          <label htmlFor="Endereço" ></label>
          <input type='text' id="Endereço"  ></input>

          <label htmlFor="Cidade" ></label>
          <input type='text' id="Cidade"  ></input>

          <label htmlFor="Estado" ></label>
          <option id="Estado" value=''  ></option>

          <label htmlFor="name" ></label>
          <input type='text' id="name"  ></input>

        </fieldset>
      </form>
    )
  }
}

export default FormPersonal;