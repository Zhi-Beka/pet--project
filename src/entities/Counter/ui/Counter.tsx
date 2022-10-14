import { Button } from 'shared/ui/Button/Button';
import { useDispatch, useSelector } from 'react-redux';

import { useTranslation } from 'react-i18next';
import { counterActions } from '../model/slices/CounterSlice';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';

export const Counter = () => {
    const dispatch = useDispatch();
    const counterValue = useSelector(getCounterValue);
    const { t } = useTranslation();
    const increment = () => {
        dispatch(counterActions.increment());
    };

    const decrement = () => {
        dispatch(counterActions.decrement());
    };
    return (
        <>
            <h1 data-testid='counter-value'> {counterValue}</h1>
            <Button data-testid='increment-btn' onClick={increment}>
                {t('increment')}
            </Button>
            <Button data-testid='decrement-btn' onClick={decrement}>
                {t('decrement')}
            </Button>
        </>
    );
};
