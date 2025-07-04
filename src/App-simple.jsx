import { useState, useEffect } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import { PokemonList } from './components/PokemonList';
import { SearchBar } from './components/SearchBar';
import { TypeFilter } from './components/TypeFilter';
import { Container, Box, Typography, IconButton, Button } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';

const queryClient = new QueryClient();

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('all');
  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: {
        main: '#FF6B6B',
      },
      secondary: {
        main: '#4ECDC4',
      },
      background: {
        default: darkMode ? '#0a0a0a' : '#f8f9fa',
        paper: darkMode ? '#1a1a1a' : '#ffffff',
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
        <Box sx={{ minHeight: '100vh', py: 4 }}>
          <Container maxWidth="lg">
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
              <Typography variant="h2" component="h1" sx={{ fontWeight: 700, color: 'primary.main' }}>
                PokéDex
              </Typography>
              <IconButton onClick={toggleDarkMode} sx={{ fontSize: '1.5rem' }}>
                {darkMode ? '☀️' : '🌙'}
              </IconButton>
            </Box>
            
            <SearchBar value={searchTerm} onChange={setSearchTerm} darkMode={darkMode} />
            <TypeFilter selectedType={selectedType} onTypeSelect={setSelectedType} darkMode={darkMode} />
            <PokemonList searchTerm={searchTerm} selectedType={selectedType} darkMode={darkMode} />
          </Container>
        </Box>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
