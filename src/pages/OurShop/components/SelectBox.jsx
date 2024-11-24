import styles from '../styles.module.scss';

function SelectBox({ options, getValue, type, defaultValue }) {
    const { selectBox } = styles;
    return (
        <select
            className={selectBox}
            onChange={(e) => getValue(e.target.value, type)}
            value={defaultValue}
        >
            {options.map((option) => {
                return (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                );
            })}
        </select>
    );
}

export default SelectBox;
