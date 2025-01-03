import {Button, Container, Menu, MenuItem} from 'semantic-ui-react';

type Props = {
    setFormOpen: (open: boolean) => void;
}

export function NavBar({setFormOpen}: Props) {
    return (
        <Menu inverted={true} fixed='top'>
            <Container>
                <MenuItem header>
                    <img src="/logo.png" alt='logo' />
                    Re-Vents
                </MenuItem>
                <MenuItem name='events' />
                <MenuItem name='about'>
                    <Button
                        onClick={() => setFormOpen(true)}
                        floated='right'
                        positive={true}
                        inverted={true}
                        content='Create Event'/>
                </MenuItem>
                <MenuItem position='right'>
                    <Button floated='right' inverted={true} content='Login'/>
                    <Button floated='right' inverted={true} content='Register' style={{marginLeft: '0.5em'}}/>
                </MenuItem>
            </Container>
        </Menu>
    );
}
