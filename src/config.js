const JS707Samples = {
  bd1: "./samples/707/707-bd1.wav",
  bd2: "./samples/707/707-bd2.wav",
  sd1: "./samples/707/707-sd1.wav",
  sd2: "./samples/707/707-sd2.wav",
  lt: "./samples/707/707-lt.wav",
  mt: "./samples/707/707-mt.wav",
  ht: "./samples/707/707-ht.wav",
  rs: "./samples/707/707-rs.wav",
  cb: "./samples/707/707-cb.wav",
  cp: "./samples/707/707-cp.wav",
  tb: "./samples/707/707-tb.wav",
  ch1: "./samples/707/707-ch1.wav",
  ch2: "./samples/707/707-ch2.wav",
  oh: "./samples/707/707-oh.wav",
  cr: "./samples/707/707-cr.wav",
  cy: "./samples/707/707-cy.wav",
};

const JS808Samples = {
  bd: "./samples/808/808-bd.wav",
  sd: "./samples/808/808-sd.wav",
  lt: "./samples/808/808-lt.wav",
  mt: "./samples/808/808-mt.wav",
  ht: "./samples/808/808-ht.wav",
  rs: "./samples/808/808-rs.wav",
  cp: "./samples/808/808-cp.wav",
  cb: "./samples/808/808-cb.wav",
  cy: "./samples/808/808-cy.wav",
  oh: "./samples/808/808-oh.wav",
  ch: "./samples/808/808-ch.wav",
}

const JS909Samples = {
  bd1: "./samples/909/909-bd1.wav",
  bd2: "./samples/909/909-bd2.wav",
  sd1: "./samples/909/909-sd1.wav",
  sd2: "./samples/909/909-sd2.wav",
  lt1: "./samples/909/909-lt1.wav",
  lt2: "./samples/909/909-lt2.wav",
  mt1: "./samples/909/909-mt1.wav",
  mt2: "./samples/909/909-mt2.wav",
  ht1: "./samples/909/909-ht1.wav",
  ht2: "./samples/909/909-ht2.wav",
  rs: "./samples/909/909-rs.wav",
  cp: "./samples/909/909-cp.wav",
  ch: "./samples/909/909-ch.wav",
  oh: "./samples/909/909-oh.wav",
  cr: "./samples/909/909-cr.wav",
  rd: "./samples/909/909-rd.wav",
}

const JS707Keys = [
  'a', // bd1
  'q', // bd2
  's', // sd1
  'w', // sd2
  'd', // lt
  'f', // mt
  'g', // ht
  'h', // rs
  'j', // cb
  'k', // cp
  'l', // tb
  ';', // ch1
  'p', // ch2
  '\'', // cr
  '[', //rd
]


const JS808Keys = [
  'a',
  's',
  'd',
  'f',
  'g',
  'h',
  'j',
  'k',
  'l',
  ';',
  "\'"
]

const JS909Keys = [
  'a', // bd1
  'q', // bd2
  's', // sd1
  'w', // sd2
  'd', // lt1
  'e', // lt2
  'f', // mt1
  'r', // mt2
  'g', // ht1
  't', // ht2
  'h', // rm
  'j', // cp
  'k', // ch
  'l', // oh
  ';', // cr
  '\'' // rd
]



module.exports = {
  JS707: {
    samples: JS707Samples,
    keys: JS707Keys
  },
  JS808: {
    samples: JS808Samples,
    keys: JS707Keys
  },
  JS909: {
    samples: JS909Samples,
    keys: JS909Keys
  }
}