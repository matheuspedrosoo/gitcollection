import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import { Title, Form, Repos } from './styles';
import logo from '../../assets/logo.svg';

export const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logo} alt="GitCollection" />
      <Title>Catálogo de repositórios do Github</Title>

      <Form>
        <input placeholder="username/repository_name" />
        <button type="submit">Buscar</button>
      </Form>

      <Repos>
        <a href="/repositories">
          <img
            src="https://avatars.githubusercontent.com/u/76970330?v=4"
            alt="Repositorio"
          />
          <div>
            <strong>Matheus/curso-react</strong>
            <p>Repositório do mini-curso React</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repos>
    </>
  );
};
