import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { Select } from "shared/ui/Select/Select";
import { memo, useCallback } from "react";
import { ListBox } from "shared/ui/ListBox/ListBox";
import { Country } from "../../models/types/country";

interface CountrySelectProps {
    className?: string;
    value?: Country;
    onChange?: (value: Country) => void;
    readonly?: boolean;
}

const options = [
    { value: Country.Armenia, content: Country.Armenia },
    { value: Country.Russia, content: Country.Russia },
    { value: Country.Belarus, content: Country.Belarus },
    { value: Country.Kyrgyzstan, content: Country.Kyrgyzstan },
    { value: Country.Ukraine, content: Country.Ukraine },
];

export const CountrySelect = memo(
    ({ className, value, onChange, readonly }: CountrySelectProps) => {
        const { t } = useTranslation("translation");

        const onChangeHandler = useCallback(
            (value: string) => {
                onChange?.(value as Country);
            },
            [onChange]
        );

        return (
            <ListBox
                onChange={onChangeHandler}
                items={options}
                readonly={readonly}
                value={value}
                direction='top right'
                label={t("Select country")}
            />
        );
    }
);
