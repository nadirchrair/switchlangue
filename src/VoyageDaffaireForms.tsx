import React from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
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

// Define the shape of your form data
interface FormData {
  nomContact: string;
  poste: string;
  nomEntreprise: string;
  email: string;
  telephone: string;
  wilaya: string;
  services: string[];
  autres: string;
  policyAccepted: boolean;
}

function VoyageDaffaireForms() {
  const { handleSubmit, control, reset } = useForm<FormData>();

  // Define the onSubmit function with the correct type
  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
    // Handle form submission, e.g., send data to API
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
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
        <Controller
          name="nomContact"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              required
              variant="outlined"
              fullWidth
            />
          )}
        />
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <Typography component="label" sx={{ width: '200px', color: '#000' }}>
          Poste <span style={{ color: 'red' }}>*</span>:
        </Typography>
        <Controller
          name="poste"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              required
              variant="outlined"
              fullWidth
            />
          )}
        />
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <Typography component="label" sx={{ width: '200px', color: '#000' }}>
          Nom d'entreprise <span style={{ color: 'red' }}>*</span>:
        </Typography>
        <Controller
          name="nomEntreprise"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              required
              variant="outlined"
              fullWidth
            />
          )}
        />
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <Typography component="label" sx={{ width: '200px', color: '#000' }}>
          Email <span style={{ color: 'red' }}>*</span>:
        </Typography>
        <Controller
          name="email"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              type="email"
              required
              variant="outlined"
              fullWidth
            />
          )}
        />
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <Typography component="label" sx={{ width: '200px', color: '#000' }}>
          Tél / Whatsapp / Wechat <span style={{ color: 'red' }}>*</span>:
        </Typography>
        <Controller
          name="telephone"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              required
              variant="outlined"
              fullWidth
            />
          )}
        />
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <Typography component="label" sx={{ width: '200px', color: '#000' }}>
          Wilaya Algérienne à visiter <span style={{ color: 'red' }}>*</span>:
        </Typography>
        <FormControl required fullWidth variant="outlined">
          <Controller
            name="wilaya"
            control={control}
            defaultValue="Alger"
            render={({ field }) => (
              <Select {...field}>
                <MenuItem value="Alger">Alger</MenuItem>
                <MenuItem value="Oran">Oran</MenuItem>
                <MenuItem value="Constantine">Constantine</MenuItem>
                <MenuItem value="Setif">Sétif</MenuItem>
                <MenuItem value="Annaba">Annaba</MenuItem>
              </Select>
            )}
          />
        </FormControl>
      </Box>

      <Typography variant="h6" align="left" gutterBottom sx={{ color: '#000' }}>
        Service Demandé <span style={{ color: 'red' }}>*</span>:
      </Typography>
      <FormGroup sx={{ marginLeft: '200px' }}>
        <Controller
          name="services"
          control={control}
          defaultValue={[]}
          render={({ field }) => (
            <>
              <FormControlLabel control={<Checkbox {...field} value="Agence de voyage" />} label="Agence de voyage" />
              <FormControlLabel control={<Checkbox {...field} value="Compagnie aérienne" />} label="Compagnie aérienne" />
              <FormControlLabel control={<Checkbox {...field} value="Hôtel" />} label="Hôtel" />
              <FormControlLabel control={<Checkbox {...field} value="Transport local (chauffeur, location de voiture)" />} label="Transport local (chauffeur, location de voiture)" />
              <FormControlLabel control={<Checkbox {...field} value="Guide local" />} label="Guide local" />
              <FormControlLabel control={<Checkbox {...field} value="Cabinet de conseil" />} label="Cabinet de conseil" />
              <FormControlLabel control={<Checkbox {...field} value="Avocat d'affaires" />} label="Avocat d'affaires" />
              <FormControlLabel control={<Checkbox {...field} value="Conseiller juridique" />} label="Conseiller juridique" />
              <FormControlLabel control={<Checkbox {...field} value="Services de traduction/interprète" />} label="Services de traduction/interprète" />
              <FormControlLabel control={<Checkbox {...field} value="Service de sécurité" />} label="Service de sécurité" />
              <FormControlLabel control={<Checkbox {...field} value="Autres" />} label="Autres (spécifiez)" />
            </>
          )}
        />
      </FormGroup>

      <Box sx={{ display: 'flex', marginLeft: '200px' }}>
        <Controller
          name="autres"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextareaAutosize
              {...field}
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
          )}
        />
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <Controller
          name="policyAccepted"
          control={control}
          defaultValue={false}
          render={({ field }) => (
            <FormControlLabel
              control={<Checkbox {...field} required />}
              label={<span style={{ color: '#000' }}>Je déclare lu et accepter la politique de confidentialité <span style={{ color: 'red' }}>*</span></span>}
            />
          )}
        />
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, marginTop: 2 }}>
        <Button type="submit" variant="contained" color="success" size="large" sx={{ backgroundColor: '#27ae60' }}>
          Envoyer
        </Button>
        <Button type="button" variant="contained" color="warning" size="large" sx={{ backgroundColor: '#e67e22' }} onClick={() => reset()}>
          Réinitialiser
        </Button>
      </Box>
    </Box>
  );
}

export default VoyageDaffaireForms;
