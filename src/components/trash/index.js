import {React, Component} from 'libraries';


//component
import { MainContent, Box, Image, Heading, Divider } from 'components';
import { createBreakpoints } from "@chakra-ui/theme-tools"


//JSON 
import dataJSON from 'assets/dummy/blog.json';

// Server side rendering

// Client Side Rendering


function App2() {
  return(
    <Box>
      Halo Dunia: Functional Component
    </Box>
  )
}

const BrandTitle = (props) => {
  console.log(`hasil console props: `,props)
  return(
    <Heading as={props.tag} fontSize={props.size} >{props.title}</Heading>
  )
}

const IniVariabel = [] //return array
const IniVariabel2 = {} //return object
const IniVariabel3 = () => {} //return function



class App extends Component {


  handleShowAlert = (title) => {
    alert(`Alert Show! ${title}`)
  }

  render() {
    const breakpoints = createBreakpoints({base: "100%", sm: "50%", md: "50%", lg: "33.3333%" });
    console.log('hello world');
    return(
      <MainContent>
        
        <BrandTitle title="C-Studio" tag="h6" size="18px" />

        <Divider />


        <Box display="flex" flexWrap="wrap">
          {dataJSON.map((value, index) => {
            console.log(`data: `, value);
            return(
              <Box key={index} px={3} py={3} w={breakpoints} onClick={() => this.handleShowAlert(value.title)}>
                <Box>
                  <Image src={value.image} width="100%" height="100%" minHeight="150px" maxH="150px" objectFit="cover" />
                </Box>
              </Box>
            )
          })}
        </Box>
      </MainContent>
    )
  }
}

export default App;
