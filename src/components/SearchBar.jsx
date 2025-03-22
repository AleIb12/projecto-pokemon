import { TextField, Box } from '@mui/material';
import { motion } from 'framer-motion';

export const SearchBar = ({ value, onChange, darkMode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Box sx={{ maxWidth: 500, mx: 'auto', mb: 4 }}>
        <TextField
          fullWidth
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Buscar Pokémon..."
          variant="outlined"
          sx={{
            '& .MuiOutlinedInput-root': {
              backgroundColor: darkMode ? 'rgba(30, 30, 30, 0.9)' : 'rgba(255, 255, 255, 0.9)',
              backdropFilter: 'blur(5px)',
              borderRadius: '25px',
              '&:hover': {
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'primary.main',
                }
              },
              '&.Mui-focused': {
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'primary.main',
                  borderWidth: 2,
                }
              }
            },
            '& .MuiInputBase-input': {
              color: darkMode ? 'rgba(255, 255, 255, 0.9)' : 'inherit'
            }
          }}
        />
      </Box>
    </motion.div>
  );
};