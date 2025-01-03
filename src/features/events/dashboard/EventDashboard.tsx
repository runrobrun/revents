import {Grid} from 'semantic-ui-react';
import EventList from './EventList.tsx';
import {EventForm} from '../form/EventForm.tsx';
import {sampleData} from '../../../app/api/sampleData.ts';
import {AppEvent} from '../../../app/types/events.ts';
import {useEffect, useState} from 'react';

type Props = {
    formOpen: boolean;
    setFormOpen: (open: boolean) => void;
}

function EventDashboard({formOpen, setFormOpen}: Props) {
    const [events, setEvents] = useState<AppEvent[]>([]);

    useEffect(()  => {
        setEvents(sampleData);
    }, [])

    return (
        <Grid>
            <Grid.Column width={10}>
                <EventList events={events} />
            </Grid.Column>
            <Grid.Column width={6}>
                {formOpen &&
                <EventForm setFormOpen={setFormOpen} />}
            </Grid.Column>
        </Grid>
    );
}
export default EventDashboard;
