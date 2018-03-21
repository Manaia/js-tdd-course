describe('Main', function() {
  before(function () {
    console.log('before');
  });

  after(function() {
    console.log('after');
  });

  beforeEach(function() {
    console.log('beforeEach');
  });

  afterEach(function (){
    console.log('afterEach');
  });

  it('test 1', function () {
    console.log('test 1');
  });

  it('test 2', function () {
    console.log('test 2');
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
