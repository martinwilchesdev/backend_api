## Inicializacion del proyecto (no frontend)

### express.js

```bash
npx express-generator --no-view
```

### nodemon

```bash
npm install nodemon --save-dev
```

> recarga de forma automatica la aplicacion cada vez que se realiza un nuevo cambio

### eslint

```bash
npx eslint --init
```

> configuracion de las reglas bases de manera guiada

## MongoDB

```bash
npm install mongodb
```

### mongoose

```bash
npm install mongoose
```

### Schema

La estructura del documento se define mediante un esquema.

```javascript
import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
    name: {
        type: String
    }
}, {timestamps: true})
```

> `{timestamps: true}` permite definir de forma automatica las propiedades `created_at` y `updated_at` asociadas al documento.

```javascript
import mongoose from 'mongoose'

const subscriptionSchema = mongoose.Schema({
    // el campo `user` se utiliza como referencia a un usuario especifico, similar a lo que seria una `fk` en el modelo relacional
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})
```

### Modelo

Los modelos proporcionan una interfaz de base datos para poder obtener, crear, actualizar y eliminar registros.

```javascript
const User = mongoose.model('User', userSchema)
```