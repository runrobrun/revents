import { List, Image } from "semantic-ui-react";
import {Attendee} from '../../../app/types/events.ts';

type Props = {
    attendee: Attendee;
};

export function EventListAttendee({attendee}: Props) {
    return (
        <List.Item>
            <Image size='mini' circular src={attendee.photoURL} />
        </List.Item>
    );
}
