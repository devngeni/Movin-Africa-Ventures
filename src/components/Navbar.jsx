import style from "@/styles/Navbar.module.css";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className={style.nav}>
      <Image
        className={style.logo}
        src="/Layer1.png"
        width={128}
        height={35}
        alt="logo"
      />
    </div>
  );
};

export default Navbar;
