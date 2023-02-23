import Logo from "./extensions/logo.png";

const config = {
  auth: {
    logo: Logo,
  },
  locales: ['en', 'no'],
  translations: {
    en: {
      "Auth.form.welcome.title": "Huateng Fang",
      "Auth.form.welcome.subtitle": "Log in to admin panel",
      "app.components.LeftMenu.navbrand.title": "Huateng Fang",
      "app.components.LeftMenu.navbrand.workplace": "Dashboard",
    },
    no: {
    },
  },
  tutorials: false,
   notifications: { releases: false },
};

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};
