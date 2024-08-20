import React from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import {
  TextField,
  FormControl,
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
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

// Define the shape of your form data
interface FormData {
  nomContact: string;
  poste: string;
  nomEntreprise: string;
  email: string;
  telephone: string;
  wilaya: string;
  services: string[];
  autres?: string;  // Optional field
  policyAccepted: boolean;
}

// Define the validation schema
const schema = Yup.object().shape({
  nomContact: Yup.string().required('Nom de Contact est requis'),
  poste: Yup.string().required('Poste est requis'),
  nomEntreprise: Yup.string().required('Nom d\'entreprise est requis'),
  email: Yup.string().email('Email invalide').required('Email est requis'),
  telephone: Yup.string()
    .matches(/^\d{10}$/, 'Le numéro de téléphone doit contenir exactement 10 chiffres')
    .required('Téléphone est requis'),
  wilaya: Yup.string().required('Wilaya est requise'),
  services: Yup.array()
  .min(1, "Select at least one services")
  .required("Select at least one services"),
  autres: Yup.string().optional(),
  policyAccepted:  Yup.boolean().default(false),

});

function VoyageDaffaireForms() {
  const { handleSubmit, control, reset, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      console.log("Form Submitted", data);
    } catch (error) {
      console.log("Error submitting form", error);
    }
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
              error={!!errors.nomContact}
              helperText={errors.nomContact?.message}
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
              error={!!errors.poste}
              helperText={errors.poste?.message}
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
              error={!!errors.nomEntreprise}
              helperText={errors.nomEntreprise?.message}
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
              error={!!errors.email}
              helperText={errors.email?.message}
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
              type="text"
              fullWidth
              error={!!errors.telephone}
              helperText={errors.telephone?.message}
            />
          )}
        />
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <Typography component="label" sx={{ width: '200px', color: '#000' }}>
          Wilaya Algérienne à visiter <span style={{ color: 'red' }}>*</span>:
        </Typography>
        <FormControl required fullWidth variant="outlined" error={!!errors.wilaya}>
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
          {errors.wilaya && (
            <Typography variant="caption" color="error">
              {errors.wilaya.message}
            </Typography>
          )}
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
          render={({ field: { onChange, value } }) => (
            <>
              <FormControlLabel
                control={
                  <Checkbox
                    value="Agence de voyage"
                    checked={value.includes('Agence de voyage')}
                    onChange={(e) => {
                      const checked = e.target.checked;
                      onChange(
                        checked
                          ? [...value, e.target.value]
                          : value.filter((v) => v !== e.target.value)
                      );
                    }}
                  />
                }
                label="Agence de voyage"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    value="Compagnie aérienne"
                    checked={value.includes('Compagnie aérienne')}
                    onChange={(e) => {
                      const checked = e.target.checked;
                      onChange(
                        checked
                          ? [...value, e.target.value]
                          : value.filter((v) => v !== e.target.value)
                      );
                    }}
                  />
                }
                label="Compagnie aérienne"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    value="Hôtel"
                    checked={value.includes('Hôtel')}
                    onChange={(e) => {
                      const checked = e.target.checked;
                      onChange(
                        checked
                          ? [...value, e.target.value]
                          : value.filter((v) => v !== e.target.value)
                      );
                    }}
                  />
                }
                label="Hôtel"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    value="Transport local (chauffeur, location de voiture)"
                    checked={value.includes('Transport local (chauffeur, location de voiture)')}
                    onChange={(e) => {
                      const checked = e.target.checked;
                      onChange(
                        checked
                          ? [...value, e.target.value]
                          : value.filter((v) => v !== e.target.value)
                      );
                    }}
                  />
                }
                label="Transport local (chauffeur, location de voiture)"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    value="Guide local"
                    checked={value.includes('Guide local')}
                    onChange={(e) => {
                      const checked = e.target.checked;
                      onChange(
                        checked
                          ? [...value, e.target.value]
                          : value.filter((v) => v !== e.target.value)
                      );
                    }}
                  />
                }
                label="Guide local"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    value="Cabinet de conseil"
                    checked={value.includes('Cabinet de conseil')}
                    onChange={(e) => {
                      const checked = e.target.checked;
                      onChange(
                        checked
                          ? [...value, e.target.value]
                          : value.filter((v) => v !== e.target.value)
                      );
                    }}
                  />
                }
                label="Cabinet de conseil"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    value="Avocat d'affaires"
                    checked={value.includes('Avocat d\'affaires')}
                    onChange={(e) => {
                      const checked = e.target.checked;
                      onChange(
                        checked
                          ? [...value, e.target.value]
                          : value.filter((v) => v !== e.target.value)
                      );
                    }}
                  />
                }
                label="Avocat d'affaires"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    value="Conseiller juridique"
                    checked={value.includes('Conseiller juridique')}
                    onChange={(e) => {
                      const checked = e.target.checked;
                      onChange(
                        checked
                          ? [...value, e.target.value]
                          : value.filter((v) => v !== e.target.value)
                      );
                    }}
                  />
                }
                label="Conseiller juridique"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    value="Services de traduction/interprète"
                    checked={value.includes('Services de traduction/interprète')}
                    onChange={(e) => {
                      const checked = e.target.checked;
                      onChange(
                        checked
                          ? [...value, e.target.value]
                          : value.filter((v) => v !== e.target.value)
                      );
                    }}
                  />
                }
                label="Services de traduction/interprète"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    value="Service de sécurité"
                    checked={value.includes('Service de sécurité')}
                    onChange={(e) => {
                      const checked = e.target.checked;
                      onChange(
                        checked
                          ? [...value, e.target.value]
                          : value.filter((v) => v !== e.target.value)
                      );
                    }}
                  />
                }
                label="Service de sécurité"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    value="Autres"
                    checked={value.includes('Autres')}
                    onChange={(e) => {
                      const checked = e.target.checked;
                      onChange(
                        checked
                          ? [...value, e.target.value]
                          : value.filter((v) => v !== e.target.value)
                      );
                    }}
                  />
                }
                label="Autres (spécifiez)"
              />
            </>
          )}
        />
        {errors.services && (
          <Typography variant="caption" color="error" sx={{ marginLeft: '200px' }}>
            {errors.services.message}
          </Typography>
        )}
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
              label={<span style={{ color: '#000' }}>Je déclare avoir lu et accepter la politique de confidentialité <span style={{ color: 'red' }}>*</span></span>}
            />
          )}
        />
        {errors.policyAccepted && (
          <Typography variant="caption" color="error">
            {errors.policyAccepted.message}
          </Typography>
        )}
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
