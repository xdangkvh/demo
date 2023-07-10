import { useEffect, useState } from "react";
import useFetch from "../customize/fetch";
const Covid = () => {
  // const [dataCovid, setDataCovid] = useState([]);
  // useEffect (async() => {
  //     let res = await axios.get("https://api.publicapis.org/entries")
  //     let data = res && res.data ? res.data : [];
  //     setDataCovid(data)
  // }, [])
  const { data, isLoading, isError } = useFetch("https://randomuser.me/api/");
  // // console.log("check data", data)

  return (
    <table>

      {/* {console.log("check data covid:", data)} */}
      <thead>
        <tr>
          <td>Cell</td>
          <td>Email</td>
          <td>Gender</td>
          <td>Phone</td>
        </tr>
      </thead>

      <tbody>
        <tr>

        </tr>
      </tbody>


    </table>
  )
}
export default Covid; 