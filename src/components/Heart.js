import React, { useState } from "react"
import Heart from "react-heart"

function App() {
    const [active, setActive] = useState(false)
    return (
        <div style={{ width: "2rem" }}>
          <Heart isActive={active} onClick={() => setActive(!active)} activeColor = "pink" inactiveColor = "blue" animationTrigger = "hover" animationScale = {1.5} />
        </div>
    );
  }
