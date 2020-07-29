const inquirer = require('inquirer')
async function getModule (module) {
  if (module) return module
  var prompts = []
  prompts.push({
    type: 'input',
    name: 'module',
    message: '请输入需要的module模块'
  })
  let answers = await new Promise(rev => {
    inquirer.prompt(prompts).then(rev)
  })
  return getModule(answers.module)
}
module.exports = {
  async getModule (module) {
    return getModule(module)
  }
}