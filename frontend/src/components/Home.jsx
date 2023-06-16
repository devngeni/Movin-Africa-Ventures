import style from "@/styles/main.module.css";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <div className={style.Mainhome}>
      <div className={style.container}>
        <Image
          className={style.rocket}
          src="/rocket.png"
          width={252}
          height={139}
          alt="logo"
        />
        <p className={style.text_1}>
          HOLD ON!
          <br /> WE ARE IN THE KITCHEN
        </p>
        <p className={style.text_2}>Cooking our Website.</p>

        <p className={style.text_3}>
          We will be launching soon.
          <br /> Stay tuned.
        </p>

        <button className={style.btn}>
          <Link
            href="https://twitter.com/movinafrica"
            target="_blank"
            rel="noopener noreferrer"
          >
            Notify me
          </Link>
        </button>

        <div className={style.group}>
          <Link
            href="https://twitter.com/movinafrica"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src="/tw.png" alt="twitter" width={27} height={22} />
          </Link>
          <Link
            href="https://www.linkedin.com/company/movin-africa/about/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src="/a.png" alt="linkdn" width={24} height={24} />
          </Link>
          <Link
            href="mailto: info@movin.africa"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src="/sm.png" alt="email" width={29} height={18} />
          </Link>
        </div>
      </div>
      <Image
        className={style.blur1}
        src="/24.png"
        width={489}
        height={367}
        alt="logo"
      />
      <Image
        className={style.blur2}
        src="/023.png"
        width={489}
        height={367}
        alt="logo"
      />
    </div>
  );
};

export default Home;
