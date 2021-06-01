import GalleryContainer from './components/GalleryContainer';
import Title from './components/Title';
import 'bootstrap/dist/css/bootstrap.min.css'

import { Container } from 'react-bootstrap'


function App() {
  return (
    <>
      <Title />
      <Container>
        <GalleryContainer />
      </Container>
    </>
  );
}

export default App;
