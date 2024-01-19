import { ChangeEvent } from 'react';

export const phoneMask = (
  type: string | undefined,
  event: ChangeEvent<HTMLInputElement>
) => {
  if (type === 'tel') {
    event.target.value = event.target.value
      .replace(/\D/g, '')
      .replace(/^(\d)/, '($1')
      .replace(/^(\(\d{3})(\d)/, '$1)$2')
      .replace(/(\d{3})(\d{1,5})/, '$1-$2')
      .replace(/(-\d{4})\d+?$/, '$1');
  }
};
