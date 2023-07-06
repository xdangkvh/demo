import { useEffect, useState } from "react";
import axios from "axios";
const Covid = () =>{

    useEffect (() => {
        axios.get("https://api.covid19api.com/country/vietnam")
    }, [])
    return(
        <table>
        <tr>
          <th>Company</th>
          <th>Contact</th>
          <th>Country</th>
        </tr>
        <tr>
          <td>Alfreds Futterkiste</td>
          <td>Maria Anders</td>
          <td>Germany</td>
        </tr>
        <tr>
          <td>Centro comercial Moctezuma</td>
          <td>Francisco Chang</td>
          <td>Mexico</td>
        </tr>
      </table>
    )
}
export default Covid; 