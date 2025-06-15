import mongoose from 'mongoose'

const subscriptionSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Subscription name is required'],
        trim: true,
        minLength: 2,
        maxLength:  100
    },
    price: {
        type: Number,
        required: [true, 'Subscription price is required'],
        min: [0, 'Price must be greater than 0']
    },
    currency: {
        type: String,
        enum: ['USD', 'EUR', 'GBP', 'COP'],
        default: 'COP'
    },
    frequency: {
        type: String,
        enum: ['daily', 'weekly', 'monthly', 'yearly']
    },
    category: {
        type: String,
        enum: ['sports', 'news', 'entertainment', 'lifestyle', 'technology', 'finance', 'politics', 'other'],
        required: true
    },
    paymentMehod: {
        type: String,
        required: true,
        trim: true
    },
    status: {
        type: String,
        enum: ['cancelled', 'active', 'expired'],
        default: 'active'
    },
    startDate: {
        type: Date,
        required: true,
        validate: {
            validator: function(value) {
                return value <= new Date()
            },
            message: 'Start date must be in the past'
        }
    },
    renewalDate: {
        type: Date,
        validate: {
            validator: function(value) {
                return value > this.startDate
            },
            message: 'Renewal date must be in the future'
        }
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        index: true
    }
}, options: { timestamps: true })

// funcion que se ejecuta antes de que se cree un nuevo documento
subscriptionSchema.pre('save', function(next) {
    if (!this.renewalDate) {
        const renewalDates = {
            daily: 1,
            weekly: 7,
            monthly: 30,
            yearly: 365,
        }

        // calcular la fecha de renovacion si no esta especificada
        this.renewalDate =  new Date(this.startDate)
        this.renewalDate.setDate(this.renewalDate.getDate() + renewalDates[this.frequency])
    }

    // actualizar el estado de la subscripcion a `expired` en caso de que se haya vencido
    if (this.renewalDate < new Date()) {
        this.status = 'expired'
    }

    next()
})

const Subscription = mongoose.model('Subscription', subscriptionSchema)

export default Subscription