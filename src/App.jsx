import { useState, useEffect } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import { PokemonList } from './components/PokemonList';
import { SearchBar } from './components/SearchBar';
import { TypeFilter } from './components/TypeFilter';
import { Container, Box, Typography, IconButton, Button, Fab, Link, Stack, Divider, Grid } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import LocalCafeIcon from '@mui/icons-material/LocalCafe';
import FavoriteIcon from '@mui/icons-material/Favorite';

const queryClient = new QueryClient();

// Componente Footer Impactante
const ImpactFooter = ({ darkMode }) => {
  const socialLinks = [
    { icon: GitHubIcon, href: 'https://github.com/AleIb12', label: 'GitHub' },
    { icon: InstagramIcon, href: 'https://instagram.com/ali.ibarrabello', label: 'Instagram' },
    { icon: LinkedInIcon, href: 'https://www.linkedin.com/in/alisha-ibarra-bello-4526561b6', label: 'LinkedIn' },
    { icon: EmailIcon, href: 'mailto:ibarrabelloalisha@gmail.com', label: 'Email' },
    { icon: LocalCafeIcon, href: 'https://buymeacoffee.com/ali.ibarra', label: 'Buy Me a Coffee' },
  ];

  return (
    <Box
      component="footer"
      sx={{
        position: 'relative',
        background: darkMode 
          ? 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)'
          : 'linear-gradient(135deg, #2d3436 0%, #636e72 100%)',
        color: 'white',
        py: 8,
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '3px',
          background: 'linear-gradient(90deg, #FF6B6B, #4ECDC4, #FFD700, #FF6B6B)',
          backgroundSize: '300% 100%',
          animation: 'gradientMove 4s ease-in-out infinite',
          '@keyframes gradientMove': {
            '0%': { backgroundPosition: '0% 0%' },
            '50%': { backgroundPosition: '100% 0%' },
            '100%': { backgroundPosition: '0% 0%' }
          }
        }
      }}
    >
      {/* Elementos flotantes de fondo */}
      <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 0 }}>
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            style={{
              position: 'absolute',
              width: 40 + Math.random() * 20,
              height: 40 + Math.random() * 20,
              borderRadius: '50%',
              background: `linear-gradient(45deg, ${
                ['#FF6B6B', '#4ECDC4', '#FFD700', '#FF6B6B'][Math.floor(Math.random() * 4)]
              }20, transparent)`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: 0.1
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 20, 0],
              rotate: [0, 180, 360],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3
            }}
          />
        ))}
      </Box>

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        {/* Sección principal del footer */}
        <Grid container spacing={4}>
          {/* Columna izquierda - Branding */}
          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                >
                  <CatchingPokemonIcon sx={{ fontSize: 50, mr: 2, color: '#FFD700' }} />
                </motion.div>
                <Typography variant="h4" sx={{ fontWeight: 800, color: '#FFD700' }}>
                  PokéDex
                </Typography>
              </Box>
              <Typography variant="body1" sx={{ mb: 3, opacity: 0.9, lineHeight: 1.6 }}>
                La mejor experiencia para descubrir y explorar el fascinante mundo de los Pokémon. 
                Construido con amor y tecnología moderna.
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography variant="body2" sx={{ mr: 1 }}>
                  Hecho con
                </Typography>
                <motion.div
                  animate={{ 
                    scale: [1, 1.3, 1],
                    rotate: [0, 10, -10, 0]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <FavoriteIcon sx={{ color: '#FF6B6B', fontSize: 20, mx: 0.5 }} />
                </motion.div>
                <Typography variant="body2">
                  por Alisha Ibarra
                </Typography>
              </Box>
            </motion.div>
          </Grid>

          {/* Columna central - Enlaces rápidos */}
          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 3, color: '#4ECDC4' }}>
                Enlaces Rápidos
              </Typography>
              <Stack spacing={2}>
                {[
                  { text: 'Inicio', href: '#' },
                  { text: 'Pokémon', href: '#pokemon-section' },
                  { text: 'Acerca de', href: '#' },
                  { text: 'PokeAPI', href: 'https://pokeapi.co/', external: true },
                  { text: 'Documentación', href: '#' }
                ].map((link, index) => (
                  <motion.div
                    key={link.text}
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link 
                      href={link.href}
                      target={link.external ? '_blank' : '_self'}
                      color="inherit" 
                      sx={{ 
                        textDecoration: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        opacity: 0.8,
                        transition: 'all 0.3s ease',
                        '&:hover': { 
                          opacity: 1,
                          color: '#4ECDC4',
                          transform: 'translateX(5px)'
                        } 
                      }}
                    >
                      <Typography variant="body2">
                        {link.text}
                      </Typography>
                      {link.external && (
                        <Box sx={{ ml: 1, fontSize: 12 }}>↗</Box>
                      )}
                    </Link>
                  </motion.div>
                ))}
              </Stack>
            </motion.div>
          </Grid>

          {/* Columna derecha - Redes sociales */}
          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 3, color: '#4ECDC4' }}>
                Conecta Conmigo
              </Typography>
              <Typography variant="body2" sx={{ mb: 3, opacity: 0.9 }}>
                Sígueme en mis redes sociales para más proyectos increíbles
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                {socialLinks.map((social, index) => (
                  <motion.div
                    key={social.label}
                    whileHover={{ 
                      scale: 1.2,
                      rotate: 10
                    }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                  >
                    <IconButton
                      href={social.href}
                      target="_blank"
                      sx={{
                        background: 'rgba(255, 255, 255, 0.1)',
                        color: 'white',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          background: 'rgba(255, 255, 255, 0.2)',
                          borderColor: social.label === 'Buy Me a Coffee' ? '#FFDD00' : '#4ECDC4',
                          color: social.label === 'Buy Me a Coffee' ? '#FFDD00' : '#4ECDC4',
                          boxShadow: social.label === 'Buy Me a Coffee' 
                            ? '0 0 20px rgba(255, 221, 0, 0.3)'
                            : '0 0 20px rgba(78, 205, 196, 0.3)'
                        }
                      }}
                    >
                      {social.label === 'Buy Me a Coffee' ? (
                        <motion.div
                          animate={{ 
                            scale: [1, 1.1, 1],
                            rotate: [0, 5, -5, 0]
                          }}
                          transition={{ 
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        >
                          <social.icon />
                        </motion.div>
                      ) : (
                        <social.icon />
                      )}
                    </IconButton>
                  </motion.div>
                ))}
              </Box>
            </motion.div>
          </Grid>
        </Grid>

        {/* Divider con efectos */}
        <Box sx={{ my: 6, position: 'relative' }}>
          <Divider sx={{ 
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
            height: '1px'
          }} />
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              background: darkMode ? '#1a1a2e' : '#2d3436',
              px: 3,
              py: 1,
              borderRadius: 20,
              border: '1px solid rgba(255, 255, 255, 0.2)'
            }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <CatchingPokemonIcon sx={{ fontSize: 20, color: '#FFD700' }} />
            </motion.div>
          </Box>
        </Box>

        {/* Sección inferior */}
        <Box sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', md: 'row' }, 
          justifyContent: 'space-between', 
          alignItems: 'center',
          gap: 2
        }}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Typography variant="body2" sx={{ opacity: 0.8, textAlign: { xs: 'center', md: 'left' } }}>
              © 2024 Alisha Ibarra. Todos los derechos reservados.
            </Typography>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Typography variant="body2" sx={{ opacity: 0.8 }}>
                Desarrollado con React, Material-UI & PokeAPI
              </Typography>
              <Box sx={{ display: 'flex', gap: 1 }}>
                {['⚛️', '🎨', '⚡'].map((emoji, index) => (
                  <motion.span
                    key={index}
                    animate={{ 
                      y: [0, -5, 0],
                      rotate: [0, 10, -10, 0]
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity,
                      delay: index * 0.5
                    }}
                    style={{ fontSize: '16px' }}
                  >
                    {emoji}
                  </motion.span>
                ))}
              </Box>
            </Box>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

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
      }}
    >
      <Container maxWidth="lg" sx={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <Box sx={{ mb: 4 }}>
            <CatchingPokemonIcon 
              sx={{ 
                fontSize: 120, 
                color: '#FFD700',
                mb: 2
              }} 
            />
          </Box>
          
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '3rem', md: '5rem' },
              fontWeight: 800,
              color: '#FFD700',
              mb: 2
            }}
          >
            PokéDex
          </Typography>
          
          <Typography
            variant="h4"
            sx={{
              fontSize: { xs: '1.5rem', md: '2rem' },
              fontWeight: 300,
              color: 'white',
              mb: 4
            }}
          >
            Descubre el mundo de los Pokémon
          </Typography>
          
          <Typography
            variant="body1"
            sx={{
              fontSize: '1.2rem',
              color: 'rgba(255,255,255,0.8)',
              mb: 6,
              maxWidth: '600px',
              mx: 'auto'
            }}
          >
            Explora la colección completa de Pokémon de la primera generación. 
            Descubre sus habilidades, tipos y estadísticas.
          </Typography>
          
          <Button
            variant="contained"
            size="large"
            onClick={onExplore}
            sx={{
              fontSize: '1.2rem',
              py: 2,
              px: 4,
              borderRadius: 50,
              bgcolor: '#FF6B6B',
              '&:hover': {
                bgcolor: '#FF5252',
              }
            }}
          >
            ¡Comenzar Aventura!
          </Button>
        </motion.div>
      </Container>
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
      const element = document.getElementById('pokemon-section');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

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
        
        {showHero && (
          <HeroSection darkMode={darkMode} onExplore={handleExplore} />
        )}

        <Box
          id="pokemon-section"
          sx={{
            minHeight: '100vh',
            background: darkMode 
              ? 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%)'
              : 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
            py: 8
          }}
        >
          {/* Navbar */}
          <Box
            sx={{
              position: 'fixed',
              top: 20,
              left: '50%',
              transform: 'translateX(-50%)',
              zIndex: 1000,
              background: darkMode ? 'rgba(0, 0, 0, 0.8)' : 'rgba(255, 255, 255, 0.9)',
              backdropFilter: 'blur(20px)',
              borderRadius: 25,
              px: 3,
              py: 1,
              display: 'flex',
              alignItems: 'center',
              gap: 2
            }}
          >
            <CatchingPokemonIcon sx={{ color: 'primary.main', fontSize: 30 }} />
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              PokéDex
            </Typography>
            <IconButton onClick={toggleDarkMode} sx={{ ml: 'auto' }}>
              {darkMode ? '☀️' : '🌙'}
            </IconButton>
          </Box>

          <Container maxWidth="lg" sx={{ pt: 12 }}>
            <Box sx={{ textAlign: 'center', mb: 6 }}>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                  fontWeight: 700,
                  color: 'primary.main',
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
            
            <SearchBar value={searchTerm} onChange={setSearchTerm} darkMode={darkMode} />
            <TypeFilter selectedType={selectedType} onTypeSelect={setSelectedType} darkMode={darkMode} />
            <PokemonList searchTerm={searchTerm} selectedType={selectedType} darkMode={darkMode} />
          </Container>
        </Box>

        {/* Botón de scroll to top */}
        {showScrollTop && (
          <Fab
            color="primary"
            onClick={scrollToTop}
            sx={{
              position: 'fixed',
              bottom: 30,
              right: 30,
              zIndex: 1000
            }}
          >
            <KeyboardArrowUpIcon />
          </Fab>
        )}

        {/* Footer Impactante */}
        <ImpactFooter darkMode={darkMode} />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
