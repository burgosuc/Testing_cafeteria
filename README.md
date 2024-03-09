# Testing Cafeteria
se realizan los test de las diferentes rutas.

install code:
* npm init -y
* npm install
* npm install express
* npm install --save-dev jest
* npm install supertest --save-dev

## Requerimientos:

Se debe crear una API REST que permita:

1. Testea que la ruta GET /cafes devuelve un status code 200 y el tipo de dato recibido es un arreglo con por lo menos 1 objeto.
2. Comprueba que se obtiene un código 404 al intentar eliminar un café con un id que no existe.
3. Prueba que la ruta POST /cafes agrega un nuevo café y devuelve un código 201.
4. Prueba que la ruta PUT /cafes devuelve un status code 400 si intentas actualizar un café enviando un id en los parámetros que sea diferente al id dentro del payload.# Testing_cafeteria
