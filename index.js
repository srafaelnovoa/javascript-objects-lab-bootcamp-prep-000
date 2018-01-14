var recipes = {};

function updateObjectWithKeyAndValue(object, key, value){
  var objectClone = Object.assign({}, object, {[key]:value})
   return objectClone;
}
