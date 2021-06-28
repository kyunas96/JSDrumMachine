export default function StepContainer(drumNames){
  let container = {};

  drumNames.forEach(drum => {
    container[drum] = false;
  });

  return container;
}