var AppDispatcher = require('../dispatcher/AppDispatcher.js');
var appConstants = require('../constants/appConstants.js');
var objectAssign = require('react/lib/Object.assign');
var EventEmitter = require('events').EventEmitter;

const CHANGE_EVENT = "change";

var _store = {
  list : []
};

var addItem = function (item) {
  _store.list.push(item);
};

var removeItem = function (index) {
  _store.list.splice(index, 1);
};


var todoStore = objectAssign({}, EventEmitter.prototype, {
  addChangeListener : function (cb) {
    this.on(CHANGE_EVENT, cb);
  },
  removeChangeListener : function (cb) {
    this.removeListener(CHANGE_EVENT, cb);
  },
  getList : function () {
    return _store.list;
  }
});

AppDispatcher.register(function (payload){
    var action = payload.action;
    console.log('AppDispatcher.register', action.data);
    switch (action.actionType) {
      case appConstants.ADD_ITEM:
        console.log('AppDispatcher.register.appConstants.ADD_ITEM', action.data);
        addItem(action.data);
        todoStore.emit(CHANGE_EVENT);
        break;
      case appConstants.REMOVE_ITEM:
        removeItem(action.data);
        todoStore.emit(CHANGE_EVENT);
        break;
      default:
        return true
    }
});


module.exports = todoStore;
