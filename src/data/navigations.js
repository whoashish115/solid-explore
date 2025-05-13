import {
  HiOutlineHome as HomeIcon,
  HiOutlineUser as UserIcon,
  HiOutlineMail as MailIcon,
  HiOutlineSparkles,
} from 'react-icons/hi'

export const nav = [
    { name: "Home", link: "/", icon: <HomeIcon /> },
    { name: "About Me", link: "/about", icon: <UserIcon /> },
    { name: "Works", link: "/works", icon: <HiOutlineSparkles /> },
    { name: "Contact", link: "/contact", icon: <MailIcon />, },
  ];