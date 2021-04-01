import { Box, Heading } from 'components'
import {React} from 'libraries'

const Profile = (props) => {
  document.title = "Belajar - Profile"
  console.log(props)
  return(
    <Box>
      <Heading as="h1">Profile Pages: {props.match.params.id}</Heading>
    </Box>
  )
};

export default Profile;
