import styles from "./SocialLinks.module.scss";
import { RiFacebookFill, RiTwitterFill, RiInstagramLine } from "react-icons/ri";

const socialLinks = [
  { url: "#", component: <RiFacebookFill /> },
  { url: "#", component: <RiTwitterFill /> },
  { url: "#", component: <RiInstagramLine /> },
];

const renderLinks = socialLinks.map((link, i) => (
  <li key={i}>
    <a href="link.url">{link.component}</a>
  </li>
));

const SocialLinks = () => {
  return <ul className={styles.media}>{renderLinks}</ul>;
};

export default SocialLinks;
