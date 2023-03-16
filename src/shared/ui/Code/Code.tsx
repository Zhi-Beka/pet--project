/* eslint-disable i18next/no-literal-string */
import { memo, useCallback } from "react";
import { Button, ThemeButton } from "../Button/Button";
import CopyIcon from "../../assets/icons/copy.svg";
import cls from "./Code.module.scss";

interface CodeProps {
    textCode: string;
}

const Code = memo((props: CodeProps) => {
    const { textCode } = props;

    const onCopy = () => {
        navigator.clipboard.writeText(textCode);
    };

    return (
        <pre className={cls.Code}>
            <Button
                className={cls.copyBtn}
                theme={ThemeButton.CLEAR}
                onClick={onCopy}
            >
                <CopyIcon className={cls.copy} />
            </Button>

            <code>{textCode}</code>
        </pre>
    );
});
export default Code;
