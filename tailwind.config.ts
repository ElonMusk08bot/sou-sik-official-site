import type { Config } from 'tailwindcss'
const config: Config = {content:['./app/**/*.{js,ts,jsx,tsx,mdx}','./components/**/*.{js,ts,jsx,tsx,mdx}'],theme:{extend:{colors:{carbon:'#070707',steel:'#1D1D1F',muted:'#8A8A8A',brass:'#C7A15A',cream:'#F5F0E8'},fontFamily:{sans:['Inter','Noto Sans TC','system-ui','sans-serif']} }},plugins:[]}
export default config
