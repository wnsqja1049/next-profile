import {nextui} from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-geist-mono)"],
        blackHanSans: ["BlackHanSans-Regular"],
        notoSansKR: ["NotoSansKR-Regular"],
        notoSans: ["NotoSans-Regular"],
        poppins: ["Poppins-Regular"],
        doHyeon: ["DoHyeon-Regular"],
        nanumGothicR: ["NanumGothic-Regular"],
        nanumGothicB: ["NanumGothic-Bold"],
        nanumGothicEB: ["NanumGothic-ExtraBold"],
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}
