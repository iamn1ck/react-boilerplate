import { Button, Typography } from "@mui/material";
import { Box, styled } from "@mui/system";
import { useState, FC } from "react";
import { useTheme } from "../context/ThemeProvider";
import PaletteChanger from "./Layout/PaletteChanger";
import styles from "./main.module.css";
import axios from "axios";

const Layout: FC = () => {
  const [name, setName] = useState('');
  const [countries, setCountries] = useState([]);
  const [lang, setLang] = useState(1);

  const buttonClickFunction = async () => {
    console.log('you clicked the button', name)

    const response = await axios.get(`https://toapi.bet3000.net/api/sports/countries/1/${lang}/300`)


    console.log('res', response.data)
    setCountries(response.data)
  }
  const changeLang = async (input: number) => {
    setLang(input)
  }




  return (
    <Box className={styles.box}>
      <Box className={styles.container}>
        <label>
          Name:
          <input onChange={(e) => setName(e.target.value)} type="text" name="name" />
        </label>

        <button className={styles.button} onClick={() => buttonClickFunction()}>

        </button>
        <button className={styles.button} onClick={() => changeLang(1)}>
        english
        </button>

        <button className={styles.button} onClick={() => changeLang(6)}>
        german
        </button>

        {name + ' is gay'}

        <Box>
          {countries.map((country: any) => {
            return <Box>
              {`ich hab geile huren mit dicken ärschen in ${country.CategoryName}`}
            </Box>
          })}
        </Box>



      </Box>
    </Box>
  );
};

export default Layout;