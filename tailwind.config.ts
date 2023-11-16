import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      backgroundColor: {
        base: '#f0e7db',
        dark: '#202023',
        glassTeal: '#88ccca'
      },
      textColor: {
        base: 'black',
        dark: 'white',
        glassTeal: '#a8dadc'
      },
      borderColor: {
        base: '#202023',
        dark: '#f0e7db'
      }
    }
  },
  plugins: []
}
export default config
