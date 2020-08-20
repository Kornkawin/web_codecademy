const source = document.getElementById('eachHelper').innerHTML;
const template = Handlebars.compile(source);

const context = {
  // newArray: ['a', 'b', 'c']
  newArray: [1,2,3,4,5,6,7,8,9,10]
};

const compiledHtml = template(context);

const displayElements = document.getElementById('display');
displayElements.innerHTML = compiledHtml;
