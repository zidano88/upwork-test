import Image from "next/image";
import settingsIcon from "../../public/icons/settings.png";
import speakingIcon from "../../public/icons/speaking.png";
import { useState } from "react";
import closeIcon from "../../public/icons/close.png";

const SideNav = () => {
  return (
    <div className="w-full flex flex-row">
      {/* Icon buttons */}
      <div className="w-12 mx-5 flex flex-col">
        <button className="bg-primary-light p-2 rounded-md flex justify-center my-3 py-2.5">
          <Image src={settingsIcon} alt="settings button" className="w-5" />
        </button>
        <button className="p-2 rounded-md flex justify-center my-3 py-2.5">
          <Image src={speakingIcon} alt="user button" className="w-5" />
        </button>
      </div>

      {/* Nav lists */}
      <div className="w-full p-3">
        <h1 className="text-primary-light text-lg tracking-tight">
          Script Generation Settings
        </h1>
        <div className=" flex flex-col">
          <DropList header="Content Theme" options={["Option1", "Option2"]} />
          <DropList
            header="Time and Duration"
            options={["Option1", "Option2", "Option3"]}
          />
          <DropList header="Target Audiences" options={["Option1"]} hasInput />
          <DropList
            header="Descriptive keywords"
            options={["Option1", "Option2", "Option3"]}
          />
          <DropList
            header="Fine-Tuning"
            options={["Option1", "Option2", "Option3", "Option4"]}
            hasInput
          />
        </div>
      </div>
    </div>
  );
};

export default SideNav;

const DropList = ({ header, options, hasInput }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <hr class="border-t-[1px] border-secondary opacity-40 mt-3 mb-1" />
        <button
          type="button"
          className="inline-flex items-center justify-between w-full px-2 py-2 text-md font-medium text-secondary-light bg-transparent border-none hover:text-secondary rounded-md"
          onClick={toggleDropdown}
          aria-haspopup="true"
          aria-expanded={isDropdownOpen}
        >
          {header}
          <svg
            className={`w-5 h-5 ml-2 -mr-1 opacity-40  hover:text-secondary  transform  ${
              isDropdownOpen ? "rotate-180" : ""
            }`}
            fill="#7484b1"
            viewBox="0 0 20 20"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M10 12l-6-6h12l-6 6z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      {isDropdownOpen && (
        <div className=" right-0 w-full mt-2 origin-top-right bg-transparent divide-y divide-gray-100 ml-1">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="dropdown-button"
          >
            {options?.map((element, index) => {
              return (
                <a
                  key={index}
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-300 hover:bg-primary-light rounded-md hover:text-gray-900"
                  role="menuitem"
                >
                  {element}
                </a>
              );
            })}
            {hasInput && (
              <div>
                <div className="block  py-2 text-sm text-gray-300 rounded-md flex flex-row ml-3">
                  <input
                    type="text"
                    className="w-full rounded-md px-3 text-secondary pt-1"
                  />
                  <button className="ml-2 mr-4 bg-white text-secondary px-2 py-1 pt-2 rounded-md hover:bg-gray-300 hover:text-secondary">
                    Add
                  </button>
                </div>
                {/* options */}

                <div className="pl-3 py-1 flex flex-row mb-5">
                  <div className="text-xs bg-primary-lightest text-primary-dark px-2.5 rounded-2xl mx-1 flex flex-row-justify-center items-center pb-0.5 pt-1">
                    check status
                    <button>
                      <Image
                        src={closeIcon}
                        alt="close button"
                        className="w-2 ml-2"
                      />
                    </button>
                  </div>
                  <div className="text-xs bg-primary-lightest text-primary-dark px-2.5 rounded-2xl mx-1 flex flex-row-justify-center items-center pb-0.5 pt-1">
                    sending data
                    <button>
                      <Image
                        src={closeIcon}
                        alt="close button"
                        className="w-2 ml-2"
                      />
                    </button>
                  </div>
                  <div className="text-xs bg-primary-lightest text-primary-dark px-2.5 rounded-2xl mx-1 flex flex-row-justify-center items-center pb-0.5 pt-1">
                    business-to-be
                    <button>
                      <Image
                        src={closeIcon}
                        alt="close button"
                        className="w-2 ml-2"
                      />
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

{
  /* <div class="relative inline-block text-left">
  <div>
    <button
      type="button"
      class="inline-flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    >
      Dropdown
      <svg
        class="w-5 h-5 ml-2 -mr-1"
        fill="currentColor"
        viewBox="0 0 20 20"
        aria-hidden="true"
      >
        <path
          fill-rule="evenodd"
          d="M10 12l-6-6h12l-6 6z"
          clip-rule="evenodd"
        />
      </svg>
    </button>
  </div>
  <div class="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
    <div
      class="py-1"
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="options-menu"
    >
      <a
        href="#"
        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
        role="menuitem"
      >
        Option 1
      </a>
      <a
        href="#"
        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
        role="menuitem"
      >
        Option 2
      </a>
      <a
        href="#"
        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
        role="menuitem"
      >
        Option 3
      </a>
    </div>
  </div>
</div>; */
}
