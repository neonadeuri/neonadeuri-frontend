import "../public/styles/dist.css"
import "../public/fontawesome-free-6.2.1-web/css/all.min.css"

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}