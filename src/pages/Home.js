import React, { useEffect } from "react";
import Card from "../component/Card";

function Home(props) {
  const handledOnLoad = () => {
    props.handledOnLoad();
  };
  useEffect(() => {
    handledOnLoad();
  }, []);
  function renderCard() {
    return props.km.map(function (kms) {
      return (
        <Card
          group_name={kms.group_name}
          group_pic={kms.group_pic}
          group_id={kms.group_id}
          key={kms.id}
        />
      );
    });
  }
  return (
    <div className="p-10 mt-12 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-3 gap-5">
      {renderCard()}
    </div>
  );
}

export default Home;
