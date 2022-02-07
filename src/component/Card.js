import React from "react";
import { Link } from "react-router-dom";

const Card = ({ group_id, group_name, group_pic }) => {
  console.log(group_id);
  return (
    <>
      <div className="container  mx-auto">
        <div className="card card-bordered mx-auto mb-4">
          <figure>
            <img src={group_pic} />
          </figure>
          <div className="card-body">
               <Link to={`/Type/${group_id}`}>
            <h2 className="card-title">{group_name}</h2>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default Card;
