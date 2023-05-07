import mongoose from 'mongoose'

const Stack = mongoose.Schema({
    title: { type: String, require: true },
    subStack: { type: [String], require: true }
})

export default mongoose.model('Stack', Stack);