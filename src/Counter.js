import React, { useState } from "react";
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';

export function Counter({dmoviebutton}) {
  const [like, setLike] = new useState(0);
  const [Dislike, setDislike] = new useState(0);
  return (
    <div className="buttons">
      <IconButton aria-label="Like" onClick={() => setLike(like + 1)}>
        <Badge badgeContent={like} color="primary">
          👍
        </Badge>
      </IconButton>
      <IconButton aria-label="dislike" onClick={() => setDislike(Dislike + 1)}>
        <Badge badgeContent={Dislike} color="error">
          👎
        </Badge>
      </IconButton>
      {dmoviebutton}
    </div>
  );
}
