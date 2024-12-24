import React from 'react'
import {
    Select,
    SelectGroup,
    SelectValue,
    SelectTrigger,
    SelectContent,
    SelectItem,
} from "./select"

const SelectButton = ({value, items}) => {
    return (
        <Select>
            <SelectTrigger>
                <SelectValue placeholder = {value} />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    {items.map((item, idx) => (
                        <SelectItem key={idx} value={item}>{item}</SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}

export default SelectButton
