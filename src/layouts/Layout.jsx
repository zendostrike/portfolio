import { useRouter } from "next/router";

import { CustomLink, Tab, Tabs } from "@/components";

import styles from "./Layout.module.css";

export default function Layout({ children }) {
  const { pathname } = useRouter();

  return (
    <>
      <div className={styles.layout}>
        <Tabs>
          <CustomLink href="/">
            <Tab selected={pathname === "/"}>Home</Tab>
          </CustomLink>
{/*           <CustomLink href="/art">
            <Tab selected={pathname === "/art"}>Art</Tab>
          </CustomLink>
          <Tab>Software</Tab>
          <Tab>Games</Tab> */}
          <CustomLink href="/blogs">
            <Tab selected={pathname === "/blogs"}>Blog</Tab>
          </CustomLink>
        </Tabs>

        <main>{children}</main>
      </div>
    </>
  );
}
