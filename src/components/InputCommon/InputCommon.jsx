import { useState } from 'react';
import styles from './styles.module.scss';
import { FiEye } from 'react-icons/fi';
import { FiEyeOff } from 'react-icons/fi';
import cls from 'classnames';

function InputCommon({ label, type, isRequired = false, ...props }) {
    const { labelInput, boxInput, container, boxIcon, errMsg, isErrInput } =
        styles;
    const { formik, id } = props;
    const [showPassword, setShowPassword] = useState(false);

    const isPassword = type === 'password';
    const isShowTextPassword =
        type === 'password' && showPassword ? 'text' : type;

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const isErr = formik.touched[id] && formik.errors[id];
    const messageErr = formik.errors[id];

    return (
        <div className={container}>
            <div
                className={cls(labelInput, {
                    [errMsg]: isErr
                })}
            >
                {label} {isRequired && <span>*</span>}
            </div>
            <div className={boxInput}>
                <input
                    type={isShowTextPassword}
                    {...props}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values[id]}
                    className={cls({ [isErrInput]: isErr })}
                />
                {isPassword && (
                    <div className={boxIcon} onClick={handleShowPassword}>
                        {showPassword ? <FiEyeOff /> : <FiEye />}
                    </div>
                )}

                {isErr && <div className={errMsg}>{messageErr}</div>}
            </div>
        </div>
    );
}

export default InputCommon;
