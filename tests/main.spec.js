describe('Main', function() {
  var arr;

  before(function () {
    // inicia uma conexão no banco
    // criar um conjunto de dados
  });

  after(function() {
    // fecha conexão do banco
    // apagar esse conjunto de dados
  });

  beforeEach(function() {
    arr = [1, 2, 3];
  });

  afterEach(function (){

  });

  it('should have a size of 4 when push another value to the array', function () {
    arr.push(4);
    console.log(arr.length); // 4
  });

  it('should have a size of 2 when pop a value from the array', function () {
    arr.pop();
    console.log(arr.length); // 2
  });

  it('should remove the value 3 when use pop in the array', function () {
    console.log(arr.pop() === 3); // true
  });
});

// Ciclo dos hooks nessa situação acima
/*
  before
  beforeEach
  test 1
  afterEach
  beforeEach
  test 2
  afterEach
  after
*/
