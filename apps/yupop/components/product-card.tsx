'use client';

import Image from 'next/image';

import { Product } from '@/models/product';
import { formatPrice } from '@/lib/format';

const ProductCard = ({ title, description, email, image, price }: Product) => {
  return (
    <div className="group hover:shadow-2xl transition overflow-hidden rounded-lg h-full cursor-pointer">
      <div className="relative w-full aspect-video rounded-t-md overflow-hidden">
        <Image fill className="object-cover" alt={title} src={image} />
      </div>
      <div className="flex flex-col pt-2 gap-1 px-3 py-5">
        <div className="text-lg md:text-base font-medium group-hover:text-orange-700 transition line-clamp-2 truncate">
          {title}
        </div>
        <p className="text-xs text-slate-500">
          {description.slice(0, 280)}
          {description.length > 280 && '...'}
        </p>
        <p className="text-xs text-slate-500">{email}</p>
        <p className="text-md md:text-sm font-medium text-slate-700">
          {formatPrice(parseFloat(price))}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
