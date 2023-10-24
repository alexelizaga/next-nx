'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import qs from 'query-string';
import { AiOutlineClose } from 'react-icons/ai';
import { IoSearchOutline } from 'react-icons/io5';

import { useDebounce } from '@/hooks/use-debounce';

const SearchInput = () => {
  const [value, setValue] = useState('');
  const debouncedValue = useDebounce(value);

  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const url = qs.stringifyUrl(
      {
        url: pathname,
        query: {
          q: debouncedValue
        }
      },
      { skipEmptyString: true, skipNull: true }
    );

    router.push(url);
  }, [debouncedValue, router, pathname]);

  return (
    <div className="flex gap-4">
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

      <button onClick={() => setValue('')}>
        <AiOutlineClose />
      </button>
    </div>
  );
};

export default SearchInput;
