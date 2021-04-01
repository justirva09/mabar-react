import { Box, Heading } from 'components'
import {React} from 'libraries'

const Home = () => {
  document.title = "Belajar"
  return(
    <Box>
      <Heading as="h1">Home Pages</Heading>
    </Box>
  )
};

export default Home;
