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
async function start () {
  program
    .command('init [module]')
    .option('--more [more]', '更多参数')
    .description('zqlian模块初始化')
  program
    .command('update [module]')
    .option('--more [more]', '更多参数')
    .description('zqlian模块更新')
  program
    .command('upgrade [module]')
    .option('--more [more]', '更多参数')
    .description('zqlian模块升级')
  program.parse(process.argv)
  console.log('program.args', program.args)
  let action = program.args[0] || 'init'
  // 进行 action 初始化
  await actionModule.getAction(action)
  let module = program.args[1]
  // 进行 module 初始化
  module = await moduleModule.getModule(module)
  let useModule = require('@zqlian/' + module)
  if (useModule.apply) await useModule.apply(action, program.more)
  console.log('执行完成！')
}
start()