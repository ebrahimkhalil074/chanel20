import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@heroui/react";
import { useCustomSession } from "../context/sessonContext";
import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";
import { Avatar } from "@nextui-org/avatar";

const NavbarDropdown = () => {
  const router = useRouter();
  const { session } = useCustomSession();

  // লগআউট ফাংশন
  const handleLogout = async () => {
    console.log("লগআউট হচ্ছে...");
    await signOut({ callbackUrl: "/" }); // লগআউটের পর হোম পেজে নিয়ে যাবে
  };

  // নেভিগেশন ফাংশন
  const handleNavigation = (pathname: string) => {
    router.push(pathname);
  };

  // মেনু আইটেমগুলো আলাদাভাবে বানানো হচ্ছে
  const menuItems = [];

  if (session?.user?.email) {
    menuItems.push(
      <DropdownItem key="/dashboard" onClick={() => handleNavigation("/dashboard")}>
        ড্যাশবোর্ড
      </DropdownItem>
    );
  }

  // সবার জন্য লগআউট আইটেম
  menuItems.push(
    <DropdownItem
      key="delete"
      onClick={handleLogout}
      className="text-danger"
      color="danger"
    >
      লগআউট
    </DropdownItem>
  );

  return (
    <div>
      <Dropdown>
        <DropdownTrigger>
            <Avatar className="cursor-pointer" src={session?.user?.image } />
        </DropdownTrigger>
        <DropdownMenu aria-label="User Menu" disabledKeys={["edit"]}>
          {menuItems}
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default NavbarDropdown;
