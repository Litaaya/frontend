/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./pages/**/*.{js,jsx}",
      "./components/**/*.{js,jsx}"
    ],
    theme: {
      extend: {
        colors: {
          pastelbg:     "#fafafa",
          pastelwhite:  "#ffffff",
          pastelgray:   "#f2f2f2",
          pastelrose:   "#ffe4e1",
          pastelpeach:  "#ffefdb",
          pastelmint:   "#e8f6f3",
          pastelaccent: "#ffd1dc",
          primary:      "#333333",
          secondary:    "#555555",
        },
        fontFamily: {
          playfair: ['"Playfair Display"', 'serif'],
          poppins:  ['Poppins', 'sans-serif'],
        }
      },
    },
    plugins: [require("daisyui")],
    daisyui: {
      themes: [
        {
          pastel: {
            primary:     '#333333',
            secondary:   '#555555',
            accent:      '#ffd1dc',
            neutral:     '#fafafa',
            "base-100":  '#ffffff',
            info:        '#b2ebf2',
            success:     '#c8e6c9',
            warning:     '#ffecb3',
            error:       '#ffcdd2',
          }
        }
      ]
    }
  }
  