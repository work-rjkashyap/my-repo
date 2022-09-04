module.exports = {
	siteMetadata: {
		title: `Rajeshwar Kashyap`,
		siteUrl: `https://rajeshwar-kashyap.github.io`,
		twitterUsername: '@RajeshwarKash11',
		description:
			'Rajeshwar Kashyap is a FullStack Developer who specializes in building (and occasionally designing) exceptional digital experiences.',
		image: '/Og-Image.png', // Path to your image you placed in the 'static' folder
	},
	plugins: [
		{
			resolve: 'gatsby-plugin-google-analytics',
			options: {
				// trackingId: 'G-4H6K3NTZEY',
				trackingId: 'G-PKWH4TCGB5',
			},
		},
		{
			resolve: `gatsby-plugin-sharp`,
			options: {
				// Defaults used for gatsbyImageData and StaticImage
				defaults: {},
				// Set to none to allow builds to continue on image errors
				failOn: `none`,
				// deprecated options and their defaults:
				base64Width: 20,
				forceBase64Format: `webp`, // valid formats: png,jpg,webp
				useMozJpeg: process.env.GATSBY_JPEG_ENCODER === `MOZJPEG`,
				stripMetadata: true,
				defaultQuality: 50,
			},
		},
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-image',
		'gatsby-plugin-sitemap',
		'gatsby-plugin-postcss',
		'gatsby-plugin-sass',
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				icon: 'src/images/icon.png',
			},
		},
		'gatsby-plugin-mdx',
		'gatsby-transformer-remark',
		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'images',
				path: './src/images/',
			},
			__key: 'images',
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'pages',
				path: './src/pages/',
			},
			__key: 'pages',
		},
	],
};
