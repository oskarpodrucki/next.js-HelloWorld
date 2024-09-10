import Header from "../components/header.js";
import styles from "../styles/global.css";

export default function RootLayout({ children }) {
	return (
		<html>
			<body>
				<Header />
				{children}
			</body>
		</html>
	);
}
