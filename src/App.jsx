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

// Componente Footer Impactante Pixel Art
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
      className="pixel-border"
      sx={{
        position: 'relative',
        background: darkMode 
          ? 'linear-gradient(145deg, #111, #000)'
          : 'linear-gradient(145deg, #333, #222)',
        color: '#FFD700',
        py: 8,
        overflow: 'hidden',
        borderRadius: 0,
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: 'repeating-linear-gradient(90deg, #FF6B6B 0px, #FF6B6B 10px, #4ECDC4 10px, #4ECDC4 20px, #FFD700 20px, #FFD700 30px)',
          animation: 'pixelScan 4s linear infinite',
        }
      }}
    >
      {/* Partículas pixeladas de fondo */}
      <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 0 }}>
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="pixel-particles"
            style={{
              position: 'absolute',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`
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
                <Typography 
                  variant="h4" 
                  className="pixel-text"
                  sx={{ 
                    color: '#FFD700',
                    fontSize: { xs: '1rem', md: '1.5rem' }
                  }}
                >
                  PokéDex
                </Typography>
              </Box>
              <Typography 
                variant="body1" 
                className="pixel-text"
                sx={{ 
                  mb: 3, 
                  opacity: 0.9, 
                  lineHeight: 1.6,
                  fontSize: { xs: '0.6rem', md: '0.8rem' }
                }}
              >
                Retro Pokémon Experience
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography 
                  variant="body2" 
                  className="pixel-text"
                  sx={{ 
                    mr: 1,
                    fontSize: { xs: '0.5rem', md: '0.6rem' }
                  }}
                >
                  Made with
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
                <Typography 
                  variant="body2"
                  className="pixel-text"
                  sx={{ fontSize: { xs: '0.5rem', md: '0.6rem' } }}
                >
                  by Alisha
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
              <Typography 
                variant="h6" 
                className="pixel-text"
                sx={{ 
                  color: '#4ECDC4', 
                  mb: 3,
                  fontSize: { xs: '0.8rem', md: '1rem' }
                }}
              >
                Quick Links
              </Typography>
              <Stack spacing={2}>
                {[
                  { text: 'Home', href: '#' },
                  { text: 'Pokémon', href: '#pokemon-section' },
                  { text: 'About', href: '#' },
                  { text: 'PokeAPI', href: 'https://pokeapi.co/', external: true }
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
                      className="pixel-button"
                      sx={{ 
                        textDecoration: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        opacity: 0.8,
                        fontSize: { xs: '0.5rem', md: '0.6rem' },
                        transition: 'all 0.3s ease',
                        '&:hover': { 
                          opacity: 1,
                          color: '#4ECDC4',
                          transform: 'translateX(5px)'
                        } 
                      }}
                    >
                      <Typography 
                        variant="body2"
                        className="pixel-text"
                        sx={{ fontSize: { xs: '0.5rem', md: '0.6rem' } }}
                      >
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
              <Typography 
                variant="h6" 
                className="pixel-text"
                sx={{ 
                  color: '#4ECDC4', 
                  mb: 3,
                  fontSize: { xs: '0.8rem', md: '1rem' }
                }}
              >
                Connect
              </Typography>
              <Typography 
                variant="body2" 
                className="pixel-text"
                sx={{ 
                  mb: 3, 
                  opacity: 0.9,
                  fontSize: { xs: '0.5rem', md: '0.6rem' }
                }}
              >
                Follow for more projects
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
                      className="pixel-button"
                      sx={{
                        background: 'rgba(255, 255, 255, 0.1)',
                        color: 'white',
                        border: '2px solid #333',
                        borderRadius: 0,
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

        {/* Divider con efectos pixelados */}
        <Box sx={{ my: 6, position: 'relative' }}>
          <Divider 
            className="pixel-border-inset"
            sx={{ 
              background: 'repeating-linear-gradient(90deg, #333 0px, #333 4px, #555 4px, #555 8px)',
              height: '4px',
              borderRadius: 0
            }} 
          />
          <Box
            className="pixel-border"
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              background: darkMode ? '#111' : '#333',
              px: 2,
              py: 1,
              borderRadius: 0
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
            <Typography 
              variant="body2" 
              className="pixel-text"
              sx={{ 
                opacity: 0.8, 
                textAlign: { xs: 'center', md: 'left' },
                fontSize: { xs: '0.5rem', md: '0.6rem' }
              }}
            >
              © 2024 Alisha Ibarra
            </Typography>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Typography 
                variant="body2" 
                className="pixel-text"
                sx={{ 
                  opacity: 0.8,
                  fontSize: { xs: '0.5rem', md: '0.6rem' }
                }}
              >
                React + MUI + PokeAPI
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
          ? `
            radial-gradient(circle at 20% 20%, #ff6b6b11 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, #4ecdc411 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, #45b7d111 0%, transparent 50%),
            #0a0a0a
          `
          : `
            radial-gradient(circle at 20% 20%, #ff6b6b22 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, #4ecdc422 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, #45b7d122 0%, transparent 50%),
            #1a1a2e
          `,
        position: 'relative',
        overflow: 'hidden',
      }}
      className="pixel-bg-pattern"
    >
      {/* Línea de escaneo retro */}
      <div className="scan-line" />
      
      {/* Partículas pixeladas */}
      <Box sx={{ position: 'absolute', top: '20%', left: '10%' }}>
        <div className="pixel-particles" />
      </Box>
      <Box sx={{ position: 'absolute', top: '60%', right: '15%' }}>
        <div className="pixel-particles" style={{animationDelay: '1s'}} />
      </Box>
      <Box sx={{ position: 'absolute', top: '40%', left: '80%' }}>
        <div className="pixel-particles" style={{animationDelay: '2s'}} />
      </Box>

      <Container maxWidth="lg" sx={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <Box sx={{ mb: 4 }}>
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 10, -10, 0]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <CatchingPokemonIcon 
                sx={{ 
                  fontSize: 120, 
                  color: '#FFD700',
                  mb: 2,
                  filter: 'drop-shadow(4px 4px 0 rgba(0,0,0,0.5))',
                  imageRendering: 'pixelated'
                }} 
              />
            </motion.div>
          </Box>
          
          <Typography
            variant="h1"
            className="pixel-text pixel-text-glow"
            sx={{
              fontSize: { xs: '2rem', md: '4rem' },
              color: '#FFD700',
              mb: 2,
              textTransform: 'uppercase',
              filter: 'drop-shadow(4px 4px 0 rgba(0,0,0,0.8))'
            }}
          >
            PokéDex Retro
          </Typography>
          
          <Typography
            variant="h4"
            className="pixel-text"
            sx={{
              fontSize: { xs: '0.8rem', md: '1.2rem' },
              color: '#4ECDC4',
              mb: 4,
              textTransform: 'uppercase',
              letterSpacing: '3px'
            }}
          >
            Gotta Catch &#39;Em All!
          </Typography>
          
          <Typography
            variant="body1"
            className="pixel-text"
            sx={{
              fontSize: { xs: '0.6rem', md: '0.8rem' },
              color: 'rgba(255,255,255,0.8)',
              mb: 6,
              maxWidth: '600px',
              mx: 'auto',
              letterSpacing: '1px'
            }}
          >
            Explora la colección completa de Pokémon de la primera generación. 
            Descubre sus habilidades, tipos y estadísticas.
          </Typography>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              variant="contained"
              size="large"
              onClick={onExplore}
              className="pixel-button"
              sx={{
                fontSize: { xs: '0.6rem', md: '0.8rem' },
                py: { xs: 1.5, md: 2 },
                px: { xs: 3, md: 4 },
                bgcolor: '#FF6B6B',
                color: '#fff',
                border: '4px solid #333',
                borderRadius: 0,
                fontFamily: 'Press Start 2P, monospace',
                textTransform: 'uppercase',
                letterSpacing: '2px',
                '&:hover': {
                  bgcolor: '#FF5252',
                  transform: 'translate(2px, 2px)',
                }
              }}
            >
              ¡Start Game!
            </Button>
          </motion.div>
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
        default: darkMode ? '#0a0a0a' : '#1a1a2e',
        paper: darkMode ? '#111' : '#333',
      },
    },
    typography: {
      fontFamily: "'Press Start 2P', monospace",
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 0,
            border: '4px solid #333',
            fontFamily: "'Press Start 2P', monospace",
            textTransform: 'uppercase',
            fontSize: '0.6rem',
            letterSpacing: '2px',
          },
        },
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            '& .MuiOutlinedInput-root': {
              borderRadius: 0,
              border: '4px solid #333',
              fontFamily: "'Press Start 2P', monospace",
            },
          },
        },
      },
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
          className="pixel-bg-pattern"
          sx={{
            minHeight: '100vh',
            background: darkMode 
              ? `
                radial-gradient(circle at 20% 20%, #ff6b6b11 0%, transparent 50%),
                radial-gradient(circle at 80% 80%, #4ecdc411 0%, transparent 50%),
                radial-gradient(circle at 40% 40%, #45b7d111 0%, transparent 50%),
                #0a0a0a
              `
              : `
                radial-gradient(circle at 20% 20%, #ff6b6b22 0%, transparent 50%),
                radial-gradient(circle at 80% 80%, #4ecdc422 0%, transparent 50%),
                radial-gradient(circle at 40% 40%, #45b7d122 0%, transparent 50%),
                #1a1a2e
              `,
            py: 8,
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Navbar Pixel Art */}
          <Box
            className="pixel-border"
            sx={{
              position: 'fixed',
              top: 20,
              left: '50%',
              transform: 'translateX(-50%)',
              zIndex: 1000,
              background: darkMode 
                ? 'linear-gradient(145deg, #222, #111)' 
                : 'linear-gradient(145deg, #555, #333)',
              borderRadius: 0,
              px: 3,
              py: 1.5,
              display: 'flex',
              alignItems: 'center',
              gap: 2,
              animation: 'pixelGlow 3s ease-in-out infinite'
            }}
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <CatchingPokemonIcon 
                sx={{ 
                  color: '#FFD700', 
                  fontSize: 30,
                  filter: 'drop-shadow(2px 2px 0 rgba(0,0,0,0.5))'
                }} 
              />
            </motion.div>
            <Typography 
              variant="h6" 
              className="pixel-text"
              sx={{ 
                color: '#FFD700',
                fontSize: { xs: '0.6rem', md: '0.8rem' },
                textTransform: 'uppercase'
              }}
            >
              PokéDex
            </Typography>
            <IconButton 
              onClick={toggleDarkMode} 
              className="pixel-button"
              sx={{ 
                ml: 'auto',
                minWidth: 'auto',
                padding: '8px',
                fontSize: '1rem',
                border: '2px solid #333',
                bgcolor: darkMode ? '#444' : '#666',
                '&:hover': {
                  bgcolor: darkMode ? '#555' : '#777',
                }
              }}
            >
              {darkMode ? '☀️' : '🌙'}
            </IconButton>
          </Box>

          <Container maxWidth="lg" sx={{ pt: 12 }}>
            <Box sx={{ textAlign: 'center', mb: 6 }}>
              <Typography
                variant="h2"
                className="pixel-text pixel-text-glow"
                sx={{
                  fontSize: { xs: '1.5rem', md: '2.5rem' },
                  color: '#4ECDC4',
                  mb: 2,
                  textTransform: 'uppercase'
                }}
              >
                Select Your Pokémon
              </Typography>
              <Typography
                variant="h6"
                className="pixel-text"
                sx={{
                  color: 'rgba(255,255,255,0.8)',
                  fontSize: { xs: '0.6rem', md: '0.8rem' },
                  maxWidth: '600px',
                  mx: 'auto',
                  letterSpacing: '1px'
                }}
              >
                Use Search & Filter System
              </Typography>
            </Box>
            
            <SearchBar value={searchTerm} onChange={setSearchTerm} darkMode={darkMode} />
            <TypeFilter selectedType={selectedType} onTypeSelect={setSelectedType} darkMode={darkMode} />
            <PokemonList searchTerm={searchTerm} selectedType={selectedType} darkMode={darkMode} />
          </Container>
        </Box>

        {/* Botón de scroll to top pixel art */}
        {showScrollTop && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Fab
              color="primary"
              onClick={scrollToTop}
              className="pixel-border"
              sx={{
                position: 'fixed',
                bottom: 30,
                right: 30,
                zIndex: 1000,
                borderRadius: 0,
                background: 'linear-gradient(145deg, #FF6B6B, #FF5252)',
                border: '4px solid #333',
                animation: 'pixelPulse 2s ease-in-out infinite',
                '&:hover': {
                  background: 'linear-gradient(145deg, #FF5252, #FF6B6B)',
                }
              }}
            >
              <KeyboardArrowUpIcon 
                sx={{ 
                  color: '#fff',
                  filter: 'drop-shadow(2px 2px 0 rgba(0,0,0,0.5))'
                }} 
              />
            </Fab>
          </motion.div>
        )}

        {/* Footer Impactante */}
        <ImpactFooter darkMode={darkMode} />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
