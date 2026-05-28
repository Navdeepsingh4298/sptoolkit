
// mui components
import {
  Container,
  Typography,
  Button,
  Box,
  Grid,
  Card,
  CardContent,
  CardActions,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

// local components
import DrawerAppBar from '../../components/appbar/DrawerAppBar';

const HomePage = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <DrawerAppBar />

      <Box sx={{ mt: 6 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Welcome to SP toolkit
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          SP toolkit helps developers move faster with a script library of ready-to-use snippets and helper tools
          built for a smoother coding experience.
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Card sx={{ 
              height: '100%', 
              display: 'flex', 
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              bgcolor: '#f5f5f5',
              boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 8px',
              borderRadius: 2,
              padding: 4,
              minHeight: 300,
            }}>
              <CardContent sx={{ width: '100%' }}>
                <Typography variant="h5" component="div" gutterBottom sx={{ fontWeight: 600, mb: 2 }}>
                  Script Library
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.6 }}>
                  Browse and explore thousands of ready-to-use script snippets.
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 4, lineHeight: 1.6 }}>
                  Find the perfect code solution for your project needs.
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: 'center', width: '100%', pb: 0 }}>
                <Button
                  component={RouterLink}
                  to="/scripts"
                  size="medium"
                  variant="contained"
                  disableElevation
                  sx={{ 
                    bgcolor: '#1976d2',
                    color: 'white',
                    fontWeight: 600,
                    px: 4,
                    py: 1,
                    '&:hover': {
                      bgcolor: '#1565c0',
                    }
                  }}
                >
                  OPEN LIBRARY
                </Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card sx={{ 
              height: '100%', 
              display: 'flex', 
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              bgcolor: '#f5f5f5',
              boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 8px',
              borderRadius: 2,
              padding: 4,
              minHeight: 300,
            }}>
              <CardContent sx={{ width: '100%' }}>
                <Typography variant="h5" component="div" gutterBottom sx={{ fontWeight: 600, mb: 2 }}>
                  Helper Tools
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.6 }}>
                  Access a collection of powerful utility tools designed for developers.
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 4, lineHeight: 1.6 }}>
                  Streamline tasks and boost your productivity instantly.
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: 'center', width: '100%', pb: 0 }}>
                <Button
                  component={RouterLink}
                  to="/tools"
                  size="medium"
                  variant="contained"
                  disableElevation
                  sx={{ 
                    bgcolor: '#1976d2',
                    color: 'white',
                    fontWeight: 600,
                    px: 4,
                    py: 1,
                    '&:hover': {
                      bgcolor: '#1565c0',
                    }
                  }}
                >
                  OPEN TOOLS
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default HomePage;