import Image from "next/image";
import styles from "./page.module.css";
import Section from "./Components/Section/Section";
export default function Home() {
  return (
    <div>
      <div className={`${styles.contents} container`}>
        <Section
          filter={(movie) => movie.status === 2}
          title="Phim đang chiếu"
        />
        <Section
          filter={(movie) => movie.status === 1}
          title="Phim sắp chiếu"
        />
        <Section
          filter={(movie) => movie.nation.toLowerCase() === "việt nam"}
          title="Phim Việt"
        />
      </div>
    </div>
  );
}
