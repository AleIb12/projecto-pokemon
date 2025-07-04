import { Box, Button, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const types = [
  { id: 'all', name: 'Todos', icon: '🌟' },
  { id: 'grass', name: 'Planta', icon: '🌿' },
  { id: 'bug', name: 'Bicho', icon: '🐛' },
  { id: 'ground', name: 'Tierra', icon: '🗿' },
  { id: 'rock', name: 'Roca', icon: '🪨' },
  { id: 'ice', name: 'Hielo', icon: '❄️' },
  { id: 'poison', name: 'Veneno', icon: '☠️' },
  { id: 'ghost', name: 'Fantasma', icon: '👻' },
  { id: 'fairy', name: 'Hada', icon: '🧚' },
  { id: 'fire', name: 'Fuego', icon: '🔥' },
  { id: 'water', name: 'Agua', icon: '💧' },
  { id: 'electric', name: 'Eléctrico', icon: '⚡' },
  { id: 'psychic', name: 'Psíquico', icon: '🔮' },
  { id: 'fighting', name: 'Lucha', icon: '👊' },
  { id: 'dragon', name: 'Dragón', icon: '🐉' }
];

const typeColors = {
  normal: '#A8A878',
  grass: '#78C850',
  fire: '#F08030',
  water: '#6890F0',
  electric: '#F8D030',
  psychic: '#F85888',
  fighting: '#C03028',
  dragon: '#7038F8',
  bug: '#A8E65C',
  ground: '#94502D',
  rock: '#776A3E',
  ice: '#98D8D8',
  poison: '#8B008B',
  ghost: '#4B0082',
  fairy: '#FFB7FA',
  all: '#FF6B6B'
};

export const TypeFilter = ({ selectedType, onTypeSelect, darkMode }) => {
  return (
    <Box
      sx={{
        background: darkMode 
          ? 'rgba(255, 255, 255, 0.1)'
          : 'rgba(255, 255, 255, 0.8)',
        backdropFilter: 'blur(10px)',
        borderRadius: 3,
        p: 3,
        mb: 4,
        boxShadow: 3,
      }}
    >
      <Typography
        variant="h6"
        sx={{
          textAlign: 'center',
          mb: 3,
          fontWeight: 600,
          color: 'text.primary'
        }}
      >
        Filtrar por Tipo
      </Typography>
      
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 2,
          justifyContent: 'center',
        }}
      >
        {types.map((type) => (
          <motion.div
            key={type.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              variant={selectedType === type.id ? "contained" : "outlined"}
              onClick={() => onTypeSelect(type.id)}
              sx={{
                borderRadius: 20,
                textTransform: 'none',
                px: 2,
                py: 1,
                minWidth: 100,
                backgroundColor: selectedType === type.id 
                  ? typeColors[type.id] 
                  : 'transparent',
                borderColor: typeColors[type.id],
                color: selectedType === type.id ? 'white' : typeColors[type.id],
                fontWeight: 600,
                '&:hover': {
                  backgroundColor: typeColors[type.id],
                  color: 'white',
                  transform: 'translateY(-2px)',
                },
                transition: 'all 0.3s ease'
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <span>{type.icon}</span>
                <span>{type.name}</span>
              </Box>
            </Button>
          </motion.div>
        ))}
      </Box>
    </Box>
  );
};