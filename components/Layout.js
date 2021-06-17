//head, image, styles, utilclasses, link
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from './Layout.module.css'
import utilStyles from '../styles/utils.module.css'

const name = 'Buster'
export const siteTitle = "Buster's Blog"

const Layout = (props) => {
	return (
		<div className={styles.container}>
			<Head>
				<link rel='shortcut icon' href='favicon.ico' type='image/x-icon' />
				<meta name='description' content={siteTitle} />
			</Head>
			{/* {props.children} */}
			<header className={styles.header}>
				{props.home ? (
					<>
						<Image
							priority
							src='/images/profile.jpg'
							className={utilStyles.borderCircle}
							height={144}
							width={144}
							alt={name}
						/>
						<h1 className={utilStyles.heading2Xl}>{name}</h1>
					</>
				) : (
					<>
						<Link href='/'>
							<a>
								<Image
									priority
									src='/images/profile.jpg'
									className={utilStyles.borderCircle}
									height={108}
									width={108}
									alt={name}
								/>
							</a>
						</Link>
						<h2 className={utilStyles.headingLg}>
							<Link href='/'>
								<a className={utilStyles.colorInherit}>{name}</a>
							</Link>
						</h2>
					</>
				)}
			</header>
			<main>
				{props.children}
			</main>
			{!props.home && (
				<Link href="/">
					<a>Back to Home</a>
				</Link>
			)}
		</div>
	)
}

export default Layout
