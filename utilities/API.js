import axios from "axios";
import { privateKeys } from "./privateKeys";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";

const TOKEN = async ()=> {
    await AsyncStorage.getItem("access_token").then((result) => {
      if (result) {
        const storedData = JSON.parse(result);
        // Vérifiez si la donnée est encore valide
        if (storedData && new Date().getTime() < storedData.expirationTime) {
          console.log(storedData.value);
        } else {
          console.log('La donnée a expiré.');
        }
      } else {
        console.log('La donnée n\'existe pas.');
      }
    }).catch((error) => {
      console.log('Erreur lors de la récupération de la donnée :', error);
    });
  }


const instance = axios.create({
  baseURL: "https://backend.gearni.com",
  headers:{
      API_KEY: privateKeys.API_KEY,
      common:{
        "Authorization":`Bearer ${TOKEN()}`,
      }
  }
});


export const postAdminRegistration = async (
  address,
  country,
  birthDate,
  firstName,
  lastName,
  email,
  nationality
) => {
  const Datas = {
    address,
    country,
    birthDate,
    firstName,
    lastName,
    email,
    nationality,
  };
  try {
   const response =  await instance.post("/auth/register/verify", Datas);
   console.log(response.data);
  } catch (error) {
    console.log("Le serveur a trouvé comme erreur ", error );
  }
};
