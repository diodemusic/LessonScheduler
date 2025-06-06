const Module = require("../models/module.model")

async function getModules(req, res) {
    try {
        const modules = await Module.find();

        return res.status(200).send({ modules });
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
}

async function postModule(req, res) {
    try {
        const module = new Module(req.body);

        await module.save();

        res.status(201).send({ module });
    } catch (error) {
        res.status(400).end({ message: error.message });
    }
}

module.exports = {
    getModules,
    postModule
};
