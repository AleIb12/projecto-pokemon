import { Box, Button } from '@mui/material';
import { motion } from 'framer-motion';

const types = [
  { id: 'all', name: 'Todos' },
  { id: 'grass', name: 'Planta' },
  { id: 'bug', name: 'Bicho' },
  { id: 'ground', name: 'Tierra' },
  { id: 'rock', name: 'Roca' },
  { id: 'ice', name: 'Hielo' },
  { id: 'poison', name: 'Veneno' },
  { id: 'ghost', name: 'Fantasma' },
  { id: 'fairy', name: 'Hada' },
  { id: 'fire', name: 'Fuego' },
  { id: 'water', name: 'Agua' },
  { id: 'electric', name: 'Eléctrico' },
  { id: 'psychic', name: 'Psíquico' },
  { id: 'fighting', name: 'Lucha' },
  { id: 'dragon', name: 'Dragón' }
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
  all: '#06d6a0'
};

export const TypeFilter = ({ selectedType, onTypeSelect, darkMode }) => {
  return (
    <Box
      sx={{
        backgroundColor: darkMode ? 'rgba(30, 30, 30, 0.7)' : 'rgba(255, 255, 255, 0.7)',
        backdropFilter: 'blur(10px)',
        padding: 3,
        borderRadius: 2,
        marginBottom: 4,
        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 1,
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
                borderRadius: '20px',
                textTransform: 'none',
                px: 2,
                backgroundColor: selectedType === type.id ? typeColors[type.id] : 'transparent',
                borderColor: typeColors[type.id],
                color: selectedType === type.id ? 'white' : typeColors[type.id],
                '&:hover': {
                  backgroundColor: typeColors[type.id],
                  color: 'white',
                  borderColor: typeColors[type.id],
                },
              }}
            >
              {type.name}
            </Button>
          </motion.div>
        ))}
      </Box>
    </Box>
  );
};