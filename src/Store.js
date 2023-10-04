import React, { useState } from "react";
import CardsView from "./CardsView";
import ListView from "./ListView";
import IconSwitch from "./IconSwitch";

function Store(props) {
  const [view, setView] = useState("cards");

  const handleSwitch = () => {
    setView(view === "cards" ? "list" : "cards");
  };

  return (
    <div className="store">
      <IconSwitch
        icon={view === "cards" ? "view_list" : "view_module"}
        onSwitch={handleSwitch}
      />
      {view === "cards" ? (
        <CardsView cards={props.items} />
      ) : (
        <ListView items={props.items} />
      )}
    </div>
  );
}

export default Store;