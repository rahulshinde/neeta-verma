/** @type {import('tailwindcss').Config} */
export default {
  future: {
    hoverOnlyWhenSupported: true,
  },
  content: [],
  theme: {

    fontSize: {
      xxxs: ['0.5rem', {
        lineHeight: '1.16',
        letterSpacing: '0.03em'
      }],

      xxs: ['0.75rem', {
        lineHeight: '1.16',
        letterSpacing: '0.03em'
      }],
      //arial base
      xs: ['1rem', {
        lineHeight: '1.16',
        letterSpacing: '0.03em'
      }],
      s: ['1.3rem', {
        lineHeight: '1.125',
        letterSpacing: '0.03em'
      }],
      md: ['2.375rem', {
        lineHeight: '1',
        letterSpacing: '-0.03em',
      }],
      lg: ['4.375rem', {
        lineHeight: '1',
        letterSpacing: '-0.03em'
      }],

      // custom typefaces
      
    },

    fontFamily: {
      'sans': 'var(--sans)',
      'serif': 'var(--serif)',
    },

    extend: {
      animation: {
        slide: 'slide 25s linear infinite',
        bounceUp: 'bounceUp 1s 2.5'
      },
      colors: {
        'bg': 'var(--bg)',
        'fg': 'var(--fg)',
        'accent1': 'var(--accent1)'
      },
      spacing: {
        '12minus': 'var(--12minus)',
        'adjustedDocWidth': 'var(--adjustedDocWidth)',
      }
    },
  },
  plugins: [],
}

