import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Layout from '../../components/Layout'

const FirstPost = () => {
	return (
		<Layout>
			<Head>
				<title>First Post</title>
			</Head>
			<h1>First Post</h1>
			<p>
				<Link href='/'>Back to home</Link>
			</p>
		</Layout>
	)
}

export default FirstPost
