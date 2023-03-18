/* eslint-disable i18next/no-literal-string */
import { memo, useCallback } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { Input } from "shared/ui/Input/Input";
import { Button } from "shared/ui/Button/Button";
import { useSelector } from "react-redux";
import { getTextCommentForm } from "features/addCommentForm/model/selectors/getCommentForm";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppdispatch";

import {
    commentFormActions,
    commentFormReducer,
} from "features/addCommentForm/model/slice/commentFormSlice";
import {
    DynamicModuleLoader,
    ReducersList,
} from "shared/lib/components/DynamicModuleLoader";
import cls from "./CommentForm.module.scss";

export interface CommentFormProps {
    sendComment: (text: string) => void;
}

const reducers: ReducersList = {
    comment_form: commentFormReducer,
};

const CommentForm = memo((props: CommentFormProps) => {
    const { sendComment } = props;
    const { t } = useTranslation("");
    const text = useSelector(getTextCommentForm);
    const dispatch = useAppDispatch();

    const onChangeHandler = useCallback(
        (value: string) => {
            dispatch(commentFormActions.setText(value));
        },
        [dispatch]
    );

    const onSendHandler = useCallback(() => {
        sendComment(text || "");
        onChangeHandler("");
    }, [onChangeHandler, sendComment, text]);

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames(cls.CommentForm, {}, [])}>
                <Input
                    placeholder={t("Add comment")}
                    value={text}
                    onChange={onChangeHandler}
                />
                <Button onClick={onSendHandler}>Send</Button>
            </div>
        </DynamicModuleLoader>
    );
});
export default CommentForm;
