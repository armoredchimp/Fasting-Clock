import { writable, derived } from 'svelte/store';

export const hours = writable(12);
export const currPerc = writable(50);
export const startDate = writable(new Date());
export const futureDate = writable(new Date());
export const hasStarted = writable(false);
export const fastID = writable(0)


// export const displayPerc = derived(currPerc, ($currPerc) => $currPerc * 4);
