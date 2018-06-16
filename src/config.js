
const FAKE_API = true;

const API_BASE = 'http://yoursite.com/api/';
const API_METHODS = {
    APP_DATA : ""
};

const FAKE_API_BASE = '/mock';
const FAKE_API_METHODS = {
    APP_DATA : "data.json"
};

export default {
  API_BASE : !FAKE_API ? API_BASE : FAKE_API_BASE,
  API_METHODS : !FAKE_API ? API_METHODS : FAKE_API_METHODS
}


const siteConfig = {
  siteName: 'Site name',
  siteIcon: 'ion-flash',
  footerText: 'Site name ©2018 Created by user'
};


const language = 'english';
const AlgoliaSearchConfig = {
  appId: '',
  apiKey: ''
};

export {
  siteConfig,
  language,
  AlgoliaSearchConfig
};
