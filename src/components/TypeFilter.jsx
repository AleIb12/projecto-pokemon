import { Box, Button, Typography, Chip } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import FilterListIcon from '@mui/icons-material/FilterList';

const types = [
  { id: 'all', name: 'Todos', icon: '🌟', gradient: 'linear-gradient(135deg, #F7931E, #FF6B9D)' },
  { id: 'grass', name: 'Planta', icon: '🌿', gradient: 'linear-gradient(135deg, #78C850, #9DD866)' },
  { id: 'bug', name: 'Bicho', icon: '🐛', gradient: 'linear-gradient(135deg, #A8E65C, #7FB34C)' },
  { id: 'ground', name: 'Tierra', icon: '🗿', gradient: 'linear-gradient(135deg, #94502D, #B8743D)' },
  { id: 'rock', name: 'Roca', icon: '🪨', gradient: 'linear-gradient(135deg, #776A3E, #94844E)' },
  { id: 'ice', name: 'Hielo', icon: '❄️', gradient: 'linear-gradient(135deg, #98D8D8, #B8E8E8)' },
  { id: 'poison', name: 'Veneno', icon: '☠️', gradient: 'linear-gradient(135deg, #8B008B, #A020A0)' },
  { id: 'ghost', name: 'Fantasma', icon: '👻', gradient: 'linear-gradient(135deg, #4B0082, #6A4C93)' },
  { id: 'fairy', name: 'Hada', icon: '🧚', gradient: 'linear-gradient(135deg, #FFB7FA, #E06AC7)' },
  { id: 'fire', name: 'Fuego', icon: '🔥', gradient: 'linear-gradient(135deg, #F08030, #FF6B4A)' },
  { id: 'water', name: 'Agua', icon: '💧', gradient: 'linear-gradient(135deg, #6890F0, #4FC3F7)' },
  { id: 'electric', name: 'Eléctrico', icon: '⚡', gradient: 'linear-gradient(135deg, #F8D030, #FFF176)' },
  { id: 'psychic', name: 'Psíquico', icon: '🔮', gradient: 'linear-gradient(135deg, #F85888, #FF7FB8)' },
  { id: 'fighting', name: 'Lucha', icon: '👊', gradient: 'linear-gradient(135deg, #C03028, #E53E3E)' },
  { id: 'dragon', name: 'Dragón', icon: '🐉', gradient: 'linear-gradient(135deg, #7038F8, #9C88FF)' },
  { id: 'normal', name: 'Normal', icon: '⭐', gradient: 'linear-gradient(135deg, #A8A878, #C2C09A)' },
  { id: 'flying', name: 'Volador', icon: '🦅', gradient: 'linear-gradient(135deg, #A890F0, #C7B8FF)' },
  { id: 'steel', name: 'Acero', icon: '⚔️', gradient: 'linear-gradient(135deg, #B7B7CE, #D1D1E0)' },
  { id: 'dark', name: 'Siniestro', icon: '🌑', gradient: 'linear-gradient(135deg, #705848, #8B7355)' }
];

export const TypeFilter = ({ selectedType, onTypeSelect, darkMode }) => {
  console.log('TypeFilter rendering with types:', types.length); // Debug log
  console.log('Selected type:', selectedType);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOutBack"
      }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <Box
        className="glass-card"
        sx={{
          background: darkMode 
            ? 'rgba(26, 32, 56, 0.8)'
            : 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '24px',
          p: { xs: 3, md: 4 },
          mb: 6,
          boxShadow: '0 8px 40px rgba(0, 0, 0, 0.12)',
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '2px',
            background: 'linear-gradient(90deg, #F7931E, #00D4AA, #FF6B9D)',
            backgroundSize: '200% 100%',
            animation: 'gradientShift 4s ease-in-out infinite',
          }
        }}
      >
        {/* Partículas flotantes de fondo */}
        <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 0, opacity: 0.3 }}>
          {[...Array(3)].map((_, i) => (
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

        {/* Título del filtro */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 4, position: 'relative', zIndex: 1 }}>
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <FilterListIcon 
                sx={{ 
                  mr: 2, 
                  color: '#F7931E',
                  fontSize: 32
                }} 
              />
            </motion.div>
            <Typography
              variant="h4"
              className="display-text text-glow"
              sx={{
                fontWeight: 700,
                fontSize: { xs: '1.5rem', md: '2rem' },
                color: '#F7931E',
                letterSpacing: '-0.01em'
              }}
            >
              Filtrar por Tipo
            </Typography>
          </Box>
        </motion.div>

        {/* Contador de selección */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3, position: 'relative', zIndex: 1 }}>
            <Chip
              label={selectedType === 'all' ? 'Mostrando todos los tipos' : `Filtrado por: ${types.find(t => t.id === selectedType)?.name || 'Tipo'}`}
              className="glass-card"
              sx={{
                background: 'rgba(255, 255, 255, 0.1)',
                color: '#FFFFFF',
                fontWeight: 600,
                border: '1px solid rgba(255, 255, 255, 0.2)',
                backdropFilter: 'blur(10px)',
                fontSize: '0.9rem',
                height: 36,
                '& .MuiChip-label': {
                  px: 2
                }
              }}
            />
          </Box>
        </motion.div>
        
        {/* Grid de tipos */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: 'repeat(auto-fit, minmax(140px, 1fr))',
              sm: 'repeat(auto-fit, minmax(160px, 1fr))',
              md: 'repeat(auto-fit, minmax(180px, 1fr))'
            },
            gap: { xs: 2, md: 3 },
            justifyItems: 'center',
            position: 'relative',
            zIndex: 1
          }}
        >
          <AnimatePresence>
            {types.map((type, index) => (
              <motion.div
                key={type.id}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  y: -5,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
                style={{ width: '100%' }}
              >
                <Button
                  variant="contained"
                  onClick={() => onTypeSelect(type.id)}
                  className={selectedType === type.id ? "glass-card" : ""}
                  sx={{
                    width: '100%',
                    minHeight: 60,
                    borderRadius: '16px',
                    textTransform: 'none',
                    position: 'relative',
                    overflow: 'hidden',
                    background: selectedType === type.id 
                      ? type.gradient
                      : 'rgba(255, 255, 255, 0.05)',
                    border: selectedType === type.id 
                      ? 'none'
                      : '1px solid rgba(255, 255, 255, 0.1)',
                    color: selectedType === type.id ? 'white' : '#FFFFFF',
                    fontWeight: 600,
                    fontSize: { xs: '0.85rem', md: '0.95rem' },
                    backdropFilter: 'blur(10px)',
                    boxShadow: selectedType === type.id 
                      ? '0 8px 40px rgba(0, 0, 0, 0.12)'
                      : '0 4px 20px rgba(0, 0, 0, 0.08)',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    '&::before': selectedType === type.id ? {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: 'rgba(255, 255, 255, 0.1)',
                      opacity: 0,
                      transition: 'opacity 0.3s ease',
                    } : {},
                    '&:hover': {
                      background: type.gradient,
                      color: 'white',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 12px 60px rgba(0, 0, 0, 0.2)',
                      '&::before': {
                        opacity: 1
                      }
                    },
                    '&:active': {
                      transform: 'translateY(0px)'
                    }
                  }}
                >
                  <Box 
                    sx={{ 
                      display: 'flex', 
                      flexDirection: 'column',
                      alignItems: 'center', 
                      gap: 1,
                      position: 'relative',
                      zIndex: 1
                    }}
                  >
                    <motion.span
                      animate={selectedType === type.id ? {
                        scale: [1, 1.2, 1],
                        rotate: [0, 10, -10, 0]
                      } : {}}
                      transition={{
                        duration: 2,
                        repeat: selectedType === type.id ? Infinity : 0,
                        ease: "easeInOut"
                      }}
                      style={{ fontSize: '1.5rem' }}
                    >
                      {type.icon}
                    </motion.span>
                    <span className="elegant-text">{type.name}</span>
                  </Box>

                  {/* Efecto de brillo */}
                  {selectedType === type.id && (
                    <Box
                      className="shimmer-effect"
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        opacity: 0.3,
                        pointerEvents: 'none'
                      }}
                    />
                  )}
                </Button>
              </motion.div>
            ))}
          </AnimatePresence>
        </Box>

        {/* Indicador de tipos disponibles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Box sx={{ mt: 4, textAlign: 'center', position: 'relative', zIndex: 1 }}>
            <Typography
              variant="body2"
              className="elegant-text"
              sx={{
                color: 'rgba(255, 255, 255, 0.7)',
                opacity: 0.8,
                fontSize: '0.9rem'
              }}
            >
              {types.length} tipos disponibles • Haz clic para filtrar
            </Typography>
          </Box>
        </motion.div>
      </Box>
    </motion.div>
  );
};