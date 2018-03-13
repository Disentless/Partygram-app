import { Tag } from './tag';

export class Event {
    id: number;
    creator_id: number;
    name: string;
    location: string;
    description: string;
    tags: Tag[];
    type: string;
    datetime: string;
    member_count: number;
}
