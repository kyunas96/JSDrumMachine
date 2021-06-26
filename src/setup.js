function patchKeysToSounds(sounds, keys) {
  return function (input) {
    const indexOf = keys.indexOf(input);
    if (indexOf !== -1) {
      sounds[indexOf].play();
    }
  };
}

function setUpKeys(sounds, keys){
  const callback = patchKeysToSounds(sounds, keys)
  document.addEventListener('keypress', function(e){
    callback(e.key)
  })
}

module.exports = {
  setUpKeys
};
