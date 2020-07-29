let utils = require('@zqlianweb/utils')
let useActions = ['init', 'update', 'upgrade']
async function getAction (action) {
  if (action && useActions.indexOf(action)) {
    return Promise.reject('无效的action，目前支持' + useActions.join())
  }
  if (action === 'init') {
    utils.config.init()
  }
}
module.exports = {
  async getAction (action) {
    return getAction(action)
  }
}