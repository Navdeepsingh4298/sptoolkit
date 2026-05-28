
// mui components
import {
  Container,
  Typography,
  Button,
  Box,
} from '@mui/material';

// local components
import DrawerAppBar from '../../components/appbar/DrawerAppBar';

const AboutPage = () => {

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <DrawerAppBar />
      <Box sx={{ mt: 6, px: 2, py: 4, borderRadius: 3, boxShadow: 3, textAlign: 'left' }}>
        <Typography variant="h4" component="h1" gutterBottom>
          About SP toolkit
        </Typography>

        <Typography variant="body1" paragraph gutterBottom>
          SP toolkit is built to help developers move faster by providing a script library of ready-to-use snippets
          and a set of helper tools made for a better development experience.
        </Typography>

        <Typography variant="body1" paragraph gutterBottom>
          The script library contains common patterns and useful code snippets that you can copy, adapt, and use
          immediately in your projects. The helper tools are designed to solve everyday programming needs, reduce
          repetitive work, and improve productivity.
        </Typography>

        <Typography variant="body1" paragraph gutterBottom>
          Whether you need quick script references or lightweight utilities to support your workflow, SP toolkit
          is focused on making development smoother and more efficient.
        </Typography>

        <Box sx={{ mt: 4, p: 3, borderRadius: 2, textAlign: 'left', bgcolor: 'grey.100' }}>
          <Typography variant="h6" component="p" gutterBottom>
            What you can expect
          </Typography>
          <Typography variant="body2" component="div" sx={{ textAlign: 'left' }}>
            <ul>
              <li>Reusable scripts and snippets for common tasks</li>
              <li>Helper tools that speed up development</li>
              <li>many more things to come!</li>
            </ul>
          </Typography>
<Typography variant="h6" component="p" gutterBottom>
            Creator
          </Typography>
            <Typography variant="body2" component="div" sx={{ textAlign: 'left' }}>
                The SP Toolkit was solely created by <strong>Navdeep Singh</strong>, an engineer with full‑stack capabilities. Known for building robust utilities and streamlining workflows, he brings precision, speed, and care to every project. 
            </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default AboutPage;