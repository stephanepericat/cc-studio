import { supportedLanguages } from "../config/languages";

export default {
  title: 'Language',
  name: 'language',
  type: 'string',
  options: {
    list: supportedLanguages.map(({id, title}) => ({ title, value: id })),
    layout: 'dropdown'
  }
};
