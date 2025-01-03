import EventDashboard from './features/events/dashboard/EventDashboard.tsx';
import {NavBar} from './app/layout/nav/NavBar.tsx';
import {Container} from 'semantic-ui-react';
import {useState} from 'react';

function App() {
    const [formOpen, setFormOpen] = useState(false);

  return (
    <>
      <NavBar setFormOpen={setFormOpen} />
      <Container className='main'>
          <EventDashboard formOpen={formOpen} setFormOpen={setFormOpen} />
      </Container>
    </>
  )
}

export default App
