import { useQuery } from '@tanstack/react-query';
import { Box, Card, CardContent, CardMedia, Typography, Grid, Chip, Skeleton } from '@mui/material';
import { motion } from 'framer-motion';

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
  const mainType = pokemon.types[0].type.name;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
    >
      <Card
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          background: darkMode 
            ? `linear-gradient(145deg, ${typeColors[mainType]}11 0%, ${typeColors[mainType]}33 100%)`
            : `linear-gradient(145deg, ${typeColors[mainType]}22 0%, ${typeColors[mainType]}44 100%)`,
          borderRadius: 4,
          boxShadow: 3,
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            background: darkMode ? 'rgba(0, 0, 0, 0.4)' : 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(5px)',
          }
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
        <CardContent sx={{ flexGrow: 1, position: 'relative', zIndex: 1 }}>
          <Typography variant="h5" component="h2" gutterBottom sx={{ textTransform: 'capitalize', fontWeight: 600 }}>
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
                }}
              />
            ))}
          </Box>
          <Typography variant="body2" color={darkMode ? "rgba(255, 255, 255, 0.7)" : "text.secondary"} sx={{ mb: 2 }}>
            {pokemon.descripcion}
          </Typography>
          <Box 
            sx={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              mt: 'auto',
              backgroundColor: darkMode ? 'rgba(0, 0, 0, 0.3)' : 'rgba(255, 255, 255, 0.5)',
              p: 1.5,
              borderRadius: 2
            }}
          >
            <Typography variant="body2">HP: {pokemon.stats[0].base_stat}</Typography>
            <Typography variant="body2">ATK: {pokemon.stats[1].base_stat}</Typography>
            <Typography variant="body2">DEF: {pokemon.stats[2].base_stat}</Typography>
          </Box>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export const PokemonList = ({ searchTerm, selectedType, darkMode }) => {
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
    const matchesType = selectedType === 'all' || pokemon.types.some(type => type.type.name === selectedType);
    return matchesSearch && matchesType;
  });

  if (isLoading) {
    return (
      <Grid container spacing={3}>
        {[...Array(12)].map((_, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Skeleton variant="rectangular" height={400} sx={{ 
              borderRadius: 2,
              bgcolor: darkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'
            }} />
          </Grid>
        ))}
      </Grid>
    );
  }

  return (
    <Grid container spacing={3}>
      {filteredPokemons.map((pokemon) => (
        <Grid item xs={12} sm={6} md={4} key={pokemon.name}>
          <PokemonCard pokemon={pokemon} darkMode={darkMode} />
        </Grid>
      ))}
    </Grid>
  );
};