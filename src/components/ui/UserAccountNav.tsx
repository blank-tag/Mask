import { FC } from "react";
import { User } from "next-auth";
import { DropdownMenu, DropdownMenuTrigger } from "./DropdownMenu";
import { UserAvatar } from "./UserAvatar";

interface UserAccountNavProps extends React.HTMLAttributes<HTMLDivElement> {
  user: Pick<User, "name" | "email" | "image">;
}

const UserAccountNav: FC<UserAccountNavProps> = ({ user }: UserAccountNavProps) => {
  return <DropdownMenu>
    <DropdownMenuTrigger>
    <UserAvatar
          user={{ name: user.name || null, image: user.image || null }}
          className='h-8 w-8'
        />
    </DropdownMenuTrigger>

  </DropdownMenu>
  ;
};

export default UserAccountNav;
