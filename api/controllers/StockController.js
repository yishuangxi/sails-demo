/**
 * StockController
 *
 * @description :: Server-side logic for managing Stocks
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	


  /**
   * `StockController.create()`
   */
  create: function (req, res) {
    sails.log.info('this is log info');
    res.ok('ok');
    // return res.json({
    //   todo: 'create() is not implemented yet!'
    // });
  },


  /**
   * `StockController.retrieve()`
   */
  retrieve: function (req, res) {
    return res.json({
      todo: 'retrieve() is not implemented yet!'
    });
  },


  /**
   * `StockController.update()`
   */
  update: function (req, res) {
    return res.json({
      todo: 'update() is not implemented yet!'
    });
  },


  /**
   * `StockController.delete()`
   */
  delete: function (req, res) {
    return res.json({
      todo: 'delete() is not implemented yet!'
    });
  }
};

