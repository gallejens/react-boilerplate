import { create } from 'zustand';

export const useMainStore = create<Main.State & Main.StateActions>(set => ({
  count: 0,
  increaseCount: () => set(s => ({ count: s.count + 1 })),
}));
