class Media {
  constructor(title){
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }
  get title(){
    return this._title;
  }
  get isCheckedOut(){
    return this._isCheckedOut;
  }
  get ratings(){
    return this._ratings;
  }
  set isCheckedOut(checkedOut){
    this._isCheckedOut = checkedOut;
  }
  toggleCheckOutStatus(){
    this._isCheckedOut = !this.isCheckedOut;
  }
  getAverageRating(){
    const arr = this.ratings
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    return arr.reduce(reducer, 0)/arr.length;
  }
  addRating(newRate){
    this._ratings.push(newRate);
  }
}



class Book extends Media {
  constructor(author, title, pages){
    super(title);
    this._author = author;
    this._pages = pages;
  }
  get author(){
    return this._author;
  }
  get pages(){
    return this._pages;
  }
}
// test Book Class
const historyOfEverything = new Book('Bill Bryson','A Short History of Nearly Everything',544);
historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckedOut); // true
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
console.log(historyOfEverything.getAverageRating()); // 4.667



class Movie extends Media {
  constructor(director, title, runTime){
    super(title);
    this._director = director;
    this._runTime = runTime;
  }
  get director(){
    return this._director;
  }
  get runTime(){
    return this._runTime;
  }
}
// test Movie Class
const speed = new Movie('Jan de Bont', 'Speed', 116);
speed.toggleCheckOutStatus()
console.log(speed.isCheckedOut); // true
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(speed.getAverageRating()) //2.333
