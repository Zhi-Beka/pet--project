import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';

export const BugButton = () => {
    const [errors, setErrors] = useState(false);
    const { t } = useTranslation();

    const onError = () => {
        setErrors(!errors);
    };

    useEffect(() => {
        if (errors) {
            throw new Error();
        }
    }, [errors]);

    // Just for testing Error boundary

    return <Button onClick={onError}>{t('Error')}</Button>;
};
