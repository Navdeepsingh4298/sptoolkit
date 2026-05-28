import { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
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
} from "@mui/material";

import DrawerAppBar from "../../components/appbar/DrawerAppBar";

const ScriptLibrary = () => {
  const [selectedScript, setSelectedScript] = useState("");
  const [scriptCategories, setScriptCategories] = useState([]);
  const [jsScriptsData, setJsScriptsData] = useState({ scripts: [] });
  const [xmlScriptsData, setXmlScriptsData] = useState({ scripts: [] });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        // Load categories
        const categoriesRes = await fetch("/data/scriptCategories.json");
        const categories = categoriesRes.ok ? await categoriesRes.json() : [];
        console.log("Loaded categories:", categories);
        setScriptCategories(categories);
        if (categories.length > 0) {
          setSelectedScript(categories[0].value);
        }

        // Load JS + XML script metadata
        const jsRes = await fetch("/data/JsScripts/JsScripts.json");
        const xmlRes = await fetch("/data/xmlScripts/xmlScripts.json");

        const jsData = jsRes.ok ? await jsRes.json() : { scripts: [] };
        const xmlData = xmlRes.ok ? await xmlRes.json() : { scripts: [] };

        setJsScriptsData(jsData);
        setXmlScriptsData(xmlData);
      } catch (err) {
        console.error("Error loading script data:", err);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  let selectedData = [];
  switch (selectedScript) {
    case "jsScripts":
      selectedData = jsScriptsData.scripts;
      break;
    case "xmlScripts":
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
          Find a curated collection of ready-to-use script snippets, organized
          for quick access and fast integration.
        </Typography>

        <Card
          sx={{
            mb: 4,
            bgcolor: "primary.light",
            color: "primary.contrastText",
          }}
        >
          <CardContent>
            <Typography variant="body1" paragraph>
              Select a script category below to see available scripts.
            </Typography>
            <FormControl
              fullWidth
              variant="outlined"
              sx={{ mt: 2, bgcolor: "background.paper", borderRadius: 1 }}
            >
              <InputLabel id="script-select-label">
                Select script category
              </InputLabel>
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

        {loading ? (
          <Typography variant="h6">Loading scripts...</Typography>
        ) : (
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
                            folder: script.folder,
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
        )}
      </Box>
    </Container>
  );
};

export default ScriptLibrary;
