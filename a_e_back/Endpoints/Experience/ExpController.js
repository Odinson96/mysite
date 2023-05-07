import ExpSchema from "./ExpSchema.js";

class ExpController {
    async getAllExp(req, res) {
        try {
            const exp = await ExpSchema.find()
            res.json(exp)
        } catch (error) {
            res.status(500).json(error.message)
        }
    }
}

export default new ExpController;