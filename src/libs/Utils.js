import clsx from "clsx" //join all classes safely and conditionally
import { twMerge } from "tailwind-merge" //remove conflicting Tailwind utilities.

const cn = (...inputs) => {
    return twMerge(clsx(inputs))
}

export default cn