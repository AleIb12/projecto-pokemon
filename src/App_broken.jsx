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
import './styles/globals.css';

const queryClient = new QueryClient();

// Componente de Pantalla de Carga Moderna
const LoadingScreen = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [currentText, setCurrentText] = useState(0);

  const loadingTexts = [
    'Inicializando PokéDex...',
    'Conectando con PokéAPI...',
    'Cargando Pokémon...',
    '¡Listo para la aventura!'
  ];

  useEffect(() => {
    // Simular progreso de carga
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(onLoadingComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 60);

    // Cambiar texto de carga
    const textInterval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % loadingTexts.length);
    }, 750);

    return () => {
      clearInterval(progressInterval);
      clearInterval(textInterval);
    };
  }, [onLoadingComplete]);

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        background: `
          radial-gradient(circle at 30% 20%, rgba(247, 147, 30, 0.15) 0%, transparent 50%),
          radial-gradient(circle at 70% 80%, rgba(0, 212, 170, 0.15) 0%, transparent 50%),
          radial-gradient(circle at 50% 50%, rgba(104, 109, 224, 0.1) 0%, transparent 50%),
          linear-gradient(135deg, #0D111E 0%, #1A2038 100%)
        `,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
        overflow: 'hidden'
      }}
      className="gradient-bg"
    >
      {/* Partículas flotantes de fondo */}
      <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 0 }}>
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="floating-particles"
            style={{
              position: 'absolute',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </Box>

      {/* Efecto de brillo de fondo */}
      <Box 
        className="shimmer-effect" 
        sx={{ 
          position: 'absolute', 
          top: 0, 
          left: 0, 
          right: 0, 
          bottom: 0,
          opacity: 0.2 
        }} 
      />

      {/* Contenido principal */}
      <Container maxWidth="sm" sx={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
        {/* Logo animado */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ 
            duration: 1.2, 
            ease: "easeOutBack",
            type: "spring",
            stiffness: 100
          }}
        >
          <Box sx={{ mb: 4 }}>
            <motion.div
              animate={{ 
                rotate: 360,
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
              }}
            >
              <CatchingPokemonIcon 
                sx={{ 
                  fontSize: { xs: 80, md: 120 }, 
                  color: 'var(--primary-gold)',
                  filter: 'drop-shadow(0 0 30px rgba(247, 147, 30, 0.6))',
                }} 
                className="text-glow"
              />
            </motion.div>
          </Box>
        </motion.div>

        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <Typography
            variant="h1"
            className="display-text text-glow"
            sx={{
              fontSize: { xs: '2.5rem', md: '4rem' },
              color: 'var(--primary-gold)',
              mb: 2,
              fontWeight: 700,
              letterSpacing: '-0.02em'
            }}
          >
            PokéDex
          </Typography>
        </motion.div>

        {/* Subtítulo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <Typography
            variant="h6"
            className="elegant-text"
            sx={{
              fontSize: { xs: '1rem', md: '1.3rem' },
              color: 'var(--primary-teal)',
              mb: 6,
              fontWeight: 500,
              letterSpacing: '0.05em'
            }}
          >
            Modern Pokémon Experience
          </Typography>
        </motion.div>

        {/* Barra de progreso */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <Box sx={{ mb: 3 }}>
            <Box
              className="glass-card"
              sx={{
                width: '100%',
                height: 8,
                borderRadius: '8px',
                background: 'rgba(255, 255, 255, 0.1)',
                overflow: 'hidden',
                position: 'relative'
              }}
            >
              <motion.div
                style={{
                  height: '100%',
                  background: 'linear-gradient(90deg, var(--primary-gold), var(--primary-teal), var(--primary-coral))',
                  borderRadius: '8px',
                  width: `${progress}%`,
                  boxShadow: '0 0 20px rgba(247, 147, 30, 0.5)'
                }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Efecto de brillo en la barra */}
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)',
                  animation: 'shimmer 2s ease-in-out infinite',
                  borderRadius: '8px'
                }}
              />
            </Box>
            
            {/* Porcentaje */}
            <motion.div
              key={progress}
              initial={{ scale: 1.2, opacity: 0.7 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.2 }}
            >
              <Typography
                variant="h6"
                className="mono-text"
                sx={{
                  mt: 2,
                  color: 'var(--primary-gold)',
                  fontSize: { xs: '1.2rem', md: '1.5rem' },
                  fontWeight: 600
                }}
              >
                {progress}%
              </Typography>
            </motion.div>
          </Box>
        </motion.div>

        {/* Texto de carga animado */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentText}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <Typography
                variant="body1"
                className="elegant-text"
                sx={{
                  color: 'var(--text-secondary)',
                  fontSize: { xs: '1rem', md: '1.1rem' },
                  opacity: 0.9
                }}
              >
                {loadingTexts[currentText]}
              </Typography>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Puntos de carga animados */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.5 }}
        >
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, mt: 4 }}>
            {[...Array(3)].map((_, index) => (
              <motion.div
                key={index}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.4, 1, 0.4]
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: index * 0.3
                }}
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  background: 'var(--primary-teal)'
                }}
              />
            ))}
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

// Componente Footer Moderno y Elegante
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
      className="glass-card gradient-bg"
      sx={{
        position: 'relative',
        background: darkMode 
          ? 'linear-gradient(135deg, rgba(26, 32, 56, 0.95), rgba(13, 17, 30, 0.98))'
          : 'linear-gradient(135deg, rgba(30, 39, 73, 0.95), rgba(18, 23, 40, 0.98))',
        color: 'var(--text-primary)',
        py: 8,
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '2px',
          background: 'linear-gradient(90deg, var(--primary-gold), var(--primary-teal), var(--primary-coral))',
          backgroundSize: '200% 100%',
          animation: 'gradientShift 4s ease-in-out infinite',
        }
      }}
    >
      {/* Partículas flotantes modernas */}
      <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 0 }}>
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="floating-particles"
            style={{
              position: 'absolute',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`
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
                  transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                >
                  <CatchingPokemonIcon sx={{ fontSize: 50, mr: 2, color: 'var(--primary-gold)' }} />
                </motion.div>
                <Typography 
                  variant="h4" 
                  className="display-text"
                  sx={{ 
                    color: 'var(--primary-gold)',
                    fontSize: { xs: '1.2rem', md: '1.8rem' },
                    fontWeight: 700
                  }}
                >
                  PokéDex
                </Typography>
              </Box>
              <Typography 
                variant="body1" 
                className="elegant-text"
                sx={{ 
                  mb: 3, 
                  opacity: 0.9, 
                  lineHeight: 1.7,
                  fontSize: { xs: '0.9rem', md: '1rem' },
                  color: 'var(--text-secondary)'
                }}
              >
                Modern Pokémon Experience
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography 
                  variant="body2" 
                  className="elegant-text"
                  sx={{ 
                    mr: 1,
                    fontSize: { xs: '0.8rem', md: '0.9rem' },
                    color: 'var(--text-secondary)'
                  }}
                >
                  Made with
                </Typography>
                <motion.div
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, 8, -8, 0]
                  }}
                  transition={{ 
                    duration: 2.5, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <FavoriteIcon sx={{ color: 'var(--primary-coral)', fontSize: 20, mx: 0.5 }} />
                </motion.div>
                <Typography 
                  variant="body2"
                  className="elegant-text"
                  sx={{ 
                    fontSize: { xs: '0.8rem', md: '0.9rem' },
                    color: 'var(--text-secondary)'
                  }}
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
                className="display-text"
                sx={{ 
                  color: 'var(--primary-teal)', 
                  mb: 3,
                  fontSize: { xs: '1rem', md: '1.2rem' },
                  fontWeight: 600
                }}
              >
                Quick Links
              </Typography>
              <Stack spacing={2}>
                {[
                  { text: 'Home', href: '#' },
                  { text: 'Pokémon', href: '#pokemon-section' },
                  { text: 'About', href: '#' },
                  { text: 'PokéAPI', href: 'https://pokeapi.co/', external: true }
                ].map((link, index) => (
                  <motion.div
                    key={link.text}
                    whileHover={{ x: 8 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link 
                      href={link.href}
                      target={link.external ? '_blank' : '_self'}
                      color="inherit" 
                      className="elegant-text"
                      sx={{ 
                        textDecoration: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        opacity: 0.8,
                        fontSize: { xs: '0.85rem', md: '0.95rem' },
                        color: 'var(--text-secondary)',
                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                        '&:hover': { 
                          opacity: 1,
                          color: 'var(--primary-teal)',
                          transform: 'translateX(8px)'
                        } 
                      }}
                    >
                      <Typography 
                        variant="body2"
                        className="elegant-text"
                        sx={{ fontSize: { xs: '0.85rem', md: '0.95rem' } }}
                      >
                        {link.text}
                      </Typography>
                      {link.external && (
                        <Box sx={{ ml: 1, fontSize: 14, opacity: 0.7 }}>↗</Box>
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
                className="display-text"
                sx={{ 
                  color: 'var(--primary-teal)', 
                  mb: 3,
                  fontSize: { xs: '1rem', md: '1.2rem' },
                  fontWeight: 600
                }}
              >
                Connect
              </Typography>
              <Typography 
                variant="body2" 
                className="elegant-text"
                sx={{ 
                  mb: 3, 
                  opacity: 0.9,
                  fontSize: { xs: '0.85rem', md: '0.95rem' },
                  color: 'var(--text-secondary)'
                }}
              >
                Follow for more projects
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                {socialLinks.map((social, index) => (
                  <motion.div
                    key={social.label}
                    whileHover={{ 
                      scale: 1.1,
                      rotate: 5
                    }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    <IconButton
                      href={social.href}
                      target="_blank"
                      className="glass-card"
                      sx={{
                        background: 'rgba(255, 255, 255, 0.05)',
                        color: 'var(--text-primary)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        borderRadius: '12px',
                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                        backdropFilter: 'blur(20px)',
                        '&:hover': {
                          background: 'rgba(255, 255, 255, 0.1)',
                          borderColor: social.label === 'Buy Me a Coffee' ? 'var(--primary-gold)' : 'var(--primary-teal)',
                          color: social.label === 'Buy Me a Coffee' ? 'var(--primary-gold)' : 'var(--primary-teal)',
                          boxShadow: social.label === 'Buy Me a Coffee' 
                            ? 'var(--glow-gold)'
                            : 'var(--glow-teal)',
                          transform: 'translateY(-2px)'
                        }
                      }}
                    >
                      {social.label === 'Buy Me a Coffee' ? (
                        <motion.div
                          animate={{ 
                            scale: [1, 1.05, 1],
                            rotate: [0, 3, -3, 0]
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

        {/* Divider con efectos modernos */}
        <Box sx={{ my: 6, position: 'relative' }}>
          <Divider 
            className="elegant-border"
            sx={{ 
              background: 'linear-gradient(90deg, transparent, var(--accent-blue), transparent)',
              height: '1px',
              border: 'none'
            }} 
          />
          <Box
            className="glass-card"
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              background: 'var(--dark-surface)',
              px: 3,
              py: 1.5,
              borderRadius: '16px'
            }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            >
              <CatchingPokemonIcon sx={{ fontSize: 24, color: 'var(--primary-gold)' }} />
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
              className="elegant-text"
              sx={{ 
                opacity: 0.8, 
                textAlign: { xs: 'center', md: 'left' },
                fontSize: { xs: '0.8rem', md: '0.9rem' },
                color: 'var(--text-secondary)'
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
                className="mono-text"
                sx={{ 
                  opacity: 0.8,
                  fontSize: { xs: '0.8rem', md: '0.9rem' },
                  color: 'var(--text-secondary)'
                }}
              >
                React + MUI + PokéAPI
              </Typography>
              <Box sx={{ display: 'flex', gap: 1 }}>
                {['⚛️', '🎨', '⚡'].map((emoji, index) => (
                  <motion.span
                    key={index}
                    animate={{ 
                      y: [0, -4, 0],
                      rotate: [0, 8, -8, 0]
                    }}
                    transition={{ 
                      duration: 2.5, 
                      repeat: Infinity,
                      delay: index * 0.5,
                      ease: "easeInOut"
                    }}
                    style={{ fontSize: '18px' }}
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

// Componente Hero Section Moderno
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
            radial-gradient(circle at 20% 20%, rgba(247, 147, 30, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(0, 212, 170, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(104, 109, 224, 0.1) 0%, transparent 50%),
            var(--dark-bg)
          `
          : `
            radial-gradient(circle at 20% 20%, rgba(247, 147, 30, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(0, 212, 170, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(104, 109, 224, 0.15) 0%, transparent 50%),
            var(--dark-surface)
          `,
        position: 'relative',
        overflow: 'hidden',
      }}
      className="gradient-bg"
    >
      {/* Efecto de brillo sutil */}
      <Box className="shimmer-effect" sx={{ 
        position: 'absolute', 
        top: 0, 
        left: 0, 
        right: 0, 
        bottom: 0,
        opacity: 0.3 
      }} />
      
      {/* Partículas flotantes modernas */}
      <Box sx={{ position: 'absolute', top: '20%', left: '10%' }}>
        <div className="floating-particles" />
      </Box>
      <Box sx={{ position: 'absolute', top: '60%', right: '15%' }}>
        <div className="floating-particles" style={{animationDelay: '1.5s'}} />
      </Box>
      <Box sx={{ position: 'absolute', top: '40%', left: '80%' }}>
        <div className="floating-particles" style={{animationDelay: '3s'}} />
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
                scale: [1, 1.05, 1],
                rotate: [0, 5, -5, 0]
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
                  color: 'var(--primary-gold)',
                  mb: 2,
                  filter: 'drop-shadow(0 8px 32px rgba(247, 147, 30, 0.3))',
                }} 
                className="text-glow"
              />
            </motion.div>
          </Box>
          
          <Typography
            variant="h1"
            className="display-text text-glow"
            sx={{
              fontSize: { xs: '2.5rem', md: '4.5rem' },
              color: 'var(--primary-gold)',
              mb: 2,
              fontWeight: 700,
              letterSpacing: '-0.02em'
            }}
          >
            PokéDex
          </Typography>
          
          <Typography
            variant="h4"
            className="elegant-text"
            sx={{
              fontSize: { xs: '1rem', md: '1.5rem' },
              color: 'var(--primary-teal)',
              mb: 4,
              fontWeight: 500,
              letterSpacing: '0.05em'
            }}
          >
            Gotta Catch &#39;Em All!
          </Typography>
          
          <Typography
            variant="body1"
            className="elegant-text"
            sx={{
              fontSize: { xs: '1rem', md: '1.2rem' },
              color: 'var(--text-secondary)',
              mb: 6,
              maxWidth: '600px',
              mx: 'auto',
              lineHeight: 1.7,
              opacity: 0.9
            }}
          >
            Explora la colección completa de Pokémon de la primera generación. 
            Descubre sus habilidades, tipos y estadísticas con una experiencia moderna y elegante.
          </Typography>
          
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button
              variant="contained"
              size="large"
              onClick={onExplore}
              className="modern-button"
              sx={{
                fontSize: { xs: '0.9rem', md: '1.1rem' },
                py: { xs: 2, md: 2.5 },
                px: { xs: 4, md: 5 },
                fontWeight: 600,
                textTransform: 'none',
                background: 'linear-gradient(135deg, var(--primary-gold), var(--primary-coral))',
                color: 'white',
                borderRadius: '16px',
                boxShadow: 'var(--shadow-medium)',
                border: 'none',
                '&:hover': {
                  background: 'linear-gradient(135deg, var(--primary-coral), var(--primary-teal))',
                  boxShadow: 'var(--shadow-large)',
                  transform: 'translateY(-2px)'
                }
              }}
            >
              Explorar Pokémon
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
  const [isLoading, setIsLoading] = useState(true);

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

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: {
        main: '#F7931E', // primary-gold
      },
      secondary: {
        main: '#00D4AA', // primary-teal
      },
      background: {
        default: darkMode ? '#0D111E' : '#1A2038',
        paper: darkMode ? '#1A2038' : '#2A3441',
      },
      text: {
        primary: '#FFFFFF',
        secondary: 'rgba(255, 255, 255, 0.7)',
      }
    },
    typography: {
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
      h1: {
        fontFamily: "'Playfair Display', serif",
        fontWeight: 700,
      },
      h2: {
        fontFamily: "'Playfair Display', serif",
        fontWeight: 600,
      },
      h3: {
        fontFamily: "'Playfair Display', serif",
        fontWeight: 600,
      },
      h4: {
        fontFamily: "'Inter', sans-serif",
        fontWeight: 600,
      },
      body1: {
        fontFamily: "'Inter', sans-serif",
        fontWeight: 400,
        lineHeight: 1.6,
      },
      body2: {
        fontFamily: "'Inter', sans-serif",
        fontWeight: 400,
      }
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: '12px',
            border: 'none',
            fontFamily: "'Inter', sans-serif",
            textTransform: 'none',
            fontSize: '1rem',
            fontWeight: 600,
            letterSpacing: '-0.01em',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
            '&:hover': {
              transform: 'translateY(-2px)',
              boxShadow: '0 8px 40px rgba(0, 0, 0, 0.2)',
            }
          },
        },
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            '& .MuiOutlinedInput-root': {
              borderRadius: '12px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              fontFamily: "'Inter', sans-serif",
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(10px)',
              transition: 'all 0.3s ease',
              '&:hover': {
                borderColor: 'rgba(255, 255, 255, 0.2)',
              },
              '&.Mui-focused': {
                borderColor: '#00D4AA',
                boxShadow: '0 0 0 3px rgba(0, 212, 170, 0.1)',
              }
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
        
        {/* Pantalla de Carga */}
        {isLoading && (
          <LoadingScreen onLoadingComplete={handleLoadingComplete} />
        )}
        
        {/* Contenido principal - solo se muestra después de la carga */}
        {!isLoading && (
          <>
            {showHero && (
              <HeroSection darkMode={darkMode} onExplore={handleExplore} />
            )}

            <Box
              id="pokemon-section"
              className="gradient-bg"
              sx={{
                minHeight: '100vh',
                background: darkMode 
                  ? `
                    radial-gradient(circle at 20% 20%, rgba(247, 147, 30, 0.05) 0%, transparent 50%),
                    radial-gradient(circle at 80% 80%, rgba(0, 212, 170, 0.05) 0%, transparent 50%),
                    radial-gradient(circle at 40% 40%, rgba(104, 109, 224, 0.05) 0%, transparent 50%),
                    var(--dark-bg)
                  `
                  : `
                    radial-gradient(circle at 20% 20%, rgba(247, 147, 30, 0.08) 0%, transparent 50%),
                    radial-gradient(circle at 80% 80%, rgba(0, 212, 170, 0.08) 0%, transparent 50%),
                    radial-gradient(circle at 40% 40%, rgba(104, 109, 224, 0.08) 0%, transparent 50%),
                    var(--dark-surface)
                  `,
                py: 8,
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Navbar Moderno */}
              <Box
                className="glass-card"
                sx={{
                  position: 'fixed',
                  top: 20,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  zIndex: 1000,
                  background: 'rgba(26, 32, 56, 0.8)',
                  backdropFilter: 'blur(20px)',
                  borderRadius: '20px',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  px: 3,
                  py: 1.5,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2,
                  boxShadow: 'var(--shadow-medium)'
                }}
              >
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                >
                  <CatchingPokemonIcon 
                    sx={{ 
                      color: 'var(--primary-gold)', 
                      fontSize: 30
                    }} 
                  />
                </motion.div>
                <Typography 
                  variant="h6" 
                  className="display-text"
                  sx={{ 
                    color: 'var(--primary-gold)',
                    fontSize: { xs: '1rem', md: '1.2rem' },
                    fontWeight: 600
                  }}
                >
                  PokéDex
                </Typography>
                <IconButton 
                  onClick={toggleDarkMode} 
                  className="glass-card"
                  sx={{ 
                    ml: 'auto',
                    minWidth: 'auto',
                    padding: '10px',
                    fontSize: '1.2rem',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '12px',
                    color: 'var(--text-primary)',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    '&:hover': {
                      background: 'rgba(255, 255, 255, 0.1)',
                      transform: 'scale(1.05)'
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
                    className="display-text text-glow"
                    sx={{
                      fontSize: { xs: '2rem', md: '3rem' },
                      color: 'var(--primary-teal)',
                      mb: 2,
                      fontWeight: 700,
                      letterSpacing: '-0.02em'
                    }}
                  >
                    Select Your Pokémon
                  </Typography>
                  <Typography
                    variant="h6"
                    className="elegant-text"
                    sx={{
                      color: 'var(--text-secondary)',
                      fontSize: { xs: '1rem', md: '1.2rem' },
                      maxWidth: '600px',
                      mx: 'auto',
                      lineHeight: 1.6,
                      opacity: 0.9
                    }}
                  >
                    Use our advanced search and filter system to discover your perfect companion
                  </Typography>
                </Box>
                
                <SearchBar value={searchTerm} onChange={setSearchTerm} darkMode={darkMode} />
                <TypeFilter selectedType={selectedType} onTypeSelect={setSelectedType} darkMode={darkMode} />
                <PokemonList searchTerm={searchTerm} selectedType={selectedType} darkMode={darkMode} />
              </Container>
            </Box>

            {/* Botón de scroll to top moderno */}
            {showScrollTop && (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Fab
                  color="primary"
                  onClick={scrollToTop}
                  className="glass-card"
                  sx={{
                    position: 'fixed',
                    bottom: 30,
                    right: 30,
                    zIndex: 1000,
                    borderRadius: '16px',
                    background: 'linear-gradient(135deg, var(--primary-gold), var(--primary-coral))',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(20px)',
                    boxShadow: 'var(--shadow-medium)',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    '&:hover': {
                      background: 'linear-gradient(135deg, var(--primary-coral), var(--primary-teal))',
                      boxShadow: 'var(--shadow-large)',
                      transform: 'translateY(-2px)'
                    }
                  }}
                >
                  <KeyboardArrowUpIcon 
                    sx={{ 
                      color: '#fff',
                      fontSize: 28
                    }} 
                  />
                </Fab>
              </motion.div>
            )}
          {/* Navbar Moderno */}
          <Box
            className="glass-card"
            sx={{
              position: 'fixed',
              top: 20,
              left: '50%',
              transform: 'translateX(-50%)',
              zIndex: 1000,
              background: 'rgba(26, 32, 56, 0.8)',
              backdropFilter: 'blur(20px)',
              borderRadius: '20px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              px: 3,
              py: 1.5,
              display: 'flex',
              alignItems: 'center',
              gap: 2,
              boxShadow: 'var(--shadow-medium)'
            }}
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            >
              <CatchingPokemonIcon 
                sx={{ 
                  color: 'var(--primary-gold)', 
                  fontSize: 30
                }} 
              />
            </motion.div>
            <Typography 
              variant="h6" 
              className="display-text"
              sx={{ 
                color: 'var(--primary-gold)',
                fontSize: { xs: '1rem', md: '1.2rem' },
                fontWeight: 600
              }}
            >
              PokéDex
            </Typography>
            <IconButton 
              onClick={toggleDarkMode} 
              className="glass-card"
              sx={{ 
                ml: 'auto',
                minWidth: 'auto',
                padding: '10px',
                fontSize: '1.2rem',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '12px',
                color: 'var(--text-primary)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                '&:hover': {
                  background: 'rgba(255, 255, 255, 0.1)',
                  transform: 'scale(1.05)'
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
                className="display-text text-glow"
                sx={{
                  fontSize: { xs: '2rem', md: '3rem' },
                  color: 'var(--primary-teal)',
                  mb: 2,
                  fontWeight: 700,
                  letterSpacing: '-0.02em'
                }}
              >
                Select Your Pokémon
              </Typography>
              <Typography
                variant="h6"
                className="elegant-text"
                sx={{
                  color: 'var(--text-secondary)',
                  fontSize: { xs: '1rem', md: '1.2rem' },
                  maxWidth: '600px',
                  mx: 'auto',
                  lineHeight: 1.6,
                  opacity: 0.9
                }}
              >
                Use our advanced search and filter system to discover your perfect companion
              </Typography>
            </Box>
            
            <SearchBar value={searchTerm} onChange={setSearchTerm} darkMode={darkMode} />
            <TypeFilter selectedType={selectedType} onTypeSelect={setSelectedType} darkMode={darkMode} />
            <PokemonList searchTerm={searchTerm} selectedType={selectedType} darkMode={darkMode} />
          </Container>
        </Box>

        {/* Botón de scroll to top moderno */}
        {showScrollTop && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Fab
              color="primary"
              onClick={scrollToTop}
              className="glass-card"
              sx={{
                position: 'fixed',
                bottom: 30,
                right: 30,
                zIndex: 1000,
                borderRadius: '16px',
                background: 'linear-gradient(135deg, var(--primary-gold), var(--primary-coral))',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(20px)',
                boxShadow: 'var(--shadow-medium)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                '&:hover': {
                  background: 'linear-gradient(135deg, var(--primary-coral), var(--primary-teal))',
                  boxShadow: 'var(--shadow-large)',
                  transform: 'translateY(-2px)'
                }
              }}
            >
              <KeyboardArrowUpIcon 
                sx={{ 
                  color: '#fff',
                  fontSize: 28
                }} 
              />
            </Fab>
          </motion.div>
        )}

        {/* Footer Moderno y Elegante */}
        <ImpactFooter darkMode={darkMode} />
      </>
    )}
  </ThemeProvider>
</QueryClientProvider>
  );
}

export default App;
