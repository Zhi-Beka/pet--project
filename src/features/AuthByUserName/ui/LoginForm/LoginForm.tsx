import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}

export const LoginForm = ({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.loginForm, {}, [className])}>
            <Input
                placeholder={t('username')}
                type='text'
                className={cls.input}
                autoFocus
            />
            <Input
                placeholder={t('password')}
                type='text'
                className={cls.input}
            />
            <Button className={cls.inputBtn}>{t('Login')}</Button>
        </div>
    );
};
