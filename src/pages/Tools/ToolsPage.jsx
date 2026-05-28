// mui components
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Grid,
  Button,
} from '@mui/material';

// local components
import DrawerAppBar from '../../components/appbar/DrawerAppBar';

const tools = [
  {
    title: 'Unique Link Generator',
    subtitle: 'Generate thousands of unique custom URLs in a snap',
    description: 'Create unique shareable links with a txt, csv, or QR code output.',
    href: 'https://uniquelinkgen.netlify.app/',
  },
  {
    title: 'Define List Generator',
    subtitle: 'Build complex reusable lists in seconds',
    description: 'Generate clean definition lists and structured content with a customizable setup for your needs.',
    href: 'https://definelistgen.netlify.app/',
  },
  {
    title: 'Bulk Image Files Renamer',
    subtitle: 'Rename image files in bulk',
    description: 'Quickly rename groups of image files with consistent patterns for faster media management.',
    href: 'https://bulkfilesrenamer.netlify.app/',
  },
];

const ToolsPage = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <DrawerAppBar />
      <Box sx={{ mt: 6, px: 2, py: 4, borderRadius: 3, boxShadow: 3 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Helper Tools
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph gutterBottom>
          Explore tools built for fast workflow improvements and a better development experience.
        </Typography>

        <Grid container spacing={2} justifyContent="center">
          {tools.map((tool) => (
            <Grid item xs={12} sm={6} md={4} key={tool.title}>
              <Card sx={{ borderRadius: 3, overflow: 'hidden', maxWidth: 360, mx: 'auto' }}>
                <CardMedia
                  sx={{ height: 150, bgcolor: 'grey.100', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                >
                  <Box sx={{ textAlign: 'center', px: 1 }}>
                    <Typography variant="h6" color="text.primary">
                      {tool.title}
                    </Typography>
                  </Box>
                </CardMedia>
                <CardContent sx={{ py: 2, px: 3 }}>
                  <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                    {tool.subtitle}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {tool.description}
                  </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: 'flex-end', px: 3, pb: 3 }}>
                  <Button
                    component="a"
                    href={tool.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="contained"
                    size="small"
                    onClick={() => window.open(tool.href, '_blank', 'noopener,noreferrer')}
                  >
                    Open Tool
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default ToolsPage;
