import React from 'react';

import { parseISO, format } from 'date-fns';

import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import {
  Tbody,
  TableContainer,
  ContentHeader,
  Content,
  LinkButton,
} from './styled';
import apiWeather from '../../services/api';

export default function Weather({ match, history }) {
  // Armazena o código da cidade
  const cityId = match.params.id;

  // Caso o código da cidade seja zero, retorna para página inicial
  if (cityId <= 0) {
    history.push('/');
  }

  // Carrega os estilos configurados para serem aplicados no html
  const classes = useStyles();

  /** Consulta a previsão do tempo a aprtir do código da cidade */
  async function GetWeather(cityId) {
    // const api = await apiWeather.get(`/cidade/7dias/${cityId}/previsao.xml`);
    let city = await apiWeather.get(`/clima/${cityId}`);

    if (city === undefined || city === '') {
      return;
    }

    city = JSON.parse(city.data);

    let htmlWeathers = '';
    for (let i = 0; i < city.listPrevisao.length; i++) {
      const dia = format(parseISO(city.listPrevisao[i].dia), 'dd/MM/yyyy');

      htmlWeathers += '<tr >';
      htmlWeathers += `<td>${dia}</td>`;

      htmlWeathers += `<td>${GetWeatherDescription(
        city.listPrevisao[i].tempo
      )}</td>`;

      htmlWeathers += `<td>${city.listPrevisao[i].maxima}º</td>`;

      htmlWeathers += `<td>${city.listPrevisao[i].minima}º</td>`;

      htmlWeathers += '</tr>';
    }

    const atualizacao = format(parseISO(city.atualizacao), 'dd/MM/yyyy');

    document.getElementById('cityName').innerHTML = city.nome;
    document.getElementById('uf').innerHTML = city.uf;
    document.getElementById('updateDate').innerHTML = atualizacao;
    document.getElementById('result').innerHTML = htmlWeathers;
  }

  // Caso o código da cidade seja válido, executa a função para trazer a previsão do tempo
  if (cityId > 0) {
    GetWeather(cityId);
  }

  return (
    <Content>
      <ContentHeader>
        <p>
          <h3>
            Previsão do tempo para <span id="cityName" />
          </h3>
        </p>
        <p>
          <b>UF:</b>
          <span id="uf" />
        </p>
        <p>
          <b>Data de Consulta:&nbsp;</b>
          <span id="updateDate" />
        </p>
      </ContentHeader>
      <TableContainer component={Paper}>
        <table className={classes.table} aria-label="simple table">
          <thead>
            <tr>
              <th>
                <b>Data</b>
              </th>
              <th>
                <b>Tempo</b>
              </th>
              <th>
                <b>Máxima</b>
              </th>
              <th>
                <b>Mínima</b>
              </th>
            </tr>
          </thead>
          <Tbody id="result" />
        </table>
      </TableContainer>
      <LinkButton>
        <Link to="/">Nova Consulta</Link>
      </LinkButton>
    </Content>
  );
}

/** Dada a abreviação do clima, retorna a descrição completa do clima */
function GetWeatherDescription(initials) {
  switch (initials) {
    case 'ec':
      return 'Encoberto com Chuvas Isoladas';
    case 'ci':
      return 'Chuvas Isoladas';
    case 'c:':
      return 'Chuva';
    case 'in':
      return 'Instável';
    case 'pp':
      return 'Possibilidade de Pancadas de Chuva';
    case 'cm':
      return 'Chuva pela Manhã';
    case 'cn':
      return 'Chuva pela Noite';
    case 'pt':
      return 'Pancadas de Chuva a Tarde';
    case 'pm':
      return 'Pancadas de Chuva pela Manhã';
    case 'np':
      return 'Nublado e Pancadas de Chuva';
    case 'pc':
      return 'Pancadas de Chuva';
    case 'pn':
      return 'Parcialmente Nublado';
    case 'cv':
      return 'Chuvisco';
    case 'ch':
      return 'Chuvoso';
    case 't:':
      return 'Tempestade';
    case 'ps':
      return 'Predomínio de Sol';
    case 'e"':
      return 'Encoberto';
    case 'n"':
      return 'Nublado';
    case 'cl"':
      return 'Céu Claro';
    case 'nv"':
      return 'Nevoeiro';
    case 'g':
      return 'Geada';
    case 'ne':
      return 'Neve';
    case 'pnt':
      return 'Pancadas de Chuva a Noite';
    case 'psc':
      return 'Possibilidade de Chuva';
    case 'pcm':
      return 'Possibilidade de Chuva pela Manhã';
    case 'pct':
      return 'Possibilidade de Chuva a Tarde';
    case 'pcn':
      return 'Possibilidade de Chuva a Noite';
    case 'npt':
      return 'Nublado com Pancadas a Tarde';
    case 'npn':
      return 'Nublado com Pancadas a Noite';
    case 'ncn':
      return 'Nublado com Possibilidade de Chuva a Noite';
    case 'nct':
      return 'Nublado com Possibilidade de Chuva a Tarde';
    case 'ncm':
      return 'Nublado com Possibilidade de Chuva pela Manhã';
    case 'npm':
      return 'Nublado com Pancadas pela Manhã';
    case 'npp':
      return 'Nublado com Possibilidade de Chuva';
    case 'vn':
      return 'Variação de Nebulosidade';
    case 'ct':
      return 'Chuva a Tarde';
    case 'ppn':
      return 'Possibilidade de Pancadas de Chuva a Noite';
    case 'ppt':
      return 'Possibilidade de Pancadas de Chuva a Tarde';
    case 'ppm':
      return 'Possibilidade de Pancadas de Chuva pela Manhã';
    case 'lt':
      return 'Não Definido';
    default:
      return 'Não Definido';
  }
}

/** Define a configuração da tabela para o componente do material-ui */
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});
