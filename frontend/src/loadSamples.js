import { Howl } from "howler";

export default function setup() {

  let bd = new Howl({
    src: ["./public/samples/808-bd.wav"],
  });

  let sd = new Howl({
    src: ["./public/samples/808-sd.wav"],
  });

  let lt = new Howl({
    src: ["./public/samples/808-lt.wav"],
  });

  let mt = new Howl({
    src: ["./public/samples/808-mt.wav"],
  });

  let ht = new Howl({
    src: ["./public/samples/808-ht.wav"],
  });

  let rs = new Howl({
    src: ["./public/samples/808-rs.wav"],
  });

  let cp = new Howl({
    src: ["./public/samples/808-cp.wav"],
  });

  let cb = new Howl({
    src: ["./public/samples/808-cb.wav"],
  });

  let cy = new Howl({
    src: ["./public/samples/808-cy.wav"],
  });

  let oh = new Howl({
    src: ["./public/samples/808-oh.wav"],
  });

  let ch = new Howl({
    src: ["./public/samples/808-ch.wav"],
  });

  return {
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
  };
};
