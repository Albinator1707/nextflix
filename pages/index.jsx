import Head from 'next/head';
import { Banner } from '@/components';

import styles from '../styles/Home.module.scss';

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Nextflix</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			{/* <main className={styles.main}> */}
			<h1 className={styles.title}>Nextflix</h1>
			{/* </main> */}
			<Banner title="Title" subtitle="Subtitle" />
		</div>
	);
}
