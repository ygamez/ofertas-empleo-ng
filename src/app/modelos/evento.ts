import {CalendarEventAction} from 'angular-calendar';

export class Evento {
    constructor(public start: Date,
                public end: Date,
                public title: string,
                public color: any,
                public actions: CalendarEventAction[]) {
    }

}