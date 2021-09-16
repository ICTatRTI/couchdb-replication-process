var PouchDB = require('pouchdb')
var fs = require('fs-extra')

PouchDB.replicate(process.env.SOURCE_DATABASE_URL, process.env.TARGET_DATABASE_URL, {
  live: true,
  retry: true,
  ...process.env.SINCE !== '0'
    {
      since: process.env.SINCE
    },
    : {}
}).on('change', function (info) {
  // handle change
  console.log('change')
  console.log(info.last_seq)
}).on('paused', function (err) {
  // replication paused (e.g. replication up to date, user went offline)
  console.log('paused')
  console.log(err)
}).on('active', function () {
  // replicate resumed (e.g. new changes replicating, user went back online)
  console.log('active')
}).on('denied', function (err) {
  // a document failed to replicate (e.g. due to permissions)
  console.log('denied')
  console.log(err)
}).on('complete', function (info) {
  // handle complete
  console.log('info')
  console.log(info)
}).on('error', function (err) {
  // handle error
  console.log('error')
  console.log(err)
});



