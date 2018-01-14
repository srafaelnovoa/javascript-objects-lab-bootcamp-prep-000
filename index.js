var recipes = {};

function updateObjectWithKeyAndValue(object, key, value){
  var objectClone = Object.assign({}, object, {[key]:value})
   return objectClone;
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[[key]] = value
  return object
}