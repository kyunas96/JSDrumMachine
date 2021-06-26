function patchKeyToSound(sounds, keys) {
  return function (input) {
    const indexOf = keys.indexOf(input);
    if (indexOf !== -1) {
      const key = Object.keys(sounds)[indexOf];
      sounds[key].play();
    }
  };
}

module.exports = {
  patchKeyToSound,
};
