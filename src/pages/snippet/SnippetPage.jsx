import { useState, useEffect } from 'react';
import { useParams, useLocation, Link as RouterLink } from 'react-router-dom';
import {
  Container,
  Typography,
  Box,
  Grid,
  Paper,
  Button,
} from '@mui/material';

import DrawerAppBar from '../../components/appbar/DrawerAppBar';

const SnippetPage = () => {
  const { snippetId } = useParams();
  const location = useLocation();
  const routeSnippet = location.state?.snippet;
  const [snippet, setSnippet] = useState(null);
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadSnippet = async () => {
      let baseSnippet = routeSnippet ? { ...routeSnippet } : null;
      let code = routeSnippet?.code || '';
      let folder = routeSnippet?.folder || snippetId;

      const basePaths = ['JsScripts', 'xmlScripts'];

      if (!baseSnippet) {
        const searchBases = basePaths;

        for (const base of searchBases) {
          try {
            const metaRes = await fetch(`/data/${base}/${folder}/meta.json`);
            if (metaRes.ok) {
              const meta = await metaRes.json();
              baseSnippet = {
                id: meta.id || snippetId,
                name: meta.snippetName || snippetId,
                description: meta.description || '',
                folder,
              };
              break;
            }
          } catch (err) {
            console.error(`Error loading meta for ${folder} from ${base}`, err);
          }
        }
      }

      if (!baseSnippet) {
        baseSnippet = {
          id: snippetId,
          name: snippetId,
          description: 'Snippet metadata not available.',
          folder,
        };
      }

      setSnippet({
        ...baseSnippet,
        code: code || 'Unable to load snippet code.',
      });
      setLoading(false);
    };

    loadSnippet();
  }, [snippetId, routeSnippet]);

  const handleCopy = async () => {
    if (!snippet) return;
    try {
      await navigator.clipboard.writeText(snippet.code);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1400);
    } catch (error) {
      console.warn('Copy failed', error);
    }
  };

  return (
    <Container sx={{ py: 2, width: '100%' }} maxWidth="lg">
      <DrawerAppBar />
      <Box sx={{ mt: 4, px: 2, py: 4, borderRadius: 3, boxShadow: 3 }}>
        <Button component={RouterLink} to="/scripts" variant="text" sx={{ mb: 3 }}>
          Back to Script Library
        </Button>

        {loading ? (
          <Typography variant="h6">Loading snippet...</Typography>
        ) : !snippet ? (
          <Typography variant="h6" color="error">
            Snippet not found.
          </Typography>
        ) : (
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} sx={{width: '100%'}}>
              <Paper sx={{ p: 3, minHeight: 100, textAlign: 'left' }}>
                <Typography variant="h5" gutterBottom>
                  {snippet.name}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" paragraph>
                  {snippet.description}
                </Typography>
              </Paper>
            </Grid>

            <Grid item xs={12} md={6} sx={{width: '100%'}}>
              <Paper
                sx={{
                  p: 3,
                  minHeight: 360,
                  bgcolor: 'grey.900',
                  color: 'common.white',
                  position: 'relative',
                }}
              >
                <Box sx={{ position: 'absolute', top: 16, right: 16 }}>
                  <Button
                    variant="outlined"
                    color="inherit"
                    size="small"
                    onClick={handleCopy}
                  >
                    {copied ? 'Copied' : 'Copy'}
                  </Button>
                </Box>
                <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                  Script code
                </Typography>
                <Box
                  component="pre"
                  sx={{
                    whiteSpace: 'pre',
                    overflowX: 'auto',
                    fontFamily: 'Monaco, Consolas, Courier, monospace',
                    mt: 4,
                    color: 'common.white',
                    fontSize: 14,
                    lineHeight: 1.6,
                    textAlign: 'left',
                  }}
                >
                  {snippet.code}
                </Box>
              </Paper>
            </Grid>
          </Grid>
        )}
      </Box>
    </Container>
  );
};

export default SnippetPage;
