'use client';

import { BsSearchHeart } from 'react-icons/bs';

import { useFavoriteStore } from '@/hooks/use-favorite-store';

import FavoriteItem from '../favorite-item';
import { IoSearchOutline } from 'react-icons/io5';
import { AiOutlineClose } from 'react-icons/ai';
import { useEffect, useState } from 'react';
import { byString } from '@/lib/match';

export const FavoriteModal = () => {
  const favorite = useFavoriteStore();
  const [filteredFavorite, setFilteredFavorite] = useState(favorite.items);
  const [value, setValue] = useState('');

  useEffect(() => {
    if (value.length) {
      setFilteredFavorite(
        favorite.items.filter(({ title }) => byString(title, value))
      );
    } else {
      setFilteredFavorite(favorite.items);
    }
  }, [favorite.items, value]);

  if (!favorite.isOpen) return null;

  return (
    <div className="fixed right-0 md:right-2 top-[64px] w-full h-full sm:h-[350px] sm:w-[350px] z-50 bg-white border overflow-hidden overflow-y-scroll flex-col">
      {!!favorite.items.length && (
        <div className="flex gap-4 p-2 border-b">
          <div className="bg-slate-200 rounded-full h-[24px] w-[24px] flex justify-center items-center">
            <IoSearchOutline size={16} />
          </div>

          <input
            className="focus-visible:outline-none w-full"
            type="text"
            placeholder="Search"
            onChange={(e) => setValue(e.target.value)}
            value={value}
          />

          <button aria-label="modalClose" onClick={() => setValue('')}>
            <AiOutlineClose />
          </button>
        </div>
      )}
      {filteredFavorite.map((item) => (
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
