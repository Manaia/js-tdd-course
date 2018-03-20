describe('Main', function() {
  describe('Method A', function() {
    context('Case 1', function () {
      it.skip('should happen blabla', function() {
          // espera que aconteça
          // Entrada de dados / métodos sum(2, 2)
          // Espera retorar (4) => true | (3) => false => broken test
          throw new Error('just an error');
      });
    });
    context('Case 2', function () {
      it('should happen blabla', function() {
          // espera que aconteça
          // Entrada de dados / métodos sum(2, 2)
          // Espera retorar (4) => true | (3) => false => broken test
          throw new Error('just an error');
      });
      it('should happen mimimi', function() {
          // espera que aconteça
          // Entrada de dados / métodos sum(2, 2)
          // Espera retorar (4) => true | (3) => false => broken test
      });
    });
  });

  describe('Method B', function() {

  });
});
