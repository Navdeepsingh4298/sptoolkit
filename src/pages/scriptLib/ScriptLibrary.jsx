// mui components
import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Container,
  Typography,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Card,
  CardContent,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';

// local components
import DrawerAppBar from '../../components/appbar/DrawerAppBar';

// data
import jsScriptsData from '../../data/JsScripts/JsScripts.json';
import xmlScriptsData from '../../data/xmlScripts/xmlScripts.json';

import scriptCategories from '../../data/scriptCategories';

const codeModules = import.meta.glob('../../data/**/code.txt', { eager: true, as: 'raw' });
const codeByFolder = Object.fromEntries(
  Object.entries(codeModules).map(([path, content]) => {
    const folder = path.split('/')[path.split('/').length - 2];
    return [folder, content];
  })
);

const ScriptLibrary = () => {
  const [selectedScript, setSelectedScript] = useState(scriptCategories[0].value);

  let selectedData = [];

  switch (selectedScript) {
    case 'jsScripts':
      selectedData = jsScriptsData.scripts;
      break;
    case 'xmlScripts':
      selectedData = xmlScriptsData.scripts;
      break;
    default:
      break;
  }



  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <DrawerAppBar />
      <Box sx={{ mt: 6, px: 2, py: 4, borderRadius: 3, boxShadow: 3 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Script Library
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          Find a curated collection of ready-to-use script snippets, organized for quick access and fast integration.
        </Typography>

        <Card sx={{ mb: 4, bgcolor: 'primary.light', color: 'primary.contrastText' }}>
          <CardContent>
            <Typography variant="body1" paragraph>
              Select a script category below to see available scripts.
            </Typography>
            <FormControl fullWidth variant="outlined" sx={{ mt: 2, bgcolor: 'background.paper', borderRadius: 1 }}>
              <InputLabel id="script-select-label">Select script category</InputLabel>
              <Select
                labelId="script-select-label"
                id="script-select"
                value={selectedScript}
                label="Select script category"
                onChange={(event) => setSelectedScript(event.target.value)}
              >
                {scriptCategories.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </CardContent>
        </Card>

        <TableContainer component={Paper} sx={{ mt: 2 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {selectedData.map((script) => (
                <TableRow key={script.id}>
                  <TableCell>{script.snippetName}</TableCell>
                  <TableCell>{script.description}</TableCell>
                  <TableCell>
                    <Button
                      component={RouterLink}
                      to={`/scripts/${script.id}`}
                      state={{
                        snippet: {
                          name: script.snippetName,
                          description: script.description,
                          code: codeByFolder[script.folder] || '',
                        },
                      }}
                      variant="contained"
                      size="small"
                    >
                      View
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

      </Box>
    </Container>
  );
};

export default ScriptLibrary;
