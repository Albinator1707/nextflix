import { Banner, NavBar, SectionCards } from '@/components';
import { getVideoDetails, getVideos, getWatchItAgainVideos } from '@/lib/videos';
import { getUserIdAndToken } from '@/utils/getUserIdAndToken';
import Head from 'next/head';

import styles from '../styles/Home.module.scss';

export async function getServerSideProps(context) {
	const { userId, token } = await getUserIdAndToken(context);

	const disneyVideos = await getVideos('disney trailer');
	const productivityVideos = await getVideos('productivity');
	const travelVideos = await getVideos('travel');
	const popularVideos = await getVideos('popular');
	const watchItAgain = await getWatchItAgainVideos(token, userId);
	const BannerDetails = await getVideoDetails('b9EkMc79ZSU');
	return {
		props: {
			disneyVideos,
			productivityVideos,
			travelVideos,
			popularVideos,
			watchItAgain,
			BannerDetails: BannerDetails[0],
		},
	};
}

export default function Home({
	disneyVideos,
	productivityVideos,
	travelVideos,
	popularVideos,
	watchItAgain,
	BannerDetails,
}) {
	return (
		<div className={styles.container}>
			<Head>
				<title>Nextflix</title>
				<meta
					name="description"
					content="Generated by create next app"
				/>
			</Head>

			<NavBar />
			<Banner
				title={BannerDetails.title.split('|')[0]}
				subtitle={BannerDetails.description.slice(0, 150) + '...'}
				videoId="b9EkMc79ZSU"
			/>
			<SectionCards
				videos={disneyVideos}
				title="Disney"
				size="large"
			/>
			<SectionCards
				videos={watchItAgain}
				title="Watch it again"
				size="small"
			/>
			<SectionCards
				videos={travelVideos}
				title="Travel"
				size="small"
			/>

			<SectionCards
				videos={productivityVideos}
				title="Productivity"
				size="medium"
			/>

			<SectionCards
				videos={popularVideos}
				title="Popular"
				size="small"
			/>
		</div>
	);
}
