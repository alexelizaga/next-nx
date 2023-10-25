import Image from 'next/image';
import { IoCloseOutline } from 'react-icons/io5';

import { useFavoriteStore } from '@/hooks/use-favorite-store';

interface FavoriteItemProps {
  title: string;
  image: string;
}

const FavoriteItem = ({ title, image }: FavoriteItemProps) => {
  const favorite = useFavoriteStore();

  return (
    <div className="w-full flex justify-between items-center border-b">
      <Image
        className="h-[45px] w-[45px]"
        height={45}
        width={45}
        alt={title}
        src={image}
      />
      <p className="truncate">{title}</p>
      <button className="py-2 px-4" onClick={() => favorite.remove(title)}>
        <IoCloseOutline size={24} />
      </button>
    </div>
  );
};

export default FavoriteItem;
