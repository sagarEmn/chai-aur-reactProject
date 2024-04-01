import React from "react";
import { useEffect, useState } from "react";

function Github() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users/sagarEmn")
      .then((response) => response.json())
      .then((convertedJSON) => {
        console.log(convertedJSON);
        setData(convertedJSON);
      });
  }, []);

  const followers = data.followers;

  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      <div className="flex flex-1">
        <span className="image">
          <img src={data.avatar_url} alt="Git picture" width={300} />
        </span>

        <span className="Info flex flex-col justify-center items-center">
          <p>Name: {data.name},</p>
          <p>Username: {data.login}</p>
          Github followers: {followers}
        </span>
      </div>
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/hiteshchoudary");
  return response.json();
};
