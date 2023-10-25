'use client';

import { BsSearchHeart } from 'react-icons/bs';

import { useFavoriteStore } from '@/hooks/use-favorite-store';

import FavoriteItem from '../favorite-item';

export const FavoriteModal = () => {
  const favorite = useFavoriteStore();

  if (!favorite.isOpen) return null;

  return (
    <div className="fixed right-0 md:right-2 top-[64px] w-full h-full sm:h-[350px] sm:w-[350px] z-50 bg-white border overflow-hidden overflow-y-scroll flex-col">
      {favorite.items.map((item) => (
        <FavoriteItem key={item.title} title={item.title} image={item.image} />
      ))}
      {!favorite.items.length && (
        <div className="w-full h-full flex flex-col justify-center items-center gap-4">
          <BsSearchHeart className="text-gray-800" size={48} />
          <p className="text-lg">No tienes favoritos</p>
        </div>
      )}
    </div>
  );
};
