import { useState, useRef , useEffect} from "react";
import { Link } from "react-router-dom";
import UserOne from '../../../images/user/user-01.png';


const DropdownUser = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const trigger = useRef(null);
  const dropdown = useRef(null);

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!dropdown.current) return;
      if (
        !dropdownOpen ||
        dropdown.current.contains(target) ||
        trigger.current.contains(target)
      ) return;
      setDropdownOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!dropdownOpen || keyCode !== 27) return;
      setDropdownOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  return (
    <div className="relative bg-gray-800 text-white">
      <Link
        ref={trigger}
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="flex items-center gap-4"
        to="#"
      >
        <span className="hidden text-right lg:block">
          <span className="block text-sm font-medium ">
            Thomas Anree
          </span>
          <span className="block text-xs">UX Designer</span>
        </span>

        <span className="h-12 w-12 rounded-full">
          <img src={UserOne} alt="User" />
        </span>

        <svg
          className="hidden fill-current sm:block"
          width="12"
          height="8"
          viewBox="0 0 12 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.410765 0.910734C0.736202 0.585297 1.26384 0.585297 1.58928 0.910734L6.00002 5.32148L10.4108 0.910734C10.7362 0.585297 11.2638 0.585297 11.5893 0.910734C11.9147 1.23617 11.9147 1.76381 11.5893 2.08924L6.58928 7.08924C6.26384 7.41468 5.7362 7.41468 5.41077 7.08924L0.410765 2.08924C0.0853277 1.76381 0.0853277 1.23617 0.410765 0.910734Z"
            fill=""
          />
        </svg>
      </Link>

      {/* <!-- Dropdown Start --> */}
      <div
        ref={dropdown}
        onFocus={() => setDropdownOpen(true)}
        onBlur={() => setDropdownOpen(false)}
        className={`absolute right-0 mt-4 flex w-62.5 flex-col rounded-sm border border-stroke  shadow-default dark:border-strokedark dark:bg-boxdark ${
          dropdownOpen === true ? 'block' : 'hidden'
        }`}
      >
        <ul className="flex flex-col gap-5 border-b border-stroke px-6 py-7.5 dark:border-strokedark">
          <li>
            <Link
              to="/profile"
              className="flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
            >
              <svg
                className="fill-current"
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 9.62499C8.42188 9.62499 6.35938 7.59687 6.35938 5.12187C6.35938 2.64687 8.42188 0.618744 11 0.618744C13.5781 0.618744 15.6406 2.64687 15.6406 5.12187C15.6406 7.59687 13.5781 9.62499 11 9.62499ZM11 2.16562C9.28125 2.16562 7.90625 3.50624 7.90625 5.12187C7.90625 6.73749 9.28125 8.07812 11 8.07812C12.7188 8.07812 14.0938 6.73749 14.0938 5.12187C14.0938 3.50624 12.7188 2.16562 11 2.16562Z"
                  fill=""
                />
                <path
                  d="M17.7719 21.4156H4.2281C3.5406 21.4156 2.9906 20.8656 2.9906 20.1781V17.0844C2.9906 13.8906 7.03123 12.2594 11 12.2594C14.9687 12.2594 19.0094 13.8906 19.0094 17.0844V20.1781C19.0094 20.8656 18.4594 21.4156 17.7719 21.4156ZM4.2281 18.2594H17.7719V20.1781H4.2281V18.2594Z"
                  fill=""
                />
              </svg>
              Profile
            </Link>
          </li>
          <li>
            <Link
              to="/contacts"
              className="flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
            >
              <svg
                className="fill-current"
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.625 11C17.1875 11 18.4375 9.75 18.4375 8.1875C18.4375 6.625 17.1875 5.375 15.625 5.375C14.0625 5.375 12.8125 6.625 12.8125 8.1875C12.8125 9.75 14.0625 11 15.625 11ZM15.625 6.5C16.7031 6.5 17.5625 7.35938 17.5625 8.1875C17.5625 9.01562 16.7031 9.875 15.625 9.875C14.7969 9.875 14.0625 9.14062 14.0625 8.1875C14.0625 7.35938 14.7969 6.5 15.625 6.5Z"
                  fill=""
                />
                <path
                  d="M21.7891 17.6406C20.4219 16.4375 18.5469 15.5 16.5 15.5H5.5C3.45312 15.5 1.57812 16.4375 0.210938 17.6406C-0.0703125 17.8906 -0.0703125 18.3281 0.210938 18.5781L3.875 21.7422C4.1875 22.0234 4.64062 22.0234 4.95312 21.7422L7.5 19.4062V20.9375C7.5 21.6406 8.07812 22.2188 8.78125 22.2188H13.2188C13.9219 22.2188 14.5 21.6406 14.5 20.9375V19.4062L17.0469 21.7422C17.3594 22.0234 17.8125 22.0234 18.125 21.7422L21.7891 18.5781C22.0703 18.3281 22.0703 17.8906 21.7891 17.6406Z"
                  fill=""
                />
              </svg>
              Contacts
            </Link>
          </li>
          <li>
            <Link
              to="/account-settings"
              className="flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
            >
              <svg
                className="fill-current"
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 9.62499C8.42188 9.62499 6.35938 7.59687 6.35938 5.12187C6.35938 2.64687 8.42188 0.618744 11 0.618744C13.5781 0.618744 15.6406 2.64687 15.6406 5.12187C15.6406 7.59687 13.5781 9.62499 11 9.62499ZM11 2.16562C9.28125 2.16562 7.90625 3.50624 7.90625 5.12187C7.90625 6.73749 9.28125 8.07812 11 8.07812C12.7188 8.07812 14.0938 6.73749 14.0938 5.12187C14.0938 3.50624 12.7188 2.16562 11 2.16562Z"
                  fill=""
                />
                <path
                  d="M17.7719 21.4156H4.2281C3.5406 21.4156 2.9906 20.8656 2.9906 20.1781V17.0844C2.9906 13.8906 7.03123 12.2594 11 12.2594C14.9687 12.2594 19.0094 13.8906 19.0094 17.0844V20.1781C19.0094 20.8656 18.4594 21.4156 17.7719 21.4156ZM4.2281 18.2594H17.7719V20.1781H4.2281V18.2594Z"
                  fill=""
                />
              </svg>
              Account Settings
            </Link>
          </li>
        </ul>
        <button
          onClick={() => alert('Logged out')}
          className="text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
        >
          Logout
        </button>
      </div>
      {/* <!-- Dropdown End --> */}
    </div>
  );
};


export default DropdownUser;