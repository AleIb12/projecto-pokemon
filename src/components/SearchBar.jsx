import { TextField, Box, InputAdornment } from '@mui/material';
import { motion } from 'framer-motion';
import SearchIcon from '@mui/icons-material/Search';

export const SearchBar = ({ value, onChange, darkMode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
    >
      <Box sx={{ maxWidth: 600, mx: 'auto', mb: 4 }}>
        <TextField
          fullWidth
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Buscar tu Pokémon favorito..."
          variant="outlined"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <motion.div
                  animate={{ rotate: value ? 360 : 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <SearchIcon sx={{ color: 'primary.main' }} />
                </motion.div>
              </InputAdornment>
            ),
          }}
          sx={{
            '& .MuiOutlinedInput-root': {
              background: darkMode 
                ? 'rgba(255, 255, 255, 0.1)'
                : 'rgba(255, 255, 255, 0.9)',
              backdropFilter: 'blur(20px)',
              borderRadius: 25,
              border: darkMode 
                ? '1px solid rgba(255, 255, 255, 0.2)'
                : '1px solid rgba(0, 0, 0, 0.1)',
              boxShadow: darkMode
                ? '0 8px 32px rgba(0, 0, 0, 0.3)'
                : '0 8px 32px rgba(0, 0, 0, 0.1)',
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'translateY(-2px)',
                boxShadow: darkMode
                  ? '0 12px 40px rgba(0, 0, 0, 0.4)'
                  : '0 12px 40px rgba(0, 0, 0, 0.15)',
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'primary.main',
                  borderWidth: 2,
                }
              },
              '&.Mui-focused': {
                transform: 'translateY(-2px)',
                boxShadow: darkMode
                  ? '0 12px 40px rgba(255, 107, 107, 0.3)'
                  : '0 12px 40px rgba(255, 107, 107, 0.2)',
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'primary.main',
                  borderWidth: 2,
                }
              },
              '& .MuiOutlinedInput-notchedOutline': {
                border: 'none',
              }
            },
            '& .MuiInputBase-input': {
              color: darkMode ? 'rgba(255, 255, 255, 0.9)' : 'inherit',
              fontSize: '1.1rem',
              fontWeight: 500,
              '&::placeholder': {
                color: darkMode ? 'rgba(255, 255, 255, 0.6)' : 'rgba(0, 0, 0, 0.6)',
                opacity: 1
              }
            }
          }}
        />
      </Box>
    </motion.div>
  );
};