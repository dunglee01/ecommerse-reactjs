import { useState } from 'react';
import styles from './styles.module.scss';
import { LiaEyeSolid } from 'react-icons/lia';
import { LiaEyeSlashSolid } from 'react-icons/lia';

function InputCommon({ label, type }) {
    const { labelC, boxInput, boxIcon, box } = styles;
    const [isHiddenPassword, setIsHiddenPassword] = useState(true);

    const isPassword = type === 'password';
    const isShowPassword =
        type === 'password' && !isHiddenPassword ? 'text' : type;

    const handleTogglePassword = () => {
        setIsHiddenPassword(!isHiddenPassword);
    };

    return (
        <div className={box}>
            <div className={labelC}>{label}</div>
            <div className={boxInput}>
                <input type={isShowPassword} />
                {isPassword && (
                    <div className={boxIcon} onClick={handleTogglePassword}>
                        {isHiddenPassword ? (
                            <LiaEyeSolid />
                        ) : (
                            <LiaEyeSlashSolid />
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}

export default InputCommon;
