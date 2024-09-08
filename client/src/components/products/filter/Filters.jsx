import {
  ChartPieSlice,
  Copy,
  Pen,
  Phone,
  SignOut,
  UserCircle,
  Users,
} from "phosphor-react";
import {
  Button,
  Divider,
  Dropdown,
  DropdownAction,
  DropdownContent,
  DropdownItem,
  DropdownList,
} from "keep-react";

const Filters = () => {
  return (
    <Dropdown trigger="hover">
      <DropdownAction asChild>
        <h6 className="text-md font-bold cursor-pointer">Filters</h6>
      </DropdownAction>
      <DropdownContent className="bg-black">
        <DropdownList>
          <DropdownItem>
            <Users size={20} />
            Contacts
          </DropdownItem>
          <DropdownItem>
            <Phone size={20} />
            Phone
          </DropdownItem>
          <DropdownItem>
            <ChartPieSlice size={20} />
            Statistics
          </DropdownItem>
          <Divider />
          <DropdownItem>
            <Pen size={20} />
            Rename
          </DropdownItem>
          <DropdownItem>
            <Copy size={20} />
            Duplicate
          </DropdownItem>
          <Divider />
          <DropdownItem>
            <UserCircle size={20} />
            Account
          </DropdownItem>
          <DropdownItem>
            <SignOut size={20} />
            Logout
          </DropdownItem>
        </DropdownList>
      </DropdownContent>
    </Dropdown>
  );
};

export default Filters;
