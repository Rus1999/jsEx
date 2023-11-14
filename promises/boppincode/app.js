const bookList$ = fetch('https://www.anapioficeandfire.com/api/books', {
  method: 'GET'
});

bookList$
  .then(response => response.json())
  .then(json => console.log(json));

const cookMeal = new Promise(resolve => {
  console.log('Cooking');
  setTimeout(() => {
    console.log('Cooked');
    resolve('Padthai');
  }, 2000)
})

cookMeal
  .then(food => console.log(food));