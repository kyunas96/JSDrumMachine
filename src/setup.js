function patchKeyToSound(sounds, keys) {
  return function (input) {
    const indexOf = keys.indexOf(input);
    if (indexOf !== -1) {
      const key = Object.keys(sounds)[indexOf];
      sounds[key].play();
    }
  };
}

function setUpKeys(sounds, keys){
  document.addEventListener('keypress', function(e){
    patchKeyToSound(sounds, keys)(e.key)
  })
}

module.exports = {
  setUpKeys
};
