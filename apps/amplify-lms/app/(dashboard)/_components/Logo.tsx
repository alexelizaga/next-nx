import Image from 'next/image';

import { BsTerminalFill } from 'react-icons/bs';

const Logo = () => {
  return (
    <div className="flex items-center gap-3">
      <BsTerminalFill size={24} />
      <div className="text-xl">Brocode</div>
    </div>
  );
  return <Image height="130" width="130" alt="logo" src="/logo.svg" />;
};

export default Logo;
