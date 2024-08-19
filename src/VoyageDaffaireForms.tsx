import React from 'react';
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Checkbox,
  FormGroup,
  FormControlLabel,
  Button,
  Typography,
  Box,
  TextareaAutosize,
} from '@mui/material';

function VoyageDaffaireForms() {
  return (
    <Box
      component="form"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        maxWidth: '600px',
        margin: 'auto',
        color: '#000',
      }}
    >
      <Typography variant="h5" align="center" gutterBottom sx={{ color: '#000' }}>
        Voyage d'affaire en Algérie
      </Typography>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <Typography component="label" sx={{ width: '200px', color: '#000' }}>
          Nom de Contact <span style={{ color: 'red' }}>*</span>:
        </Typography>
        <TextField
          required
          variant="outlined"
          fullWidth
        />
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <Typography component="label" sx={{ width: '200px', color: '#000' }}>
          Poste <span style={{ color: 'red' }}>*</span>:
        </Typography>
        <TextField
          required
          variant="outlined"
          fullWidth
        />
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <Typography component="label" sx={{ width: '200px', color: '#000' }}>
          Nom d'entreprise <span style={{ color: 'red' }}>*</span>:
        </Typography>
        <TextField
          required
          variant="outlined"
          fullWidth
        />
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <Typography component="label" sx={{ width: '200px', color: '#000' }}>
          Email <span style={{ color: 'red' }}>*</span>:
        </Typography>
        <TextField
          type="email"
          required
          variant="outlined"
          fullWidth
        />
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <Typography component="label" sx={{ width: '200px',color:"#000" }}>
          Tél / Whatsapp / Wechat <span style={{color:'red'}}>*</span>:
        </Typography>
        <TextField
          required
          variant="outlined"
          fullWidth
        />
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <Typography component="label" sx={{ width: '200px', color: '#000' }}>
          Wilaya Algérienne à visiter <span style={{ color: 'red' }}>*</span>:
        </Typography>
        <FormControl required fullWidth variant="outlined">
          <Select defaultValue="Alger">
            <MenuItem value="Alger">Alger</MenuItem>
            <MenuItem value="Oran">Oran</MenuItem>
            <MenuItem value="Constantine">Constantine</MenuItem>
            <MenuItem value="Setif">Sétif</MenuItem>
            <MenuItem value="Annaba">Annaba</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Typography variant="h6" align="left" gutterBottom sx={{ color: '#000' }}>
        Service Demandé <span style={{ color: 'red' }}>*</span>:
      </Typography>
      <FormGroup sx={{ marginLeft: '200px' }}>
        <FormControlLabel control={<Checkbox />} label="Agence de voyage" />
        <FormControlLabel control={<Checkbox />} label="Compagnie aérienne" />
        <FormControlLabel control={<Checkbox />} label="Hôtel" />
        <FormControlLabel control={<Checkbox />} label="Transport local (chauffeur, location de voiture)" />
        <FormControlLabel control={<Checkbox />} label="Guide local" />
        <FormControlLabel control={<Checkbox />} label="Cabinet de conseil" />
        <FormControlLabel control={<Checkbox />} label="Avocat d'affaires" />
        <FormControlLabel control={<Checkbox />} label="Conseiller juridique" />
        <FormControlLabel control={<Checkbox />} label="Services de traduction/interprète" />
        <FormControlLabel control={<Checkbox />} label="Service de sécurité" />
        <FormControlLabel
          control={<Checkbox />}
          label="Autres (spécifiez)"
        />
      </FormGroup>
  

      <Box sx={{ display: 'flex', marginLeft: '200px' }}>
        <TextareaAutosize
          minRows={4}
          placeholder="Autres (spécifiez)"
          style={{
            width: '100%',
            borderRadius: '4px',
            padding: '10px',
            fontSize: '16px',
            borderColor: '#c4c4c4',
            borderWidth: 1,
            borderStyle: 'solid',
          }}
        />
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <FormControlLabel
          control={<Checkbox required />}
          label={<span style={{ color: '#000' }}>Je déclare lu et accepter la politique de confidentialité <span style={{ color: 'red' }}>*</span></span>}
        />
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, marginTop: 2 }}>
        <Button variant="contained" color="success" size="large" sx={{ backgroundColor: '#27ae60' }}>
          Envoyer
        </Button>
        <Button variant="contained" color="warning" size="large" sx={{ backgroundColor: '#e67e22' }}>
          Réinitialiser
        </Button>
      </Box>
      </Box>
   
  );
}

export default VoyageDaffaireForms;
