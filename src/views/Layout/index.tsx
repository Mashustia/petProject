import {FC} from 'react'
import {Container} from 'react-bootstrap';

import Header from '../Header/Header';
import Characters from '../Characters/components/Characters';

const Layout: FC = () => {
  return (
    <Container fluid className='pb-1'>
      <Header/>

      <Characters/>
    </Container>
  )
}

export default Layout
