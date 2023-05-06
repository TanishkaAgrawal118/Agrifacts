import mongoose from "mongoose";
const AllcropSchema = new mongoose.Schema({
        crops:[{type:mongoose.Schema.Types.ObjectId,ref:"crops"}]
})
const CropsSchema = new mongoose.Schema({
   
      variety:[{type:mongoose.Schema.Types.ObjectId,ref:"variety"}]
     
})
const CropsVarietySchema = new mongoose.Schema({
      name:{type:String,required:true},
      duration:{type:String,required:true},
      wheather:{type:String,required:true},
      category:{type:String,required:true},
      Availity:{type:String,required:true},
      climate:{type:String}, 
})
const PestiSideSchem=new mongoose.Schema({
        name:{type:String,required:true},
        basicInfo:{type:String,required:true}

})
const GovtSchema =new mongoose.Schema({
        name:{type:String,required:true},
        year:{type:String},
        contact:{type:String,required:true},
        contactdetails:{type:String},
        description:{type:String,required:true}
})
const StatedataSchema = new mongoose.Schema({
   
        states:[{type:mongoose.Schema.Types.ObjectId,ref:"states"}]
       
  })
const  StateSchema =new mongoose.Schema({
        statename:{type:String,required:true},
        name:{type:String,required:true},
        year:{type:String},
        contact:{type:String,required:true},
        contactdetails:{type:String},
        description:{type:String,required:true}
})
const IrrigationSchem=new mongoose.Schema({
        name:{type:String,required:true},
        basicInfo:{type:String,required:true},
        image:{type:String},

})
const ExpertsTalk=new mongoose.Schema({
        name:{type:String,required:true},
        number:{type:String,required:true},
        email:{type:String,required:true}
    

})
const ColdStorage = mongoose.Schema({
        name:{type:String,required:true},
        Rent:{type:Number,required:true},
        vegitables:{type:String,required:true},
        duration:{type:String,required:true},
        facilities:{type:String,required:true},
        totalcapacity:{type:String,required:true},
    
        state:{type:String},
        dist:{type:String},
        address:{type:String,required:true},

              
})
const ColdsmallStorage = mongoose.Schema({
        name:{type:String,required:true},
        Rent:{type:Number,required:true},
        vegitables:{type:String,required:true},
        duration:{type:String,required:true},
        facilities:{type:String,required:true},
        totalcapacity:{type:String,required:true},
        state:{type:String},
        dist:{type:String},
        address:{type:String,required:true},

          
})
// Buy and Sell 
const BuyAndSellTools = mongoose.Schema({
        toolname:{type:String},
         manufactyear:{type:Number},
        
        model:{type:String},
        image:{type:String},
        contact:{type:String},
        ownername:{type:String},
        price:{type:Number}
})
//Agriculture tools

const landSchemaRent = new mongoose.Schema({
         totalland:{type:String,required:true},
         soil:{type:String,required:true},
         sourceofwater:{type:String,required:true},
         rentamount:{type:Number,required:true},
          duration:{type:String,required:true},
         ownername:{type:String,required:true},
         majorcrops:{type:String,required:true},
         contact:{type:String,required:true}           
})
const AgricultureSchem =new mongoose.Schema({
        name:{type:String,required:true},
        basicInfo:{type:String,required:true}

})
export const AgriCultureToolSchema = mongoose.model("agricuturetools",AgricultureSchem)
export const  LandSchema = mongoose.model("landscema",landSchemaRent);
export const BuyAndSell = mongoose.model("buysell",BuyAndSellTools);
export const coldsmall = mongoose.model("coldsmalls",ColdsmallStorage);
export const ColdsStorage=mongoose.model("colddata",ColdStorage)
export const ExpertsTalks = mongoose.model("experts",ExpertsTalk)
export const StatesSchemdata = mongoose.model("statedata",StatedataSchema);
export const StateSchem = mongoose.model("states",StateSchema)
export const govtSchem = mongoose.model("govts",GovtSchema)
export const pestiside = mongoose.model("pestiside",PestiSideSchem);
export const irrigation = mongoose.model("irrigation",IrrigationSchem);
export const variety = mongoose.model("variety",CropsVarietySchema)
export const Crop = mongoose.model("crops",CropsSchema);
export const AllcropSch = mongoose.model("allcrops",AllcropSchema);