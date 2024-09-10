import headerstyles from "../styles/header.module.css";
import Link from "next/link";

export default function Header() {
	return (
		<div className={headerstyles.header}>
			<Link href='/helloworld'>Hello World</Link> |{" "}
			<Link href='/'>About Me</Link>
		</div>
	);
}
