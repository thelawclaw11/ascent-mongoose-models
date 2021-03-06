module.exports = function (mongoose) {
    return new mongoose.Schema({
        _id: { type: mongoose.Schema.ObjectId, auto: true },
        email: { type: String, required: true },
        name: { type: String, required: true },
        password: { type: String, required: true },
        type: {
            type: String,
            enum: ["EMPLOYEE", "ADMIN", "CLIENT"],
            required: true,
        },
    });
};
