import { Howl } from "howler";

export default function setup() {
  let bd = new Howl({
    src: ["./public/assets/samples/808-bd.wav"],
    volume: 1.0,
  });

  let sd = new Howl({
    src: ["./public/assets/samples/808-sd.wav"],
    volume: 1.0,
  });

  let lt = new Howl({
    src: ["./public/assets/samples/808-lt.wav"],
    volume: 1.0,
  });

  let mt = new Howl({
    src: ["./public/assets/samples/808-mt.wav"],
    volume: 1.0,
  });

  let ht = new Howl({
    src: ["./public/assets/samples/808-ht.wav"],
    volume: 1.0,
  });

  let rs = new Howl({
    src: ["./public/assets/samples/808-rs.wav"],
    volume: 1.0,
  });

  let cp = new Howl({
    src: ["./public/assets/samples/808-cp.wav"],
    volume: 1.0,
  });

  let cb = new Howl({
    src: ["./public/assets/samples/808-cb.wav"],
    volume: 1.0,
  });

  let cy = new Howl({
    src: ["./public/assets/samples/808-cy.wav"],
    volume: 1.0,
  });

  let oh = new Howl({
    src: ["./public/assets/samples/808-oh.wav"],
    volume: 1.0,
  });

  let ch = new Howl({
    src: ["./public/assets/samples/808-ch.wav"],
    volume: 1.0,
  });

  return [
    bd,
    sd,
    lt,
    mt,
    ht,
    rs,
    cp,
    cb,
    cy,
    oh,
    ch,
  ];
}
