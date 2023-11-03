import React from "react";
import "./BattlePage.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import Button from "../../components/button/Button";

import Hero from "../../components/char1/Hero";

import Hero2 from "../../components/char2/Hero2";
import initialHeroes from "../../data/initialHeroes.json";
console.log(initialHeroes);

const BattlePage = () => {
  const [char1, setChar1] = useState(null);
  const [input1, setInput1] = useState("");

  const [char2, setChar2] = useState(null);
  const [input2, setInput2] = useState("");

  const initialHeroes = [
    {
      id: 1,
      name: "Batman",
      image: "https://example.com/superman.jpg",
      powerstats: {
        strength: 80,
        speed: 70,
        intelligence: 90,
        durability: 95,
        combat: 80,
        power: 90,
      },
    },
    {
      id: 2,
      name: "Superman",
      image: "https://example.com/superman.jpg",
      powerstats: {
        strength: 90,
        speed: 80,
        intelligence: 95,
        durability: 75,
        combat: 95,
        power: 100,
      },
    },
  ];

  useEffect(() => {
    if (!input1) {
      setChar1(initialHeroes.find((hero) => hero.name === "Batman"));
    }

    if (!input2) {
      setChar2(initialHeroes.find((hero) => hero.name === "Superman"));
    }
  }, [input1, input2]);

  // if(!input1){
  //     return initialHeroes.batman
  // }
  // if(!input2){
  //     return initialHeroes.superman
  // }

  const onSubmitHandler1 = (event) => {
    event.preventDefault();

    const fetchData = async () => {
      const options = {
        method: "GET",
        url: "https://superhero-api.p.rapidapi.com/search",
        params: { name: `${input1}` },
        headers: {
          "X-RapidAPI-Key":
            "e0e661523amsh7fc855ce8ece52fp100ac6jsn41fb9aed0e3d",
          "X-RapidAPI-Host": "superhero-api.p.rapidapi.com",
        },
      };
      try {
        const response = await axios.request(options);
        setChar1(response.data.hero[1].data);
        console.log(response.data.hero[1].data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  };
  // useEffect(()=>{
  // const fetchData1 = async () => {
  //     const options = {
  //       method: 'GET',
  //       url: 'https://superhero-api.p.rapidapi.com/search',
  //       params: { name: "batman" },
  //       headers: {
  //           'X-RapidAPI-Key': 'e0e661523amsh7fc855ce8ece52fp100ac6jsn41fb9aed0e3d',
  //           'X-RapidAPI-Host': 'superhero-api.p.rapidapi.com',
  //       },
  //   };
  //     try {
  //       const response = await axios.request(options);
  //       setChar1(response.data.hero[1].data);
  //       console.log(response.data.hero[1].data)
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }
  //   fetchData1()
  // },[])
  const onSubmitHandler2 = (event) => {
    event.preventDefault();

    const fetchData = async () => {
      const options = {
        method: "GET",
        url: "https://superhero-api.p.rapidapi.com/search",
        params: { name: `${input2}` },
        headers: {
          "X-RapidAPI-Key":
            "e0e661523amsh7fc855ce8ece52fp100ac6jsn41fb9aed0e3d",
          "X-RapidAPI-Host": "superhero-api.p.rapidapi.com",
        },
      };
      try {
        const response = await axios.request(options);
        setChar2(response.data.hero[1].data);
        console.log(response.data.hero[1].data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  };
  // useEffect(()=>{
  // const fetchData2 = async () => {
  //     const options = {
  //       method: 'GET',
  //       url: 'https://superhero-api.p.rapidapi.com/search',
  //       params: { name:"flash" },
  //       headers: {
  //           'X-RapidAPI-Key': 'e0e661523amsh7fc855ce8ece52fp100ac6jsn41fb9aed0e3d',
  //           'X-RapidAPI-Host': 'superhero-api.p.rapidapi.com',
  //       },
  //   };
  //     try {
  //       const response = await axios.request(options);
  //       setChar2(response.data.hero[1].data);
  //       console.log(response.data.hero[1].data)
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }
  //   fetchData2()
  // },[])

  if (!char1 && !char2) return <p>is Loading</p>;

  return (
    <div className="battle-page">
      <div>
        <p className="battle-page__header">Choose Your Combatants!</p>
      </div>

      <div className="hero-container">
        <div className="cont1">
        <Hero char1={char1} />
        <form className="char1-input" onSubmit={onSubmitHandler1}>
          <input
            type="search"
            onChange={(event) => setInput1(event.target.value)}
            value={input1}
          />
        </form>
        </div>
        <div className="cont1 cont2">
        <Hero2 char2={char2} />
        <form className="char2-input" onSubmit={onSubmitHandler2}>
          <input
            type="search"
            onChange={(event) => setInput2(event.target.value)}
            value={input2}
          />
        </form>
      </div>
      </div>
      <Button char1={char1} char2={char2} />
    </div>
  );
};

export default BattlePage;
