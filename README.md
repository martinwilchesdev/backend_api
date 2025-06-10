## HTTP, DNS, IPs & Networks

- Los computadores siguen reglas de comunicacion llamadas protocolos. HTTP `(Hypertext Transfer Protocol)`, es el protocolo utilizado en la comunicacion cliente-servidor.
- DNS `(Domain Name Service)` permite obtener la direccion IP de un nombre de dominio especifico.
    - Se tipea `google.com` en el buscador del navegador.
    - Mediante el `DNS` se consulta la dirección `IP` del sitio al cual el cliente trata de acceder.
    - Una vez obtenida la dirección `IP` valida, se realiza la consulta de información en el servidor.

### IP

`(Internet Protocol)` es la dirección que identifica cada dispositivo conectado a Internet.

## API (Application Programming Interface)

Envia la peticion del cliente al servidor y posteriormente le retorna una respuesta.

### HTTP methods

Una API utiliza metodos HTTP para definir el tipo de acción a realizar.

- **GET:** Obtener datos del servidor.
- **POST:** Crear nuevos recursos.
- **PATCH:** Actualizar un recurso existente.
- **DELETE:** Eliminar un recurso.

### Enpoints

`URL` que especifica la ubicacion de un recurso.

#### Obtener una lista de usuarios

- _GET_ /users

#### Crear un nuevo usuario

- _POST_ /users

#### Actualizar la informacion de un usuario

- _PATCH_ /users/{id}

#### Eliminar un usuario

- _DELETE_ /users/{id}

### Headers

Informacion extra relacionada con la peticion realizada o respuesta obtenida.

```json
{
    "Content-Type": "application/json",
    "Authorization": "Bearer your_token_here",
    "Accept": "application/json",
    "User-Agent": "Mozilla/5.0",
    "Cache-Control": "no-cache",
    "X-Request-ID": "12345"
}
```

### Request body

Se utiliza al enviar datos al servidor, por ejemplo al realizar una peticion `POST` o `PUT`, usualmente en formato `JSON`.

```json
{
    "email": "martin@gmail.com",
    "password": "a123456"
}
```

### Response body

Contiene los datos que retorna el servidor luego de procesar la peticion realizada por el cliente, por ejemplo al realizar una peticion `GET`.


#### Status codes

Los codigos de estado identifican el resultado de la respuesta entregada por el servidor.

- **200:** OK
- **201:** Created
- **400:** Bad request
- **404:** Not found
- **500:** Internal server error

## Tipos de APIs (REST & GraphQL)

### RESTful APIs

`REST (Representational State Transfer)`, sigue un ennfoque donde el cliente interactua con los recursos utilizando `URLs` y metodos HTTP estandar como `GET` o `POST`.

#### Stateless

Cada peticion es independiente y no se relaciona con las anteriores.

### GraphQL APIs

En lugar de utilizar multiples endpoints para obtener los datos, se utiliza un unico endpoint `/graphql`.

## Bases de datos

Sistema encargado de almacenar y manejar datos.

### Bases de datos relacionales

La información es almacenada mediante tablas, estructuradas por filas y columnas.

#### SQL (Structured Query Language)

Lenguaje que permite consultar y manipular datos.

```sql
select * from users;
```

### Bases de datos no relacionales (NoSQL)

La información puede ser almacenada mediante objetos JSON `(MongoDB)` o mediante pares clave-valor `(Redis)`.

#### ORM (Object Relational Mappers)

Simplifican la interaccion con una base de datos, permitiendo definir consultas utilizando la sintaxis de un lenguaje de programacion especifico.

- Bases de datos relacionales
    - Prisma

- Bases de datos no relacionales
    - mongoose

## Arquitectura del backend

Diseño y estructura de la aplicacion.

### Arquitectura monolitica

Todos los componentes de la aplicacion son combinados dentro de una base de codigo unificada.

En  este tipo de arquitectura el backend se encarga de todo, manejo de la logica de negocio y las interacciones con la base de datos.

- Simple de desarrollar y desplegar.
- Facil de depurar ya que todo se encuentra en un solo lugar.

### Arquitectura de microservicios

La aplicacion e dividida en pequños servicios, y cada servicio se encarga de manejar una funcion especifica, como autenticacion, pagos o notificaciones.

Cada microservicio se comunica con los demas utilizandos API.

### Serverless (arquitectura sin servidor)

Un proveedor en la nube como `AWS`, se encarga de manejar, provisionar, escalar y manejar el servidor.