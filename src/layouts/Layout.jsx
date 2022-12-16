import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import Tabs from "../components/ui/display/Tabs";
import Tab from "../components/ui/display/Tabs/Tab";

import styles from "./Layout.module.css";

export default function Layout({ children }) {
  const { pathname } = useRouter();

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Image
          src="/ceiling-lamp.png"
          width={150}
          height={150}
          alt="lamp"
        ></Image>
      </div>
      <div className={styles.layout}>
        <Tabs>
          <Link href="/">
            <Tab selected={pathname === "/"}>Home</Tab>
          </Link>
          <Link href="/art">
            <Tab selected={pathname === "/art"}>Art</Tab>
          </Link>
          <Tab>Software</Tab>
          <Tab>Games</Tab>
          <Link href="/blogs">
            <Tab selected={pathname === "/blogs"}>Blog</Tab>
          </Link>
        </Tabs>

        <main>{children}</main>
      </div>
    </>
  );
}
