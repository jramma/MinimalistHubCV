interface SiteConfig {
	author: string
	title: string
	description: string
	lang: string
	ogLocale: string
	shareMessage: string
	paginationSize: number
}

export const siteConfig: SiteConfig = {
	author: 'Jose Ramos', // Site author
	title: 'Patrón de yate', // Site title.
	description: 'Siempre he navegado y me encanta trabajar en el mar.', // Description to display in the meta tags
	lang: 'es',
	ogLocale: 'es',
	shareMessage: 'Comparte', // Message to share a post on social media
	paginationSize: 6 // Number of posts per page
}
