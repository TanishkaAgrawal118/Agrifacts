import { StatusCodes } from "http-status-codes";
import { AgriCultureToolSchema, AllcropSch, BuyAndSell, coldsmall, ColdsStorage, Crop, ExpertsTalks, govtSchem, irrigation, LandSchema, pestiside, StateSchem, StatesSchemdata, variety } from "../Schema/FormersModel.js";
export async function SaveAllCropsData(req, res) {
  try {
    const data = new AllcropSch(req.body);
    const response = await data.save();
    res.status(StatusCodes.OK).json(response);

  } catch (error) {
    console.log(error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR)

  }
}
export async function FetchAllCrops(req, res) {
  try {
    const response = await AllcropSch.find().populate({
      path: "crops",
      populate: {
        path: "variety"
      }
    });
    res.status(StatusCodes.OK).json(response);
  } catch (error) {
    console.log(error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR);
  }
}

export async function UpdateCrops(req, res) {
  try {
    const response = await AllcropSch.findByIdAndUpdate(req.params.id, { $push: { crops: req.params.obj } })
    res.status(StatusCodes.OK).json(response)
  } catch (error) {
    console.log(error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: "error in saving faculty data" })


  }
}
export async function SaveCropsData(request, response) {
  try {
    const data = new Crop(request.body);
    const res = await data.save();
    response.status(StatusCodes.OK).json(res);

  } catch (error) {
    console.log(error);
    response.status(StatusCodes.INTERNAL_SERVER_ERROR)

  }
}
export async function CropsDataFetch(req, res) {
  try {
    const response = await Crop.find();
    res.status(StatusCodes.OK).json(response)

  } catch (error) {
    console.log(error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR)


  }
}
export async function EditCrops(req, res) {
  try {
    const response = await Crop.findByIdAndUpdate(req.params.id, req.body)
    res.status(StatusCodes.NO_CONTENT)
  } catch (error) {
    console.log(error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: "error in saving faculty data" })


  }
}
export async function SaveVarietyData(request, response) {
  try {
    const data = new variety(request.body);
    const res = await data.save();
    response.status(StatusCodes.OK).json(res);

  } catch (error) {
    console.log(error);
    response.status(StatusCodes.INTERNAL_SERVER_ERROR)

  }
}
export async function UpdateCropsVariety(req, res) {
  try {
    const response = await Crop.findByIdAndUpdate(req.params.id, { $push: { variety: req.params.obj } })
    res.status(StatusCodes.OK).json(response)
  } catch (error) {
    console.log(error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: "error in saving faculty data" })


  }
}
//Pestiside information
export async function pestisideData(req, res) {
  try {
    const data = new pestiside(req.body);
    const response = await data.save();
    res.status(StatusCodes.OK).json(response)

  } catch (error) {
    console.log(error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR)

  }

}
export async function GetPestiSide(req, res) {
  try {
    const response = await pestiside.find();
    res.status(StatusCodes.OK).json(response);

  } catch (error) {
    console.log(error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR)

  }
}
//Govt Schemas
export async function GovtSchemaData(req, res) {
  try {
    const data = new govtSchem(req.body);
    const response = await data.save();
    res.status(StatusCodes.OK).json(response)

  } catch (error) {
    console.log(error)
    res.status(StatusCodes.INTERNAL_SERVER_ERROR)

  }
}
export async function GetgovtSchema(req, res) {
  try {
    const response = await govtSchem.find();
    res.status(StatusCodes.OK).json(response);

  } catch (error) {
    console.log(error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR)

  }
}
//State schema
export async function SaveAllStateData(req, res) {
  try {
    const data = new StatesSchemdata(req.body);
    const response = await data.save();
    res.status(StatusCodes.OK).json(response);

  } catch (error) {
    console.log(error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR)

  }
}
export async function UpdateStatesAll(req, res) {
  try {
    const response = await StatesSchemdata.findByIdAndUpdate(req.params.id, { $push: { states: req.params.obj } })
    res.status(StatusCodes.OK).json(response)
  } catch (error) {
    console.log(error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: "error in saving faculty data" })


  }
}

export async function saveStateScheme(req, res) {
  try {
    const data = new StateSchem(req.body);
    const response = await data.save();
    res.status(StatusCodes.CREATED).json(response)

  } catch (error) {
    console.log(error)
    res.status(StatusCodes.INTERNAL_SERVER_ERROR)

  }
}
export async function GetAllStatesSchema(req, res) {
  try {
    const response = await StatesSchemdata.find().populate('states')

    res.status(StatusCodes.OK).json(response);
  } catch (error) {
    console.log(error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR);
  }

}
export async function GetStatetSchema(req, res) {
  try {
    const response = await StateSchem.find();
    res.status(StatusCodes.OK).json(response);

  } catch (error) {
    console.log(error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR)

  }
}
//irrigtion
export async function irrigationData(req, res) {
  try {
    const image = `http://localhost:5700/${req.file.filename}`;
    console.log(image)
    req.body['image'] = image;
    const data = new irrigation(req.body);
    const response = await data.save();
    res.status(StatusCodes.OK).json(response)

  } catch (error) {
    console.log(error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR)

  }

}
export async function Getirrigation(req, res) {
  try {
    const response = await irrigation.find();
    res.status(StatusCodes.OK).json(response);

  } catch (error) {
    console.log(error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR)

  }
}
export async function Editirrigation(req, res) {
  try {
    const response = await irrigation.findByIdAndUpdate(req.params.id, req.body)
    res.status(StatusCodes.NO_CONTENT)
  } catch (error) {
    console.log(error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: "error in saving faculty data" })


  }
}
//Expert talk
export async function SaveExpertData(request, response) {
  try {
    const data = new ExpertsTalks(request.body);
    const res = await data.save();
    response.status(StatusCodes.OK).json(res);

  } catch (error) {
    console.log(error);
    response.status(StatusCodes.INTERNAL_SERVER_ERROR)

  }
}
export async function ExpertDataFetch(req, res) {
  try {
    const response = await ExpertsTalks.find();
    res.status(StatusCodes.OK).json(response)

  } catch (error) {
    console.log(error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR)


  }
}
//coldStorage
export async function SaveColdData(request, response) {
  try {
    const data = new ColdsStorage(request.body);
    const res = await data.save();
    response.status(StatusCodes.OK).json(res);

  } catch (error) {
    console.log(error);
    response.status(StatusCodes.INTERNAL_SERVER_ERROR)

  }
}
export async function ColdDataFetch(req, res) {
  try {
    const response = await ColdsStorage.find();
    res.status(StatusCodes.OK).json(response)

  } catch (error) {
    console.log(error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR)


  }
}
//small 
export async function SaveSmallColdStorge(request, response) {
  try {
    const data = new coldsmall(request.body);
    const res = await data.save();
    response.status(StatusCodes.OK).json(res);

  } catch (error) {
    console.log(error);
    response.status(StatusCodes.INTERNAL_SERVER_ERROR)

  }
}
export async function ColdSmallDataFetch(req, res) {
  try {
    const response = await coldsmall.find();
    res.status(StatusCodes.OK).json(response)

  } catch (error) {
    console.log(error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR)


  }
}

//irrigations
export async function Deleteirrigation(request, response) {
    try {
        await irrigation.findByIdAndDelete(request.params.id);
        response.status(StatusCodes.NO_CONTENT).json();

    } catch (error) {

        console.log(error)
        response.status(StatusCodes.INTERNAL_SERVER_ERROR).json();

    }
}
//tools buy sell
export async function ToolsSellData(req, res) {
  try {
    const image = `http://localhost:5700/${req.file.filename}`;
    console.log(image)
    req.body['image'] = image;
    const data = new BuyAndSell(req.body);
    const response = await data.save();
    res.status(StatusCodes.OK).json(response)

  } catch (error) {
    console.log(error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR)

  }

}
export async function GetSellData(req, res) {
  try {
    const response = await BuyAndSell.find();
    res.status(StatusCodes.OK).json(response);

  } catch (error) {
    console.log(error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR)

  }
}

export async function SaveLandData(req,res){
     try {
             const data = new LandSchema(req.body);
             const response = await data.save();
             res.status(StatusCodes.OK).json(response);
      
     }catch(error){
       console.log(error);
       res.status(StatusCodes.INTERNAL_SERVER_ERROR)
      
     }
}
export async function GetlandData(req, res) {
  try {
    const response = await LandSchema.find();
    res.status(StatusCodes.OK).json(response);

  } catch (error) {
    console.log(error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR)

  }
}
//Pestiside information
export async function AgricutureToolsData(req, res) {
  try {
    const data = new AgriCultureToolSchema(req.body);
    const response = await data.save();
    res.status(StatusCodes.OK).json(response)

  } catch (error) {
    console.log(error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR)

  }

}
export async function AgricutureDataFetch(req, res) {
  try {
    const response = await AgriCultureToolSchema.find();
    res.status(StatusCodes.OK).json(response);

  } catch (error) {
    console.log(error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR)

  }
}
