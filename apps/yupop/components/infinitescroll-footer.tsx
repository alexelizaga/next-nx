'use client';

import { cn } from '@/lib/utils';
import { AiFillCaretDown } from 'react-icons/ai';

interface InfinitescrollFooterProps {
  active?: boolean;
}

const InfinitescrollFooter = ({
  active = false
}: InfinitescrollFooterProps) => {
  return (
    <div className="w-full h-40 bg-white flex flex-col justify-start items-center p-2">
      <div aria-label="DownIcon" className={cn(!active && 'opacity-0')}>
        <AiFillCaretDown />
      </div>
    </div>
  );
};

export default InfinitescrollFooter;
