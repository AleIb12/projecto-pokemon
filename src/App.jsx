import { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import { PokemonList } from './components/PokemonList';
import { SearchBar } from './components/SearchBar';
import { TypeFilter } from './components/TypeFilter';
import { Container, Box, Typography, IconButton } from '@mui/material';

const queryClient = new QueryClient();

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('all');
  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: {
        main: '#06d6a0',
      },
      secondary: {
        main: '#56cbf9',
      },
      background: {
        default: darkMode ? '#121212' : 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
        paper: darkMode ? '#1e1e1e' : 'rgba(255, 255, 255, 0.7)',
      },
    },
    typography: {
      fontFamily: "'Poppins', sans-serif",
    },
  });

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
            width: '100%',
            margin: 0,
            padding: 0,
            backgroundColor: darkMode ? '#121212' : 'transparent',
            background: darkMode ? 'none' : 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
          }}
        >
          <Box component="main" sx={{ flexGrow: 1, width: '100%', pb: 4 }}>
            <Container maxWidth="lg" sx={{ pt: 4 }}>
              <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 4, position: 'relative' }}>
                <Typography
                  variant="h3"
                  component="h1"
                  sx={{
                    textAlign: 'center',
                    color: 'primary.main',
                    fontWeight: 600,
                  }}
                >
                  Pokémon Cards
                </Typography>
                <IconButton 
                  onClick={toggleDarkMode} 
                  sx={{ 
                    position: 'absolute',
                    right: 0,
                    backgroundColor: darkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
                    color: darkMode ? 'white' : 'black',
                    '&:hover': {
                      backgroundColor: darkMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.2)',
                    },
                    borderRadius: '50%',
                    padding: 1
                  }}
                  aria-label="toggle dark mode"
                >
                  {darkMode ? '☀️' : '🌙'}
                </IconButton>
              </Box>

              <SearchBar value={searchTerm} onChange={setSearchTerm} darkMode={darkMode} />
              <TypeFilter selectedType={selectedType} onTypeSelect={setSelectedType} darkMode={darkMode} />
              <PokemonList searchTerm={searchTerm} selectedType={selectedType} darkMode={darkMode} />
            </Container>
          </Box>
          <Box
            component="footer"
            sx={{
              py: 3,
              px: 2,
              mt: 'auto',
              backgroundColor: darkMode ? 'rgba(0, 0, 0, 0.8)' : 'rgba(8, 65, 92, 0.95)',
              backdropFilter: 'blur(10px)',
              color: 'white',
              textAlign: 'center',
              width: '100%',
            }}
          >
            <Typography variant="body1">
              © 2024 Alisha Ibarra
            </Typography>
          </Box>
        </Box>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
