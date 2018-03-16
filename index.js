var Cp = require('obento-cp');
/**
 * keywordごとのlistenerの実行を行う
 * @class
 */
var Notice = function() {
  this.cps = {};
};
Notice.prototype = {
  /**
   * @memberof Notice
   * @param {string} key - listenerを管理する識別子
   * @param {function} func - 指定した識別子に登録される関数
   * @returns {function} 登録された関数
   */
  listen: function(key, func) {
    var c = this.cps[key];
    if (!c) c = this.cps[key] = new Cp();
    c.add(func);
    return func;
  },

  /**
   * @memberof Notice
   * @param {string} key - listenerを管理する識別子
   * @param {function} args - arguments for called function.
   */
  publish: function(key, args) {
    var c = this.cps[key];
    if (!c) return;
    c.update(args);
  },

  /**
   * @memberof Notice
   * @param {string} key - listenerを管理する識別子
   * @param {function} func - 指定した識別子から削除される関数
   */
  clear: function(key, func) {
    var c = this.cps[key];
    if (!c) return;
    c.remove(func);
  },

  /**
   * @memberof Notice
   * @param {string} key - listenerを管理する識別子
   */
  clearAll: function(key) {
    delete this.cps[key];
  }
};

module.exports = Notice;
