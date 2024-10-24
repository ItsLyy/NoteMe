// eslint-disable-next-line
import React from "react";

// eslint-disable-next-line
function NotFound({ reason }) {
  return(
    <div className="note-empty">
      <h3 className="note-empty__reason">{reason}</h3>
    </div>
  )
}

export default NotFound;