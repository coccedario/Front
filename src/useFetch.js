import { useEffect,useState } from "react";


export function useFetch(url){

    const [data, Setdata] = useState(null);
const [loading, setloading] = useState(true);
    useEffect(() => {

        fetch(url)
         .then((Response) => Response.json())
         .then((data) => Setdata(data));

    },[]);

    return {data};
}
  