import { useEffect, useState } from "react";
import axios from "axios";
const Covid = () => {

  useEffect(async () => {
    let res = await axios.get("https://api.covid19api.com/country/vietnam")
    console.log("check res:", res)
  }, [])
  return (
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