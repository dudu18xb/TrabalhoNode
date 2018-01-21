const Model = require('./model')

const ACTIONS_PATH = './../../';

const find = require( ACTIONS_PATH + 'actions/find' )( Model )

const findOne = require( ACTIONS_PATH + 'actions/findOne' )( Model )

const create = require( ACTIONS_PATH + 'actions/create' )( Model )

const update = require( ACTIONS_PATH + 'actions/update' )( Model )

const remove = require( ACTIONS_PATH + 'actions/remove' )( Model )

module.exports = {
  find,
  findOne,
  create,
  update,
  remove
}