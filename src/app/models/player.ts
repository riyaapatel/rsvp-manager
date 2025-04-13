export interface Player {
    id: number;
    name: string;
    rsvp: RsvpStatus;
  }
  
export type RsvpStatus = 'Yes' | 'No' | 'Maybe';