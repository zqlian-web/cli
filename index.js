#! /usr/bin/env node
const program = require('commander')
const inquirer = require('inquirer')
/*
*inquirer功能简介
*		input–输入
*		validate–验证
*		list–列表选项
*		confirm–提示
*		checkbox–复选框等等
*/
const path = require('path')
const moduleModule = require('./module')
const actionModule = require('./action')
async function doAction (action, module, more) {
  // 进行 action 初始化
  await actionModule.checkAction(action)
  // 进行 module 初始化
  module = await moduleModule.getModule(module)
  let useModule = require('@zqlianweb/' + module)
  if (useModule.apply) await useModule.apply(action, more)
  console.log('执行完成！')
}
async function start () {
  program
    .command('init [module]')
    .option('--more [more]', '更多参数')
    .description('zqlian模块初始化')
    .action(async (module, options) => {
      doAction('init', module, options.more)
    })
  program
    .command('update [module]')
    .option('--more [more]', '更多参数')
    .description('zqlian模块更新')
    .action(async (module, options) => {
      doAction('update', module, options.more)
    })
  program
    .command('upgrade [module]')
    .option('--more [more]', '更多参数')
    .description('zqlian模块升级')
    .action(async (module, options) => {
      doAction('upgrade', module, options.more)
    })
  program.parse(process.argv)
}
start()