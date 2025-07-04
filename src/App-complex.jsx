import { useState, useEffect } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import { PokemonList } from './components/PokemonList';
import { SearchBar } from './components/SearchBar';
import { TypeFilter } from './components/TypeFilter';
import { Container, Box, Typography, IconButton, Link, Stack, Divider, Button, Fab } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';

const queryClient = new QueryClient();

// Componente Hero Section
const HeroSection = ({ darkMode, onExplore }) => {
  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: darkMode 
          ? 'linear-gradient(135deg, #0f0f0f 0%, #1a1a2e 50%, #16213e 100%)'
          : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: darkMode 
            ? 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)'
            : 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.3) 0%, transparent 50%)',
          animation: 'pulse 4s ease-in-out infinite',
        },
        '@keyframes pulse': {
          '0%, 100%': { opacity: 0.5 },
          '50%': { opacity: 1 }
        }
      }}
    >
      <Container maxWidth="lg" sx={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <Box sx={{ mb: 4 }}>
            <motion.div
              animate={{ 
                rotateY: [0, 360],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <CatchingPokemonIcon 
                sx={{ 
                  fontSize: 120, 
                  color: '#FFD700',
                  filter: 'drop-shadow(0 0 20px rgba(255,215,0,0.8))',
                  mb: 2
                }} 
              />
            </motion.div>
          </Box>
          
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '3rem', md: '5rem' },
              fontWeight: 800,
              background: 'linear-gradient(45deg, #FFD700, #FFA500, #FF6347)',
              backgroundSize: '400% 400%',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              animation: 'gradientShift 3s ease infinite',
              mb: 2,
              '@keyframes gradientShift': {
                '0%': { backgroundPosition: '0% 50%' },
                '50%': { backgroundPosition: '100% 50%' },
                '100%': { backgroundPosition: '0% 50%' }
              }
            }}
          >
            PokéDex
          </Typography>
          
          <Typography
            variant="h4"
            sx={{
              fontSize: { xs: '1.5rem', md: '2rem' },
              fontWeight: 300,
              color: darkMode ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.95)',
              mb: 4,
              textShadow: '0 2px 4px rgba(0,0,0,0.3)'
            }}
          >
            Descubre el mundo de los Pokémon
          </Typography>
          
          <Typography
            variant="body1"
            sx={{
              fontSize: '1.2rem',
              color: darkMode ? 'rgba(255,255,255,0.7)' : 'rgba(255,255,255,0.8)',
              mb: 6,
              maxWidth: '600px',
              mx: 'auto'
            }}
          >
            Explora la colección completa de Pokémon de la primera generación. 
            Descubre sus habilidades, tipos y estadísticas en una experiencia interactiva única.
          </Typography>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              variant="contained"
              size="large"
              onClick={onExplore}
              sx={{
                fontSize: '1.2rem',
                py: 2,
                px: 4,
                borderRadius: 50,
                background: 'linear-gradient(45deg, #FF6B6B, #4ECDC4)',
                boxShadow: '0 8px 32px rgba(255,107,107,0.3)',
                '&:hover': {
                  background: 'linear-gradient(45deg, #FF5252, #26C6DA)',
                  boxShadow: '0 12px 40px rgba(255,107,107,0.4)',
                  transform: 'translateY(-2px)'
                }
              }}
            >
              ¡Comenzar Aventura!
            </Button>
          </motion.div>
        </motion.div>
      </Container>
      
      {/* Pokéballs flotantes */}
      <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 0 }}>
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            style={{
              position: 'absolute',
              width: 60,
              height: 60,
              borderRadius: '50%',
              background: 'linear-gradient(45deg, #FF6B6B 50%, #FFF 50%)',
              border: '3px solid #333',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: 0.1
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 360],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('all');
  const [darkMode, setDarkMode] = useState(false);
  const [showHero, setShowHero] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleExplore = () => {
    setShowHero(false);
    setTimeout(() => {
      document.getElementById('pokemon-section').scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: {
        main: '#FF6B6B',
        dark: '#FF5252',
        light: '#FF8A80'
      },
      secondary: {
        main: '#4ECDC4',
        dark: '#26C6DA',
        light: '#4DD0E1'
      },
      background: {
        default: darkMode ? '#0a0a0a' : '#f8f9fa',
        paper: darkMode ? 'rgba(18, 18, 18, 0.9)' : 'rgba(255, 255, 255, 0.9)',
      },
      text: {
        primary: darkMode ? '#ffffff' : '#2d3436',
        secondary: darkMode ? 'rgba(255, 255, 255, 0.7)' : 'rgba(45, 52, 54, 0.7)'
      }
    },
    typography: {
      fontFamily: "'Poppins', 'Inter', sans-serif",
      h1: {
        fontWeight: 800,
      },
      h2: {
        fontWeight: 700,
      },
      h3: {
        fontWeight: 600,
      }
    },
    components: {
      MuiCard: {
        styleOverrides: {
          root: {
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255,255,255,0.1)',
          }
        }
      }
    }
  });

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        
        <AnimatePresence mode="wait">
          {showHero && (
            <motion.div
              key="hero"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
            >
              <HeroSection darkMode={darkMode} onExplore={handleExplore} />
            </motion.div>
          )}
        </AnimatePresence>

        <Box
          id="pokemon-section"
          sx={{
            minHeight: '100vh',
            background: darkMode 
              ? 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)'
              : 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
            position: 'relative',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: darkMode 
                ? 'radial-gradient(circle at 20% 80%, rgba(255,107,107,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(78,205,196,0.1) 0%, transparent 50%)'
                : 'radial-gradient(circle at 20% 80%, rgba(255,107,107,0.05) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(78,205,196,0.05) 0%, transparent 50%)',
              pointerEvents: 'none'
            }
          }}
        >
          {/* Navbar flotante */}
          <Box
            sx={{
              position: 'fixed',
              top: 20,
              left: '50%',
              transform: 'translateX(-50%)',
              zIndex: 1000,
              background: darkMode 
                ? 'rgba(0, 0, 0, 0.8)'
                : 'rgba(255, 255, 255, 0.9)',
              backdropFilter: 'blur(20px)',
              borderRadius: 25,
              px: 3,
              py: 1,
              boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
              border: darkMode 
                ? '1px solid rgba(255,255,255,0.1)'
                : '1px solid rgba(0,0,0,0.1)',
              display: 'flex',
              alignItems: 'center',
              gap: 2
            }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <CatchingPokemonIcon sx={{ color: 'primary.main', fontSize: 30 }} />
            </motion.div>
            
            <Typography variant="h6" sx={{ fontWeight: 600, color: 'text.primary' }}>
              PokéDex
            </Typography>
            
            <Box sx={{ ml: 'auto' }}>
              <IconButton 
                onClick={toggleDarkMode} 
                sx={{ 
                  background: darkMode 
                    ? 'rgba(255, 255, 255, 0.1)' 
                    : 'rgba(0, 0, 0, 0.1)',
                  '&:hover': {
                    background: darkMode 
                      ? 'rgba(255, 255, 255, 0.2)' 
                      : 'rgba(0, 0, 0, 0.2)',
                  },
                  transition: 'all 0.3s ease'
                }}
              >
                <motion.div
                  animate={{ rotate: darkMode ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {darkMode ? '☀️' : '🌙'}
                </motion.div>
              </IconButton>
            </Box>
          </Box>

          <Container maxWidth="lg" sx={{ pt: 12, pb: 8, position: 'relative', zIndex: 1 }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Box sx={{ textAlign: 'center', mb: 6 }}>
                <Typography
                  variant="h2"
                  sx={{
                    fontSize: { xs: '2.5rem', md: '3.5rem' },
                    fontWeight: 700,
                    background: 'linear-gradient(45deg, #FF6B6B, #4ECDC4)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    color: 'transparent',
                    mb: 2
                  }}
                >
                  Explora Pokémon
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    color: 'text.secondary',
                    maxWidth: '600px',
                    mx: 'auto'
                  }}
                >
                  Busca, filtra y descubre todos los Pokémon de la primera generación
                </Typography>
              </Box>
              
              <Box sx={{ mb: 4 }}>
                <SearchBar value={searchTerm} onChange={setSearchTerm} darkMode={darkMode} />
              </Box>
              
              <Box sx={{ mb: 6 }}>
                <TypeFilter selectedType={selectedType} onTypeSelect={setSelectedType} darkMode={darkMode} />
              </Box>
              
              <PokemonList searchTerm={searchTerm} selectedType={selectedType} darkMode={darkMode} />
            </motion.div>
          </Container>
        </Box>

        {/* Botón de scroll to top */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              style={{
                position: 'fixed',
                bottom: 30,
                right: 30,
                zIndex: 1000
              }}
            >
              <Fab
                color="primary"
                onClick={scrollToTop}
                sx={{
                  background: 'linear-gradient(45deg, #FF6B6B, #4ECDC4)',
                  '&:hover': {
                    background: 'linear-gradient(45deg, #FF5252, #26C6DA)',
                    transform: 'scale(1.1)'
                  },
                  transition: 'all 0.3s ease'
                }}
              >
                <KeyboardArrowUpIcon />
              </Fab>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Footer mejorado */}
        <Box
          component="footer"
          sx={{
            background: darkMode 
              ? 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)'
              : 'linear-gradient(135deg, #2d3436 0%, #636e72 100%)',
            color: 'white',
            py: 6,
            position: 'relative',
            overflow: 'hidden',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '2px',
              background: 'linear-gradient(90deg, #FF6B6B, #4ECDC4, #FF6B6B)',
              backgroundSize: '200% 100%',
              animation: 'gradientMove 3s linear infinite',
              '@keyframes gradientMove': {
                '0%': { backgroundPosition: '0% 0%' },
                '100%': { backgroundPosition: '200% 0%' }
              }
            }
          }}
        >
          <Container maxWidth="lg">
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: { xs: 3, md: 0 } }}>
                <CatchingPokemonIcon sx={{ fontSize: 40, mr: 2, color: '#FFD700' }} />
                <Typography variant="h5" sx={{ fontWeight: 700 }}>
                  PokéDex
                </Typography>
              </Box>
              
              <Stack direction="row" spacing={4}>
                <Link href="#" color="inherit" sx={{ 
                  textDecoration: 'none', 
                  transition: 'all 0.3s ease',
                  '&:hover': { 
                    color: '#4ECDC4',
                    transform: 'translateY(-2px)'
                  } 
                }}>
                  Inicio
                </Link>
                <Link href="#" color="inherit" sx={{ 
                  textDecoration: 'none', 
                  transition: 'all 0.3s ease',
                  '&:hover': { 
                    color: '#4ECDC4',
                    transform: 'translateY(-2px)'
                  } 
                }}>
                  Acerca de
                </Link>
                <Link href="https://pokeapi.co/" target="_blank" color="inherit" sx={{ 
                  textDecoration: 'none', 
                  transition: 'all 0.3s ease',
                  '&:hover': { 
                    color: '#4ECDC4',
                    transform: 'translateY(-2px)'
                  } 
                }}>
                  PokeAPI
                </Link>
              </Stack>
            </Box>
            
            <Divider sx={{ background: 'rgba(255, 255, 255, 0.2)', my: 3 }} />
            
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography variant="body2" sx={{ opacity: 0.8 }}>
                © 2024 Alisha Ibarra. Todos los derechos reservados.
              </Typography>
              
              <Typography variant="body2" sx={{ opacity: 0.8, mt: { xs: 2, md: 0 } }}>
                Hecho con ❤️ para todos los entrenadores Pokémon
              </Typography>
            </Box>
          </Container>
        </Box>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
