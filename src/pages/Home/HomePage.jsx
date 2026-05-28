
// mui components
import {
  Container,
  Typography,
  Button,
  Box,
} from '@mui/material';

// local components
import DrawerAppBar from '../../components/appbar/DrawerAppBar';

const HomePage = () => {

  return (
    <Container>
      <DrawerAppBar />
      This is HomePage of SP toolkit
    </Container>
  );
};

export default HomePage;