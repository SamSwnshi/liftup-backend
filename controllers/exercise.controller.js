import axios from "axios";
import Exercise from "../models/exercise.models.js"

export const fetchData = async (req, res) => {
  try {
    const response = await axios.get(
      "https://exercisedb.p.rapidapi.com/exercises",
      {
        params: {
          limit: 10,  // Match your cURL request
          offset: 0,
        },
        headers: {
          "x-rapidapi-host": "exercisedb.p.rapidapi.com",
          "x-rapidapi-key": process.env.RAPIDAPI_KEY,  // Use env variable
        },
      }
    );

    
    await Exercise.insertMany(response.data);

    res.status(200).json({ message: "Data saved successfully", data: response.data });
  } catch (error) {
    console.error("Error fetching exercises:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
