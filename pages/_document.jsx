import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
					<link
						rel="preconnect"
						href="https://fonts.googleapis.com"
					/>
					<link
						rel="preconnect"
						href="https://fonts.gstatic.com"
						crossOrigin="true"
					/>
					<link
						href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300;400;500;600;700;800&display=swap"
						rel="stylesheet"
					/>
					<link
						rel="apple-touch-icon"
						sizes="180x180"
						href="favicon/apple-touch-icon.png"
					/>
					<link
						rel="icon"
						type="image/png"
						sizes="32x32"
						href="favicon/favicon-32x32.png"
					/>
					<link
						rel="icon"
						type="image/png"
						sizes="16x16"
						href="favicon/favicon-16x16.png"
					/>

					<link
						rel="mask-icon"
						href="favicon/safari-pinned-tab.svg"
						color="#5bbad5"
					/>
					<meta
						name="msapplication-TileColor"
						content="#da532c"
					/>
					<meta
						name="theme-color"
						content="#ffffff"
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
