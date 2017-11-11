// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: 'AIzaSyAgo_BXUHBpLgUWho6rgzmAAp16J9mCTwY',
    authDomain: 'prismny-dev.firebaseapp.com',
    databaseURL: 'https://prismny-dev.firebaseio.com',
    projectId: 'prismny-dev',
    storageBucket: 'prismny-dev.appspot.com',
    messagingSenderId: '289817140463'
  }
};
