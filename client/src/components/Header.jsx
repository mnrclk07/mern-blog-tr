import { Button, Navbar, TextInput } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";
export default function Header() {
  const path = useLocation().pathname;
  return (
    <Navbar className="border-b-2">
      <Link
        to="/"
        className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white">
        <span className="px-5 py-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-se-lg rounded-es-lg text-white">
          MERN
        </span>
        Blog
      </Link>
      <form className="flex items-center gap-0">
        <TextInput
          type="text"
          placeholder="Ara"
          aria-label="Search input"
          style={{ borderRadius: "50px 0 0 50px", borderRight: "none" }}
          className="hidden lg:inline w-96"
        />
        <Button
          className="w-14 h-10 hidden lg:inline-flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 "
          type="submit"
          color="white"
          title="Ara"
          style={{
            padding: "21px",
            borderRadius: "0 50px 50px 0",
          }}
          aria-label="Search button">
          <AiOutlineSearch className="size-6" />
        </Button>
      </form>
      <div className="flex gap-2 md:order-2">
        <Button className="w-12 h-10 hidden sm:inline" color="gray" pill>
          <FaMoon />
        </Button>
        <Link to="/sign-in">
          <Button gradientDuoTone="purpleToBlue">Giriş yap</Button>
        </Link>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link active={path === "/"} as={"div"}>
          <Link to="/">Ana Sayfa</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/about"} as={"div"}>
          <Link to="/about">Hakkımda</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/projects"} as={"div"}>
          <Link to="/projects">Projeler</Link>
        </Navbar.Link>
        <Navbar.Link
          active={path === "/search"}
          as={"div"}
          className="sm:hidden">
          <Link to="/search?searchTerm=">Ara</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
