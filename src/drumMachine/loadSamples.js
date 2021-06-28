import { Howl } from "howler";

// import bd1 from '../assets/samples/808-bd.wav';
// import sd from '../assets/samples/808-sd.wav';
// import lt from '../assets/samples/808-lt.wav';
// import mt from '../assets/samples/808-mt.wav';
// import ht from '../assets/samples/808-ht.wav';
// import rs from '../assets/samples/808-rs.wav';
// import cp from '../assets/samples/808-cp.wav';
// import cb from '../assets/samples/808-cb.wav';
// import cy from '../assets/samples/808-cy.wav';
// import oh from '../assets/samples/808-oh.wav';
// import ch from '../assets/samples/808-ch.wav';


export default function setup() {

  let bd = new Howl({
    src: ['/assets/808-bd.wav'],
    format:['wav'],
  });

  let sd = new Howl({
    src: [sd],
  });

  let lt = new Howl({
    src: [lt],
  });

  let mt = new Howl({
    src: [mt],
  });

  let ht = new Howl({
    src: [ht],
  });

  let rs = new Howl({
    src: [rs],
  });

  let cp = new Howl({
    src: [cp],
  });

  let cb = new Howl({
    src: [cb],
  });

  let cy = new Howl({
    src: [cy],
  });

  let oh = new Howl({
    src: [oh],
  });

  let ch = new Howl({
    src: [ch],
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

// export default function setup(){
//   let ret = {};
//   ret.bd = new Audio(bd);
//   ret.sd = new Audio(sd);
//   ret.lt = new Audio(lt);
//   ret.mt = new Audio(mt);
//   ret.ht = new Audio(ht);
//   ret.rs = new Audio(rs);
//   ret.cp = new Audio(cp);
//   ret.cb = new Audio(cb);
//   ret.cy = new Audio(cy);
//   ret.oh = new Audio(oh);
//   ret.ch = new Audio(ch);

//   return ret;
// }
