angular.module('miApp', [])
.run(function($rootScope){
    $rootScope.propiedadRaiz = "Scope Raíz";
})
.controller('controladorExterno', function($scope){
    $scope.propiedadExterna = "Scope Externo"
})
.controller('controladorInterno', function($scope){
    $scope.propiedadInterna = "Scope Interno";
    $scope.mensaje = "Desde este $scope podemos ver:" + 
    $scope.propiedadRaiz + "y" +
    $scope.propiedadExterna + "y" +
    $scope.propiedadInterna;
})

angular.module('miModulo', [])
.controller('PadreController', function(){
    // $scope.nombre = 'Carlos';
    this.nombre='Jorge'
})
.controller('HijoController', function(){
    // $scope.nombre = 'Luis';
    this.nombre='Beto'
})

angular.module('miModulo1', [])
.directive('miDirectiva', function(){
    return{
        restrict: 'E',
        replace: true,
        templateUrl: '/directivas/directiva.html',
        scope: {
            //Aislamos el scope y lo pasamos vacío:
            //No utilice el scope del controlador
            //No vaya a agregar ningun scope
            //vamos a agregar uno nuevo
            libroAutor : "@",
            libroTitulo: "@",
            libroObjeto: "=",
            enMayusculas: "&"
        }
    }
})
.controller('miControlador', function($scope){
    $scope.libro = {autor: 'Gabriel García Marquez',
                    titulo: ' Cien años de soledad',
                    publicado: 1967};
    $scope.enMayusculas = function(libro){
        return libro.titulo.toUpperCase() + ' ' + libro.autor.toUpperCase();
    }
})

angular.module('filtros', [])
.controller("FiltrosController", function($scope){
    $scope.hoy = new Date();
    $scope.dias = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo'] 
    $scope.personas = [
        {
            'nombre': 'Carlos',
            'nacionalidad': 'Colombiano'
        },
        {
            'nombre': 'Jorge',
            'nacionalidad': 'Mexicano'
        },
        {
            'nombre': 'Camilo',
            'nacionalidad': 'Colombiano'
        },
        {
            'nombre': 'Nicolas',
            'nacionalidad': 'Argentino'
        },
        {
            'nombre': 'Sebastian',
            'nacionalidad': 'Ecuatoriano'
        }
    ]
})
.filter('suspensivos', function(){
    return function(palabra){
        return palabra + '...';
    }
})
.filter('primeraMayusculas', function(){
    return function(palabra){
        return palabra[0].toUpperCase() + palabra.slice(1)
    }
})

angular.module('validacion', ['ngMessages'])
    .controller('MainControllerV', function($scope){
    
});