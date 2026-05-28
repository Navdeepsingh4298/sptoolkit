
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
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardContent>
                <Typography variant="h5" component="div" gutterBottom>
                  Script Library
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Browse ready-to-use scripts and code snippets that solve common problems and help you ship faster.
                </Typography>
              </CardContent>
              <CardActions sx={{ mt: 'auto' }}>
                <Button size="small" variant="contained" disableElevation>
                  Explore snippets
                </Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardContent>
                <Typography variant="h5" component="div" gutterBottom>
                  Helper Tools
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Use tools designed to streamline development tasks, reduce repetitive work, and improve productivity.
                </Typography>
              </CardContent>
              <CardActions sx={{ mt: 'auto' }}>
                <Button size="small" variant="contained" disableElevation>
                  Try helper tools
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