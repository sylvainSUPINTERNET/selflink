import { Suspense, lazy } from 'react';
import LoadingFormLink from './loading';

const LazyComponent = lazy(() => {
    // This delay simulates a longer module loading time
    return new Promise(resolve => {
        setTimeout(() => {
            return resolve(import('../../components/formLink.component') as any);
        }, 2000);
    });
});

export default function Analytics() {
    return (
        <Suspense fallback={LoadingFormLink()}>
                <LazyComponent/>
        </Suspense>

    )
}