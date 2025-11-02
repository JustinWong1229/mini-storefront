'use clients';
export default function CategoryFilter({value, options, onChange}) {
    return (
        <label>
            Category:{""}
            <select value={value} onChange={(e) => onChange(e.target.value)}>

            </select>
        </label>
    )
}