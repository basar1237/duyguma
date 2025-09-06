import { format, formatDistanceToNow, parseISO } from 'date-fns';
import { tr } from 'date-fns/locale';

export function formatDate(date: string | Date, formatStr: string = 'dd MMMM yyyy') {
  const dateObj = typeof date === 'string' ? parseISO(date) : date;
  return format(dateObj, formatStr, { locale: tr });
}

export function formatRelativeDate(date: string | Date) {
  const dateObj = typeof date === 'string' ? parseISO(date) : date;
  return formatDistanceToNow(dateObj, { addSuffix: true, locale: tr });
}

export function formatReadingTime(minutes: number) {
  if (minutes < 1) {
    return '1 dakikadan az';
  }
  return `${Math.round(minutes)} dakika`;
}

export function isRecent(date: string | Date, days: number = 7) {
  const dateObj = typeof date === 'string' ? parseISO(date) : date;
  const now = new Date();
  const diffTime = Math.abs(now.getTime() - dateObj.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays <= days;
}
