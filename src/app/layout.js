export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<head>
				<title>Notes App</title>
				<link
					href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:200,300"
					rel="stylesheet"
				/>
				<link rel="stylesheet" href="styles.css" />
			</head>
			<body>{children}</body>
		</html>
	);
}
