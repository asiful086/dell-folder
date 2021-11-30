import Vue from 'vue';
import Vuex from 'vuex';
// import createPersistedState from 'vuex-persistedstate';
// import SecureLS from 'secure-ls';
// import auth from './auth';
// import common from './common';

// const ls = new SecureLS({ isCompression: false, encryptionSecret: 's3cr3tEncrypti0n' });
// const ss = new SecureLS({ isCompression: false, encryptionSecret: 's3cr3tEncrypti0n' });
// ss.ls = window.sessionStorage;

Vue.use(Vuex);

export default new Vuex.Store({
//   plugins: [
//     createPersistedState({
//       storage: {
//         getItem: key => ss.get(key),
//         setItem: (key, value) => ss.set(key, value),
//         removeItem: key => ss.remove(key),
//       },
//       paths: ['flight', 'hotel', 'express', 'bus', 'tour', 'visa', 'common'],
//     }),
//     createPersistedState({
//       storage: {
//         getItem: key => ls.get(key),
//         setItem: (key, value) => ls.set(key, value),
//         removeItem: key => ls.remove(key),
//       },
//       paths: ['auth'],
//     }),
//   ],
  modules: {
    // flight,
    // hotel,
    // express,
    // bus,
    // tour,
    // visa,
    // auth,
    // common,
  },
});
