import EditNoteIcon from "@mui/icons-material/EditNote";
import styles from "./Home.module.css";

export default function Header() {
	return (
		<header className={styles.header}>
			<h1>
				<EditNoteIcon />
				Notes App
			</h1>
		</header>
	);
}
