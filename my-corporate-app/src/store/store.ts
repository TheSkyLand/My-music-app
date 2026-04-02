import { create } from 'zustand'

interface MyState {
  message: string;
  fetchData: () => Promise<void>;
}

export const useStore = create<MyState>((set) => ({
  message: '',
  fetchData: async () => {
    try {
      const res = await fetch('http://localhost:8080/api');
      const text = await res.text();
      set({ message: text });
    } catch (error) {
      console.error("Ошибка запроса:", error);
    }
  },
}));