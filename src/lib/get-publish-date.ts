import { format, parseISO } from 'date-fns';

export const getPublishDate = (date: string) => format(parseISO(date), 'MMM dd, yyyy');
