import mongoose from 'mongoose'

const Exp = mongoose.Schema({
    date: { type: String, require: true },
    company: { type: String, require: true },
    site: { type: String, require: false },
    title: { type: String, require: true },
    description: {
        desc: { type: String, require: true },
        functional: { type: [String], require: true },
        stack: { type: String, require: true }
    }
})

export default mongoose.model('Exp', Exp);