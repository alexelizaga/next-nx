'use client';

import { Menu, MenuItem, useAuthenticator } from '@aws-amplify/ui-react';
import { LogOut } from 'lucide-react';
import { MdAccountCircle } from 'react-icons/md';

const UserButton = () => {
  const { signOut, user } = useAuthenticator((context) => [context.user]);

  return (
    <Menu
      menuAlign="end"
      size="small"
      trigger={
        <div className="py-2.5 pl-2.5 hover:opacity-75 transtion">
          <MdAccountCircle size={24} />
        </div>
      }
      overflow="hidden"
    >
      {user.attributes?.email && (
        <div className="w-full py-1.5 px-4">{user.attributes?.email}</div>
      )}
      {user.attributes?.phone_number && (
        <div className="w-full py-1.5 px-4">
          {user.attributes?.phone_number}
        </div>
      )}
      <MenuItem onClick={signOut}>
        <LogOut className="mr-4" />
        Log out
      </MenuItem>
    </Menu>
  );
};

export default UserButton;
