import { useEffect, useState } from "react";
import Card from "./Card";


const Services = () => {


    const [cards, setCards] = useState([])

    useEffect(() => {
        fetch('/service.json')
        .then(res => res.json() )
        .then(data => setCards(data))
    },[])
    return (
        <div className="mt-10 px-3">
            <p className="text-2xl md:text-5xl text-amber-600 font-bold text-center">Our Services</p>
            <h2 className="text-xl md:text-3xl font-bold text-center">It’s simple. You have an event to plan and
                we have the solutions</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-5 p-3">
                {
                    cards.map(data => <Card key={data.id} data={data}></Card>)
                }
            </div>
        </div>
    );
};

export default Services;