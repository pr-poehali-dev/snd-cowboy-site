import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}"
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				'oswald': ['Oswald', 'sans-serif'],
				'roboto': ['Roboto', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				cowboy: {
					brown: '#5D2A0A',
					tan: '#A0522D',
					sand: '#8B6914',
					cream: '#D2B48C',
					dark: '#1C0E08'
				},
				horror: {
					blood: '#800020',
					bone: '#E8DCC6',
					shadow: '#1A0F1A',
					red: '#B22222',
					black: '#0D0D0D',
					gray: '#2E2E2E',
					skull: '#F5F5DC'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'pulse-glow': {
					'0%': { boxShadow: '0 0 5px rgba(128, 0, 32, 0.3)' },
					'50%': { boxShadow: '0 0 25px rgba(128, 0, 32, 0.7), 0 0 50px rgba(178, 34, 34, 0.4)' },
					'100%': { boxShadow: '0 0 5px rgba(128, 0, 32, 0.3)' }
				},
				'flicker': {
					'0%, 18%, 22%, 25%, 53%, 57%, 100%': { opacity: '1' },
					'20%, 24%, 55%': { opacity: '0.4' }
				},
				'glitch': {
					'0%': { transform: 'translate(0)' },
					'20%': { transform: 'translate(-1px, 1px)' },
					'40%': { transform: 'translate(-1px, -1px)' },
					'60%': { transform: 'translate(1px, 1px)' },
					'80%': { transform: 'translate(1px, -1px)' },
					'100%': { transform: 'translate(0)' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'shadow-dance': {
					'0%': { filter: 'drop-shadow(0 0 10px rgba(128, 0, 32, 0.3))' },
					'50%': { filter: 'drop-shadow(0 0 30px rgba(128, 0, 32, 0.6))' },
					'100%': { filter: 'drop-shadow(0 0 10px rgba(128, 0, 32, 0.3))' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
				'pulse-glow': 'pulse-glow 4s infinite',
				'flicker': 'flicker 6s infinite',
				'glitch': 'glitch 0.5s linear infinite',
				'float': 'float 4s ease-in-out infinite',
				'shadow-dance': 'shadow-dance 3s ease-in-out infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;