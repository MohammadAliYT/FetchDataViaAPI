/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import useFetch from "./useFetch";

export default function Joke() {
  const {
    data: joke,
    isLoading,
    errorMessage,
  } = useFetch("https://official-joke-api.appspot.com/jokes/random");
  return (
    <div>
      <h2>Joke API results are here</h2>
      {isLoading && <div>Loading....</div>}
      {joke && <div>{joke.setup + " " + joke.punchline}</div>}
      {errorMessage && <div>{errorMessage}</div>}
    </div>
  );
}
