import { useT } from '../../../i18n/useT';
import './SphaeraOne.css';

function SphaeraOne() {
    const t = useT('sphaera');

    return (
        <>
            <h1>{t('pageTitle')}</h1>
            <p className='description'>{t('content.description')}</p>
            <p>{t('content.t1')}</p>
        </>
    )
}

export default SphaeraOne
