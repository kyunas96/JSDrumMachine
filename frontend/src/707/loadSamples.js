import { Howl } from "howler";

export default function loadSamples(){

  let BD1 = new Howl({
    src: ["./public/assets/samples/707/707-bd1.wav"],
    volume: 1.0
  })

  let BD2 = new Howl({
    src: ["./public/assets/samples/707/707-bd2.wav"],
    volume: 1.0
  })

  let SD1 = new Howl({
    src: ["./public/assets/samples/707/707-sd1.wav"],
    volume: 1.0
  });

  let SD2 = new Howl({
    src: ["./public/assets/samples/707/707-sd2.wav"],
    volume: 1.0
  });

  let LT = new Howl({
    src: ["./public/assets/samples/707/707-lt.wav"],
    volume: 1.0
  });

  let MT = new Howl({
    src: ["./public/assets/samples/707/707-mt.wav"],
    volume: 1.0
  })

  let HT = new Howl({
    src: ["./public/assets/samples/707/707-ht.wav"],
    volume: 1.0
  });

  let RS = new Howl({
    src: ["./public/assets/samples/707/707-rs.wav"],
    volume: 1.0
  });

  let CP = new Howl({
    src: ["./public/assets/samples/707/707-cp.wav"],
    volume: 1.0
  });

  let CB = new Howl({
    src: ["./public/assets/samples/707/707-cb.wav"],
    volume: 1.0
  })

  let TB = new Howl({
    src: ["./public/assets/samples/707/707-tb.wav"],
    volume: 1.0
  });

  let CH1 = new Howl({
    src: ["./public/assets/samples/707/707-ch1.wav"],
    volume: 1.0
  });

  let CH2 = new Howl({
    src: ["./public/assets/samples/707/707-ch2.wav"],
    volume: 1.0
  });

  let OH = new Howl({
    src: ["./public/assets/samples/707/707-ch2.wav"],
    volume: 1.0
  });

  let CR = new Howl({
    src: ["./public/assets/samples/707/707-cr.wav"],
    volume: 1.0
  });

  let CY = new Howl({
    src: ["./public/assets/samples/707/707-cy.wav"],
    volume: 1.0
  });

  // an array will be returned with all the samples inside
  // use `const` values to store the index of the corresponding drum
  // in order to take advantage of array speed vs. object
  return [
    BD1,
    BD2,
    SD1,
    SD2,
    LT,
    MT,
    HT,
    RS,
    CP,
    CB,
    TB,
    CH1,
    CH2,
    OH,
    CR,
    CY
  ]
}