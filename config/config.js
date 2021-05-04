fs = require('fs')

const serverCert = fs.readFileSync("./config/okta_server.cert", { encoding: "utf8" });
const privateKey = fs.readFileSync("./config/privkey.pem", { encoding: "utf8" });
// const publicKey = fs.readFileSync("./config/public.pem", { encoding: "utf8" });

module.exports = {
  development: {
    app: {
      name: 'Passport SAML strategy example',
      port: 3000
    },
    passport: {
      strategy: 'saml',
      saml: {
        path: '/login/callback',
        "issuer": "http://www.okta.com/exkomiekyqRYqEj715d6",
        "entryPoint": "https://dev-16013278.okta.com/app/dev-16013278_nineleapsprecantoweb_1/exkomiekyqRYqEj715d6/sso/saml",
        cert: serverCert,
        decryptionPvk: privateKey,
        privateCert: privateKey
      }
    }
  }
};

