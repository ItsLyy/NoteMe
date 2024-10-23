// eslint-disable-next-line
import React from "react";
import { Link } from "react-router-dom";

// eslint-disable-next-line
function NotFound({ reason }) {
  return(
    <div className="note-empty">
      <h3 className="note-empty__reason">{reason}</h3>
      <Link to='/' className="note-empty__action">Go Home</Link>
    </div>
  )
}

export default NotFound;