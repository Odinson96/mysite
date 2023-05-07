import StackSchema from "./StackSchema.js";

class StackController {
    async getAllStack(req, res) {
        try {
            const exp = await StackSchema.find()
            res.json(exp)
        } catch (error) {
            res.status(500).json(error.message)
        }
    }
}

export default new StackController;