require("dotenv").config();

module.exports = {
  images: {
    loader: 'akamai',
    path: '/',
  },
  env: {
    NEXT_EXAMPLE_CMS_DATOCMS_API_TOKEN:
      process.env.NEXT_EXAMPLE_CMS_DATOCMS_API_TOKEN,
  },
};
