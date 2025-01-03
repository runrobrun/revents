import {EventListItem} from './EventListItem.tsx';
import {AppEvent} from '../../../app/types/events.ts';

type Props = {
    events: AppEvent[]
}

export default function EventList({events}: Props) {
    return (
        <>
            {events.map((event) => (
                <EventListItem key={event.id} event={event} />
            ))}

        </>
    )
}
