function coordFromNumber(number) {
  switch(number) {
      case 0: return {x: 1, y: 3};
      default:
          return {
              x: (number-1) % 3, 
              y: Math.floor((number-1) / 3)
          };
  }
}

class Hand {
  constructor(x, note, initial) {
      this.note = note;
      this.initial = initial;
      this.x = x-1;
      this.pose = {x: this.x, y: 3};
  }
  
  ownsX(value) {
      return this.x === coordFromNumber(value).x;
  }
  
  press(number) {
      this.pose = coordFromNumber(number);
      this.note.push(this.initial);
  }
  
  distanceTo(number) {
      const coordOfNumber = coordFromNumber(number);
      return Math.abs(this.pose.x - coordOfNumber.x) + 
          Math.abs(this.pose.y - coordOfNumber.y);
  }
} 

function solution(numbers, hand) {
  const note = [];
  const leftHand = new Hand(1, note, 'L');
  const rightHand = new Hand(3, note, 'R');
  
  numbers.forEach(n => {
      if (leftHand.ownsX(n)) {
          leftHand.press(n);
      } else if (rightHand.ownsX(n)) {
          rightHand.press(n);
      } else if (leftHand.distanceTo(n) < rightHand.distanceTo(n)) {
          leftHand.press(n);
      } else if (leftHand.distanceTo(n) > rightHand.distanceTo(n)) {
          rightHand.press(n);
      } else if (hand === 'left') {
          leftHand.press(n);
      } else {
          rightHand.press(n);
      }
  });
  return note.join('');
}