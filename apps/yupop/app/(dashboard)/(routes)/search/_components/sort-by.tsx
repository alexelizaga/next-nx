'use client';

import { useState } from 'react';
import { AiOutlineCaretDown, AiOutlineCaretUp } from 'react-icons/ai';

const SortBy = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="relative flex flex-col items-center w-[150px] rounded-lg">
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className=" h-[30px] bg-orange-600 text-white px-2 w-full flex items-center justify-between tracking-wider rounded-b-md"
        >
          Sort by
          {isOpen ? <AiOutlineCaretDown /> : <AiOutlineCaretUp />}
        </button>

        {isOpen && (
          <div className="bg-white absolute top-[30px] w-full z-50 flex flex-col border rounded-lg overflow-hidden">
            <button className="w-full hover:bg-orange-300 border-b py-1">
              Title
            </button>
            <button className="w-full hover:bg-orange-300 border-b py-1">
              Description
            </button>
            <button className="w-full hover:bg-orange-300 border-b py-1">
              Price
            </button>
            <button className="w-full hover:bg-orange-300 py-1">Email</button>
          </div>
        )}
      </div>
    </>
  );
};

export default SortBy;
