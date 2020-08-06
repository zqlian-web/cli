let utils = require('@zqlianweb/utils')
let useActions = ['init', 'update', 'upgrade']
module.exports = {
  async checkAction (action) {
    if (action && useActions.indexOf(action) === -1) {
      return Promise.reject('无效的action，目前支持' + useActions.join())
    }
    if (action === 'init') {
      utils.config.init()
    }
  }
}