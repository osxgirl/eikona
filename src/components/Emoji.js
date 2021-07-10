import React, { useState } from "react";
import Emoji from "a11y-react-emoji";

interface Props extends React.HTMLAttributes<HTMLSpanElement> {
    label?: string; // optional
    symbol: string; // required
}
