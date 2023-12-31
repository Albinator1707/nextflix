import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';

import styles from './Card.module.scss';

const IMG_BY_DEFAULT =
	'https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2059&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

function Card({ imgUrl = IMG_BY_DEFAULT, size = 'medium ', id }) {
	const [src, setSrc] = useState(imgUrl);

	const classMap = {
		large: styles['card-large'],
		medium: styles['card-medium'],
		small: styles['card-small'],
	};

	function handleError() {
		setSrc(IMG_BY_DEFAULT);
	}

	const scale = id === 0 ? { scaleY: 1.1 } : { scale: 1.1 };

	return (
		<div className={styles.card}>
			<motion.div
				className={classMap[size]}
				whileHover={{ ...scale, zIndex: 3 }}
			>
				<Image
					src={src}
					alt="Card Image"
					layout="fill"
					onError={handleError}
					className={styles.card__img}
				/>
			</motion.div>
		</div>
	);
}

export default Card;
