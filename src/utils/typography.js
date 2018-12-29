import Typography from 'typography'
import moragaTheme from 'typography-theme-moraga'

const typography = new Typography(
  {
    baseFontSize: '18px',
    scaleRatio: 2.5,
    googleFonts: [
      {
        name: 'Roboto',
        styles: ["100",
        "100italic",
        "300",
        "300italic",
        "regular",
        "italic",
        "500",
        "500italic",
        "700",
        "700italic",
        "900",
        "900italic"],
      },
      {
        name: 'Roboto Mono',
        styles: ["regular"],
      }
    ],
    headerFontFamily: ['Roboto', 'sans-serif'],
    bodyFontFamily: ['Roboto', 'sans-serif'],
    bodyWeight: 300,
    boldWeight: 400,
    headerWeight: '300',
    overrideThemeStyles: ({ rhythm }, options, styles) => ({
      a: {
        fontWeight: 400,
        color: 'hsla(0,0%,0%,0.7)',
        textDecoration: 'none'
      },
      'a:hover': {
        textDecoration: 'none'
      },
    }),
  },
  moragaTheme
  );

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
