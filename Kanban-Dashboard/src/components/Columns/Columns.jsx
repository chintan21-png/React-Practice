import React, { useState } from "react";

const Columns = () => {
  const [columns, setColumns] = useState({
    todo: { name: "To Do", items: [] },
    inProgress: { name: "In Progress", items: [] },
    review: { name: "Review", items: [] },
    done: { name: "Done", items: [] },
  });
  return <div>Columns</div>;
};

export default Columns;
