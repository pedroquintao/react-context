//?Como substituir os imports do curso corretamente: https://cursos.alura.com.br/forum/topico-sugestao-para-quem-nao-esta-conseguindo-iniciar-o-projeto-325450

import { useState } from 'react'
import './App.css'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { StyledEngineProvider } from '@mui/material/styles'
import AppRouter from './routes';

function App() {

  const theme = createTheme({
    palette: {
      primary: {
        main: '#2A9F85'
      },
      secondary: {
        main: '#FF7070'
      },
    }
  })

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <AppRouter />
      </ThemeProvider>
    </StyledEngineProvider>
  )
}

export default App
