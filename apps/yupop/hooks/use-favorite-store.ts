import { Product } from '@/models/product';
import { create } from 'zustand';

type FavoriteStore = {
  isOpen: boolean;
  onToggle: () => void;
  items: Product[];
  add: (product: Product) => void;
  remove: (title: string) => void;
};

export const useFavoriteStore = create<FavoriteStore>((set) => ({
  isOpen: false,
  items: [],
  onToggle: () => set((state) => ({ isOpen: !state.isOpen })),
  add: (product: Product) =>
    // set((state) => ({ items: [...state.items, product] })),
    set((state) => {
      const exist = state.items.find((i) => i.title === product.title);
      if (exist) return { items: state.items };
      return { items: [...state.items, product] };
    }),
  remove: (title: string) =>
    set((state) => ({
      items: state.items.filter((f) => f.title !== title),
    })),
}));
