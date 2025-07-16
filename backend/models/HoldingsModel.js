const { model } = require("mongoose");

const { HoldingSchema } = reuire("../schemas/HoldingSchema");

const HoldingsModel = new model("holding", HoldingSchema);

module.exports = { HoldingsModel };
