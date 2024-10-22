import modal from "../modal/back.modal.js";

export const backget = (req,res)=>{
    res.json({name:"sakthi"})
}
export const backpost = async (req,res)=>{
      const newusers = new modal({
        name: req.body.name,
        age: req.body.age,
        address: req.body.address
      })
 
      try {
        const userspost = await newusers.save();
        return res.status(201).json(userspost)
      } catch (error) {
        return res.status(400).json({message:error.message})
      }

}
export const backput = (req,res)=>{
    console.log("irs work")
}

export const backdelete = (req,res)=>{
    console.log("irs work")
}