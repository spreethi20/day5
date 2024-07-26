import { useEffect, useState } from "react";
import Three from "./Three";
import StarRating from "./starrating";
import Navigation from "./navigation";
//import axios from 'axios';

function Data() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchMyData = async () => {
            const res = await fetch('https://fakestoreapi.com/products');
            console.log(res.ok);
            const resData = await res.json();
            setData(resData);
        };
        fetchMyData();
    }, []); 

    return (
        <div>
            <Navigation/>
        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
            
            {data.map((dataItem, index) => (
                <div key={index} className="card" style={{ width: "20rem", margin: "12px", display: 'flex', flexDirection: 'column' }}>
                    <div className="card-body" style={{ flex: '1 1 auto', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                        <div className="card-title" style={{ textAlign: 'center' }}>
                            <img src={dataItem.image} alt='product' width={100} style={{ border: "10px", borderRadius: "50px", display: 'block', margin: '0 auto', height: '20vh' }} />
                            <br/><h6>{dataItem.title}</h6>
                            <div>{dataItem.category}</div>
                            <div style={{ display: "flex", justifyContent: 'center', alignItems: 'center' }}>
                                <StarRating rating={dataItem.rating.rate} /> ({dataItem.rating.count})
                            </div>
                            <div> ${dataItem.price}</div>
                        </div>
                        <Three />
                    </div>
                </div>
            ))}
        </div>
        </div>
    );
}

export default Data;