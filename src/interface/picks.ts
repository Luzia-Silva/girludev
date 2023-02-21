//export the Picks 

import { IPosts } from './IPosts';

export type ICardsPosts = Pick<
    IPosts,
    'id' | 'title' | 'date' | 'image' | 'tag'
>;
