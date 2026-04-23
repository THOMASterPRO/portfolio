import { useT } from '../../i18n/useT';
import portrait from './images/portrait.jpg';
import './HomePage.css';

function Home() {
    const t = useT('home');

    return (
        <>
            <div className='home-layout'>
                <div className='home-column-left'>
                    <img className='portrait' src={portrait} alt={t('imageAlt')} />
                    <h1>{t('pageTitle')}</h1> 
                     <h2>{t('subTitles.profile')}</h2>
                    <p>{t('profileText')}</p>
                    <h2>{t('subTitles.education')}</h2>
                        <h3>{t('educationText.1.title')}</h3>
                            <p>{t('educationText.1.duration')}</p>
                            <p>{t('educationText.1.institute')}</p>
                        <h3>{t('educationText.2.title')}</h3>
                            <p>{t('educationText.2.duration')}</p>
                            <p>{t('educationText.2.institute')}</p>
                        <h3>{t('educationText.3.title')}</h3>
                            <p>{t('educationText.3.duration')}</p>
                            <p>{t('educationText.3.institute')}</p>
                </div>


                <div className='home-column-right'>

                    <h2>{t('subTitles.work')}</h2>
                        <h3>{t('workText.1.title')}</h3>
                        <h3>{t('workText.1.duration')}</h3>
                            <p>{t('workText.1.description')}</p>
                        <h3>{t('workText.2.title')}</h3>
                        <h3>{t('workText.2.duration')}</h3>
                            <p>{t('workText.2.description')}</p>
                   
                    <h2>{t('subTitles.programming')}</h2>
                    <div className="programming-list">
                        <div className="list-item">
                            <p className="dash"> - </p>
                            <p>{t('programmingText.1')}</p>
                        </div>
                        <div className="list-item">
                            <p className="dash"> - </p>
                            <p>{t('programmingText.2')}</p>
                        </div>
                        <div className="list-item">
                            <p className="dash"> - </p>
                            <p>{t('programmingText.3')}</p>
                        </div>
                        <div className="list-item">
                            <p className="dash"> - </p>
                            <p>{t('programmingText.4')}</p>
                        </div>
                        <div className="list-item">
                            <p className="dash"> - </p>
                            <p>{t('programmingText.5')}</p>
                        </div>
                        <div className="list-item">
                            <p className="dash"> - </p>
                            <p>{t('programmingText.6')}</p>
                        </div>
                    </div>
                    <h2>{t('subTitles.itMethods')}</h2>
                    <div className="programming-list">
                        <div className="list-item">
                            <p className="dash"> - </p>
                            <p>{t('itMethodsText.1')}</p>
                        </div>
                        <div className="list-item">
                            <p className="dash"> - </p>
                            <p>{t('itMethodsText.2')}</p>
                        </div>
                        <div className="list-item">
                            <p className="dash"> - </p>
                            <p>{t('itMethodsText.3')}</p>
                        </div>
                    </div>
                    <h2>{t('subTitles.design')}</h2>
                    <div className="programming-list">
                        <div className="list-item">
                            <p className="dash"> - </p>
                            <p>{t('designText.1')}</p>
                        </div>
                        <div className="list-item">
                            <p className="dash"> - </p>
                            <p>{t('designText.2')}</p>
                        </div>
                        <div className="list-item">
                            <p className="dash"> - </p>
                            <p>{t('designText.3')}</p>
                        </div>
                    </div>
                    <h2>{t('subTitles.ai')}</h2>
                    <div className="programming-list">
                        <div className="list-item">
                            <p className="dash"> - </p>
                            <p>{t('aiText.1')}</p>
                        </div>
                        <div className="list-item">
                            <p className="dash"> - </p>
                            <p>{t('aiText.2')}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
