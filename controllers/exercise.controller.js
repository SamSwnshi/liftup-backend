import axios from "axios";
import Exercise from "../models/exercise.models.js";

// ✅ Fetch and save exercises to MongoDB
export const fetchData = async (req, res) => {
  try {
    const response = await axios.get(
      "https://exercisedb.p.rapidapi.com/exercises",
      {
        params: {
          limit: 10,
          offset: 0,
        },
        headers: {
          "x-rapidapi-host": "exercisedb.p.rapidapi.com",
          "x-rapidapi-key": process.env.RAPIDAPI_KEY,
        },
      }
    );

    // ✅ Check if data already exists
    const existingCount = await Exercise.countDocuments();
    if (existingCount === 0) {
      await Exercise.insertMany(response.data);
      console.log("Data inserted successfully.");
    } else {
      console.log("Data already exists in the database.");
    }

    res
      .status(200)
      .json({ message: "Data fetched successfully", data: response.data });
  } catch (error) {
    console.error("Error fetching exercises:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// ✅ Fetch exercises by body part
export const fetchBodyPart = async (req, res) => {
  try {
    const { bodyPart } = req.params;

    const response = await axios.get(
      `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
      {
        headers: {
          "x-rapidapi-host": "exercisedb.p.rapidapi.com",
          "x-rapidapi-key": process.env.RAPIDAPI_KEY,
        },
      }
    );

    console.log(`Fetched exercises for body part: ${bodyPart}`);
    res.status(200).json(response.data);
  } catch (error) {
    console.error(
      `Error fetching exercises for body part ${bodyPart}:`,
      error.message
    );
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const fetchAccordingEquipment = async (req, res) => {
  try {
    const { equipment } = req.params;
    const response = await axios.get(
      `https://exercisedb.p.rapidapi.com/exercises/equipment/${equipment}`,
      {
        headers: {
          "x-rapidapi-host": "exercisedb.p.rapidapi.com",
          "x-rapidapi-key": process.env.RAPIDAPI_KEY,
        },
      }
    );
    console.log(`Fetched exercise according to EquipmentList: ${equipment}`)
    const exercise = response.data;

    for(const equipList of exercise){
      const existingExercise = await Exercise.findOne({
        id: exercise.id
      })
      if(!existingExercise){
        await Exercise.create({
          id: equipList.id,
          name: equipList.name,
          bodyPart: equipList.bodyPart,
          equipment: equipList.equipment,
          gifUrl: equipList.gifUrl,
          target: equipList.target,
          instructions: equipList.instructions,
        })
      }
    }
    res.status(200).json({data:response.data,message: "Fetched Data"})
  } catch (error) {
    console.error(
      `Error fetching exercises for body part ${equipment}:`,
      error.message
    );
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const targetList = async (req,res) =>{
  try {
    const response = await axios.get("https://exercisedb.p.rapidapi.com/exercises/targetList",{
      headers: {
        "x-rapidapi-host": "exercisedb.p.rapidapi.com",
        "x-rapidapi-key": process.env.RAPIDAPI_KEY,
      },
    })
    res
      .status(200)
      .json({ message: "TargetList fetched successfully", data: response.data });
  } catch (error) {
    
  }
}