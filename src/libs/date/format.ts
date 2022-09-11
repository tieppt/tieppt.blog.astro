import { format as dfnsFormat } from 'date-fns';
export function format(date: Date | string | number, format = 'dd-MM-yyyy') {
  return dfnsFormat(new Date(date), format);
}
