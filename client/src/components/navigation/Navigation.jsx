import { MagnifyingGlass } from "phosphor-react";
import logo from "../../assets/images/logo.svg";
import {
  Input,
  InputIcon,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarCollapseBtn,
  NavbarContainer,
  NavbarItem,
  NavbarList,
} from "keep-react";
import arrowSvg from "../../assets/images/icons/vector3.svg";
import userSvg from "../../assets/images/icons/vector12.svg";
import wishListSvg from "../../assets/images/icons/vector11.svg";
import cartSvg from "../../assets/images/icons/vector4.svg";

const Navigation = () => {
  return (
    <Navbar className="py-2">
      <NavbarContainer>
        <NavbarBrand>
          <img src={logo} height="42" width="200" alt="Logo" />
        </NavbarBrand>
        <NavbarList>
          <fieldset className="relative text-gray-primary w-[100%] xl:w-[600px]">
            <Input
              placeholder="Search for product..."
              className="text-gray-primary ps-11"
            />
            <InputIcon>
              <MagnifyingGlass className="text-gray-primary" size={19} />
            </InputIcon>
          </fieldset>
        </NavbarList>
        <NavbarList>
          <span>
            <img width="20" height="20" src={arrowSvg} alt="Arrow Icon" />
          </span>
          |
          <NavbarItem>
            <img width="19" height="19" src={userSvg} alt="" />
          </NavbarItem>
          <NavbarItem>
            <img width="19" height="19" src={wishListSvg} alt="" />
          </NavbarItem>
          <NavbarItem className="relative">
            <img width="19" height="19" src={cartSvg} alt="" />
            <span className="w-[24px] h-[24px] flex justify-center items-center rounded-full absolute top-[-5px] right-1 bg-orange text-white">
              0
            </span>
          </NavbarItem>
          <NavbarItem className="relative">
            <p className="text-xl">$0</p>
          </NavbarItem>
        </NavbarList>
        <NavbarCollapseBtn />
        <NavbarCollapse>
          <NavbarItem>
            <fieldset className="relative text-gray-primary w-[100%] xl:w-[600px]">
              <Input
                placeholder="Search for product..."
                className="text-gray-primary ps-11"
              />
              <InputIcon>
                <MagnifyingGlass className="text-gray-primary" size={19} />
              </InputIcon>
            </fieldset>
          </NavbarItem>
          <NavbarItem>
            <img width="19" height="19" src={userSvg} alt="" />
          </NavbarItem>
          <NavbarItem>
            <img width="19" height="19" src={wishListSvg} alt="" />
          </NavbarItem>
          <NavbarItem className="relative">
            <img width="19" height="19" src={cartSvg} alt="" />
            <span className="w-[24px] h-[24px] flex justify-center items-center rounded-full absolute top-[-5px] right-1 bg-orange text-white">
              0
            </span>
          </NavbarItem>
          <NavbarItem className="relative">
            <p className="text-xl">$0</p>
          </NavbarItem>
        </NavbarCollapse>
      </NavbarContainer>
    </Navbar>
  );
};

export default Navigation;
