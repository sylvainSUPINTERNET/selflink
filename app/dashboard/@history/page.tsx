import { Suspense, lazy } from 'react';
import LoadingHistory from './loading';

const LazyComponent = lazy(() => {
    // This delay simulates a longer module loading time
    return new Promise(resolve => {
        setTimeout(() => {
            return resolve(import('../../components/history.component') as any);
        }, 2000);
    });
});

export default function History() {
    return (
        <Suspense fallback={LoadingHistory()}>
                <LazyComponent/>
        </Suspense>

    )
}