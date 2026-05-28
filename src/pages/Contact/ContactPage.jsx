
// mui components
import {
  Container,
  Typography,
  Button,
  Box,
  Link,
} from '@mui/material';

// local components
import DrawerAppBar from '../../components/appbar/DrawerAppBar';

const ContactPage = () => {

  const repoUrl = 'https://github.com/Navdeepsingh4298/sptoolkit';

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <DrawerAppBar />
      <Box sx={{ mt: 6, px: 2, py: 4, borderRadius: 3, boxShadow: 3 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Contact & Feedback
        </Typography>

        <Typography variant="body1" paragraph>
          Thanks for exploring SP toolkit. If you have questions, suggestions, or found any issue,
          please let us know so we can improve the project.
        </Typography>

        <Typography variant="body1" paragraph>
          You can also visit the source repository on GitHub and open an issue there if you find any bug,
          missing feature, or anything that could be better.
        </Typography>

        <Box sx={{ mt: 4 }}>
          <Typography variant="subtitle1" gutterBottom>
            GitHub repository:
          </Typography>
          <Link href={repoUrl} target="_blank" rel="noopener noreferrer" underline="hover">
            {repoUrl}
          </Link>
        </Box>

        <Box sx={{ mt: 4, p: 3, borderRadius: 2, bgcolor: 'grey.100' }}>
          <Typography variant="h6" component="p" gutterBottom>
            Found an issue?
          </Typography>
          <Typography variant="body2">
            Raise an issue on GitHub and include a short description of what happened, the page you were on,
            and any screenshots or steps to reproduce the problem. Your feedback helps keep SP toolkit in great shape.
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default ContactPage;