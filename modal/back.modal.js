import { model, Schema } from "mongoose";

const schema = new Schema({
  name:"String",
  age:"String",
  address:"String"
})


// create modal

const modal = model("Userstest",schema);

export default modal;
