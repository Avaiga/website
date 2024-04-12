import { format, parseISO } from 'date-fns';

export const getPublishDate = (date: string) => format(parseISO(date), 'MMM dd, yyyy');
export const getLongPublishDate = (date: string) => format(parseISO(date), 'MM/dd/yyyy');
