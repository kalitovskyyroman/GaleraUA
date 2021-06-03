import pluralize from 'pluralize';

export const jobDaysFormatting = days => (days === 0 ? 'Today' : days + ' ' + pluralize('day', days) + ' ago');

export const workTypeFormatting = workType => workType.replace('_', ' ');
