'use strict';
const K = require('kado')
//application config
K.configure({
  root: __dirname,
  db: {
    sequelize: {
      name: 'kadodemo',
      user: 'kadodemo',
      password: 'kadodemo'
    }
  },
  interface: {
    admin: {
      enabled: true
    },
    main: {
      enabled: true
    }
  },
  module: {
    blog: { enabled: true },
    content: {enabled: true},
    doc: {enabled: true},
    setting: { enabled: true },
    staff: { enabled: true }
  }
})
//load env config
let localConfig = __dirname + '/config.local.js'
if(K.fs.existsSync(localConfig)) K.configure(require(localConfig))
if(process.env.KADO_CONFIG) K.configure(process.env.KADO_CONFIG)
//start application
K.go('kado-demo')
