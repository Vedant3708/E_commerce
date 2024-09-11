import mongoose from "mongoose";

const firschema = new mongoose.Schema(
  {
    bookno: {
      type: String,
      required: true,
      unique: true,
    },
    policesta: {
      type: String,
      required: true,
    },
    district: {
      type: String,
      required: true,
    },
    dateocc: {
      type: Date,
      required: true,
    },
    daterep: {
      type: Date,
      required: true,
    },
    priname: {
      type: String,
      required: true,
    },
    descri: {
      type: String,
      required: true,
    },
    placeocc: {
      type: string,
      required: true,
    },
    criminalname: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const FIR = mongoose.model("FIR", firschema);

export default FIR;
