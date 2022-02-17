import { useEffect, useState } from "react";
const API = 'https://api.icndb.com/jokes/random';
const Fetch = fetch(API);

export const Chistes = () => {
    const [info, setInfo] = useState([]);
    const Request = () => {
        Fetch
            .then(rta => rta.json())
            .then(rta2 => {
                console.log(rta2);
                return setInfo(rta2.value.joke)
            })
    };
    useEffect(() => {
        Request();
    }, []);

    return (
        <>
            <div>{info}</div>
            <button onClick={Request}>Next</button>
        </>
    )
};
