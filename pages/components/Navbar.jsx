import userLogo from "../../public/icons/user.png";
import logoImage from "../../public/logo.png";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex flex-row justify-between items-center h-10 w-full px-5 py-9 text-2xl mb-4">
      <h1 className="flex flex-row items-center justify-center">
        <Image
          src={logoImage}
          alt="website logo"
          className="w-14 h-14 mr-1 mb-3"
        />
        YourContent.
        <span className="text-primary-lightest">ai</span>
      </h1>
      <div>
        <Image src={userLogo} className="w-8" />
      </div>
    </div>
  );
};

export default Navbar;
