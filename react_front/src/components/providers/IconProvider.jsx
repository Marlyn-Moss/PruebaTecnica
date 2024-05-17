import React from "react";
import Pen from "../icons/Pen";
import Select from "../icons/Select";
import Trash from "../icons/Trash";
import Plus from "../icons/Plus";

function IconProviders(props) {

    const { icon } = props

    const icons = {
        Pen: <Pen {...props} />,
        Select: <Select {...props} />,
        Trash: <Trash {...props} />,
        Plus: <Plus {...props} />,
    }

    return icons[icon]
}

export default IconProviders;