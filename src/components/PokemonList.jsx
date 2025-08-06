import { useQuery } from '@tanstack/react-query';
import { Box, Card, CardContent, CardMedia, Typography, Grid, Chip, Skeleton, LinearProgress } from '@mui/material';
import { motion } from 'framer-motion';
import { useState } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import ShieldIcon from '@mui/icons-material/Shield';

const TOTAL_POKEMONS = 151;

const fetchPokemonData = async (id) => {
  const [pokemonData, speciesData] = await Promise.all([
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(res => res.json()),
    fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`).then(res => res.json())
  ]);
  
  const descripcion = speciesData.flavor_text_entries
    .find(entry => entry.language.name === "es")?.flavor_text
    .replace(/\f/g, ' ') || "Descripción no disponible";
  
  return { ...pokemonData, descripcion };
};

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
  fairy: '#FFB7FA'
};

const PokemonCard = ({ pokemon, darkMode }) => {
  const [isHovered, setIsHovered] = useState(false);
  const mainType = pokemon.types[0].type.name;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Card
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          background: darkMode 
            ? `linear-gradient(145deg, ${typeColors[mainType]}20 0%, ${typeColors[mainType]}40 100%)`
            : `linear-gradient(145deg, ${typeColors[mainType]}30 0%, ${typeColors[mainType]}50 100%)`,
          borderRadius: 3,
          boxShadow: isHovered ? `0 10px 30px ${typeColors[mainType]}40` : 3,
          transition: 'all 0.3s ease',
          border: `2px solid ${typeColors[mainType]}60`,
        }}
      >
        <CardMedia
          component="img"
          image={pokemon.sprites.other['official-artwork'].front_default}
          alt={pokemon.name}
          sx={{
            p: 2,
            objectFit: 'contain',
            height: 200,
            filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.2))',
          }}
        />
        
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography 
            variant="h6" 
            component="h2" 
            gutterBottom 
            sx={{ 
              textTransform: 'capitalize', 
              fontWeight: 600,
              textAlign: 'center',
              mb: 2
            }}
          >
            {pokemon.name}
          </Typography>
          
          <Box sx={{ display: 'flex', gap: 1, mb: 2, flexWrap: 'wrap', justifyContent: 'center' }}>
            {pokemon.types.map((type) => (
              <Chip
                key={type.type.name}
                label={type.type.name}
                sx={{
                  backgroundColor: typeColors[type.type.name],
                  color: 'white',
                  textTransform: 'capitalize',
                  fontWeight: 500
                }}
              />
            ))}
          </Box>
          
          <Typography 
            variant="body2" 
            sx={{ 
              mb: 2, 
              textAlign: 'center',
              color: 'text.secondary',
              fontSize: '0.9rem'
            }}
          >
            {pokemon.descripcion}
          </Typography>
          
          <Box sx={{ mt: 'auto' }}>
            <Typography variant="body2" sx={{ fontWeight: 600, mb: 1 }}>
              Estadísticas:
            </Typography>
            
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                <FavoriteIcon sx={{ fontSize: 14, color: '#FF6B6B' }} />
                <Typography variant="body2">HP: {pokemon.stats[0].base_stat}</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                <FlashOnIcon sx={{ fontSize: 14, color: '#FFD700' }} />
                <Typography variant="body2">ATK: {pokemon.stats[1].base_stat}</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                <ShieldIcon sx={{ fontSize: 14, color: '#4ECDC4' }} />
                <Typography variant="body2">DEF: {pokemon.stats[2].base_stat}</Typography>
              </Box>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export const PokemonList = ({ searchTerm, darkMode }) => {
  const { data: pokemons = [], isLoading } = useQuery({
    queryKey: ['pokemons'],
    queryFn: async () => {
      const promises = Array.from({ length: TOTAL_POKEMONS }, (_, i) => 
        fetchPokemonData(i + 1)
      );
      const results = await Promise.all(promises);
      return results.sort((a, b) => a.name.localeCompare(b.name));
    },
    staleTime: Infinity,
  });

  const filteredPokemons = pokemons.filter(pokemon => {
    const matchesSearch = pokemon.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSearch;
  });

  if (isLoading) {
    return (
      <Box>
        <Typography variant="h6" sx={{ mb: 3, textAlign: 'center' }}>
          Cargando Pokémon...
        </Typography>
        <Grid container spacing={3}>
          {[...Array(12)].map((_, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Skeleton 
                variant="rectangular" 
                height={400} 
                sx={{ borderRadius: 2 }} 
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    );
  }

  return (
    <Box>
      <Typography 
        variant="h6" 
        sx={{ 
          mb: 3, 
          textAlign: 'center',
          color: 'text.secondary'
        }}
      >
        {filteredPokemons.length === 0 
          ? 'No se encontraron Pokémon' 
          : `${filteredPokemons.length} Pokémon encontrados`}
      </Typography>
      
      <Grid container spacing={3}>
        {filteredPokemons.map((pokemon) => (
          <Grid item xs={12} sm={6} md={4} key={pokemon.name}>
            <PokemonCard pokemon={pokemon} darkMode={darkMode} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};