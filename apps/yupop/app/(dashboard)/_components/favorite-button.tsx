'use client';

import { PiHeart } from 'react-icons/pi';

import { useFavoriteStore } from '@/hooks/use-favorite-store';
import { FavoriteModal } from '@/components/modals/favorite-modal';

const FavoriteButton = () => {
  const favorite = useFavoriteStore();
  return (
    <>
      <button
        className="relative"
        type="button"
        onClick={() => favorite.onToggle()}
      >
        {favorite.items.length !== 0 && (
          <div className="absolute top-1 z-40 text-[10px] bg-white h-[16px] w-[16px] rounded-full border border-black">
            {favorite.items.length}
          </div>
        )}

        <PiHeart className="ml-2" size={24} />
      </button>
      <FavoriteModal />
    </>
  );
};

export default FavoriteButton;
