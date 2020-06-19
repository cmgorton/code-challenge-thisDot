import React, { useEffect, useState } from "react";
import axios from "axios";

const Details = props => {
  const [allDetails, setAllDetails] = useState([]);

  useEffect(() => {
    axios.get(`${props.details}?client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`).then(response => {
      setAllDetails(response.data);
    });
  }, [props.details]);

  return (
    <div className="details">
      <h3>Details</h3>
      <ul>
        {allDetails.bio && <li><span className="details__em">Bio:</span> {allDetails.bio}</li>}
        {allDetails.company && <li><span className="details__em">Company:</span> {allDetails.company}</li>}
        {allDetails.location && <li><span className="details__em">Location:</span> {allDetails.location}</li>}
        {allDetails.public_repos && <li><span className="details__em">Public Repos:</span> {allDetails.public_repos}</li>}
        {allDetails.followers && <li><span className="details__em">Followers:</span> {allDetails.followers}</li>}
        {allDetails.following && <li><span className="details__em">Following:</span> {allDetails.following}</li>}
      </ul>
    </div>
  );
};
export default Details;
