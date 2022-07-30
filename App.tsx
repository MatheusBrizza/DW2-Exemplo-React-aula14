import * as React from 'react';
import { useState } from 'react';
import './style.css';

export function AppRadio({ _pais = 'italia' }) {
  const [pais, setPais] = useState(_pais);
  return (
    <div className="App">
      <div>
        <input
          type="radio"
          id="italia"
          value="italia"
          name="pais"
          checked={pais === 'italia'}
          onChange={(event) => setPais(event.target.value)}
        />
        <label htmlFor="italia">Itália</label>
      </div>
      <div>
        <input
          type="radio"
          id="brasil"
          value="brasil"
          name="pais"
          checked={pais === 'brasil'}
          onChange={(event) => setPais(event.target.value)}
        />
        <label htmlFor="brasil">Brasil</label>
      </div>
      <p>País selecionado: {pais}</p>
    </div>
  );
}

export function AppNumber() {
  const [numero, setNumero] = useState(0);
  const [invalido, setInvalido] = useState(false);
  return (
    <div>
      <label htmlFor="valor">Valor</label>
      <input
        id="valor"
        step="5"
        min="0"
        type="number"
        onChange={(event) => {
          const _valor = event.target.value;
          setNumero(_valor);
          if (Number(_valor) < 1) {
            setInvalido(true);
          }
        }}
      />
      <br />
      {invalido && <span style={{ color: 'red' }}>Valor invalido</span>}
      <p>Pais Selecionado: {numero}</p>
    </div>
  );
}

export default function AppForm() {
  const [numero, setNumero] = useState(0);
  const [invalido, setInvalido] = useState(false);
  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (!invalido) {
            alert(`Conteúdo submetido: ${numero}`);
          }
        }}
      >
        <label htmlFor="valor">Valor</label>
        <br />
        <input
          id="valor"
          step="5"
          min="0"
          type="number"
          onChange={(event) => {
            const _valor = event.target.value;
            setNumero(_valor);
            setInvalido(Number(_valor) < 1);
          }}
        />
        <br />
        {invalido && <span style={{ color: 'red' }}>Valor invalido</span>}
        <button type="submit" disabled={invalido}>
          Enviar
        </button>
      </form>
      <p>Pais Selecionado: {numero}</p>
    </div>
  );
}
