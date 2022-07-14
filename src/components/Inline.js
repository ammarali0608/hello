import React from "react";

const heading = {
  fontSize: "72px",
  color: "blue",
};
function inline() {
  return (
    <div>
      {/* allowed */}
      <h3 className="error">Error</h3>
      {/* <h3 className={styles.success}>Error</h3>  NOt Allowed*/}

      <h2 style={heading}>inline</h2>
    </div>
  );
}

export default inline;
