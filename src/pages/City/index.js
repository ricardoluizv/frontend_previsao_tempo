import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import { Content, AutoComplete } from './styled';
import apiWeather from '../../services/api';

// Define as configurações dos componentes do material-ui
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  textF: {
    '& > *': {
      margin: theme.spacing(1),
      width: 400,
    },
  },
  btnSearch: {
    '& > *': {
      margin: theme.spacing(1),
      width: 100,
    },
  },
}));

function City() {
  // Carrega os estilos a serem aplicados no html
  const classes = useStyles();

  // Este evento é disparado toda vez que o usuário digita no campo de texto(txtCity)
  async function txtCityOnChange(e) {
    // Carrega a api das cidades de acordo com a cidade digita
    // const cities = await apiWeather.get(`/city/${e}`);

    let cities = await apiWeather.get(`/cidade/${e}`);

    if (cities === undefined || cities === '') {
      return;
    }

    // Converte o json em objeto
    cities = JSON.parse(cities.data);

    let html = '<div>';

    for (let i = 0; i < cities.length; i++) {
      html += '<ul>';
      html += `<a href="/previsao_do_tempo/${cities[i].id}">`;
      html += `<li>${cities[i].nome} | UF: ${cities[i].uf}<br>/previsao_do_tempo/${cities[i].id}<li>`;
      html += '</a>';
      html += '</ul>';
    }

    html += '</div>';

    // Coloca na tela as listas da cidades pesquisadas
    document.getElementById('cities').innerHTML = html;
  }

  return (
    <Content>
      <p>Informe o nome da cidade</p>

      <div>
        <TextField
          className={classes.textF}
          label="Nome da cidade"
          variant="outlined"
          onChange={e => txtCityOnChange(e.target.value)}
          name="txtCity"
        />
      </div>
      <AutoComplete id="cities" />
    </Content>
  );
}
export default City;
