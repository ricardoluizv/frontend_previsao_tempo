import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { WiCloudy } from 'react-icons/wi';

import Routes from './routes';
import GlobalStyle from './styles/global';

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

function App() {
  const classes = useStyles();

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <WiCloudy size="40px" />
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          />
          <Typography variant="h6" className={classes.title}>
            Previsão do Tempo
          </Typography>
        </Toolbar>
      </AppBar>
      <Routes />
      <GlobalStyle />
    </>
  );
}

export default App;
