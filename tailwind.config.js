/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			backdropBlur: {
				sm: '4px',
			  },
			screens: {
				xs: "520px",
				sm: '640px',    // Small screens (mobile)
       			md: '768px',    // Medium screens (tablets)
        		lg: '1024px',   // Large screens (laptops)
        		xl: '1280px',   // Extra-large screens (desktops)
        		'2xl': '1536px',
				"customlg": "1290px"
			}
			
			
		  },
		},
	plugins: [],
}
