import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft } from 'react-icons/fi';

import logo from '../../assets/logo.svg';
import { Header, RepoInfo } from './styles';

interface RepositoryParams {
  repository: string;
}

export const Repo: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();

  return (
    <>
      <Header>
        <img src={logo} alt="GitCollection" />
        <Link to="/">
          <FiChevronLeft />
          Voltar
        </Link>
      </Header>

      <RepoInfo>
        <header>
          <img
            src="https://avatars.githubusercontent.com/u/76970330?v=4"
            alt="Matheus"
          />
          <div>
            <strong>Titulo Repo</strong>
            <p>Descricao</p>
          </div>
        </header>

        <ul>
          <li>
            <strong>2545</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>210</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>79</strong>
            <span>Issues Abertas</span>
          </li>
        </ul>
      </RepoInfo>
    </>
  );
};
