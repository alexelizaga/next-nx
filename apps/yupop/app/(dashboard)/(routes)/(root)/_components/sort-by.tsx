'use client';

import { useCallback, useState } from 'react';
import qs from 'query-string';
import { AiOutlineCaretDown, AiOutlineCaretUp } from 'react-icons/ai';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

const Sort = [
  {
    label: 'Title',
    value: 'title'
  },
  {
    label: 'Description',
    value: 'description'
  },
  {
    label: 'Price',
    value: 'price'
  },
  {
    label: 'Email',
    value: 'email'
  }
];

const SortBy = () => {
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const q = searchParams.get('q');

  const onClick = useCallback(
    (sortBy: string) => {
      setIsOpen(false);
      const url = qs.stringifyUrl(
        {
          url: pathname,
          query: {
            q,
            sort: sortBy
          }
        },
        { skipEmptyString: true, skipNull: true }
      );
      router.push(url);
    },
    [pathname, q, router]
  );

  return (
    <div className="relative flex flex-col items-center w-[150px] rounded-lg">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className=" h-[30px] bg-orange-600 text-white px-2 w-full flex items-center justify-between tracking-wider rounded-b-md"
      >
        Sort by
        {isOpen ? (
          <AiOutlineCaretDown aria-label="downIcon" />
        ) : (
          <AiOutlineCaretUp aria-label="upIcon" />
        )}
      </button>

      {isOpen && (
        <div className="bg-white absolute top-[30px] w-full z-40 flex flex-col border rounded-lg overflow-hidden">
          {Sort.map(({ label, value }) => (
            <button
              key={value}
              aria-label={`${value}Btn`}
              onClick={() => onClick(value)}
              className="w-full hover:bg-orange-300 border-b py-1"
            >
              {label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default SortBy;
