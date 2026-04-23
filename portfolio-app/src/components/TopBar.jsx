import './TopBar.css';
import logo from '../assets/tbLogo.svg';
import { useLocation } from 'react-router-dom';
import { useI18n } from '../i18n/I18nProvider';
import { useT } from '../i18n/useT';
import PillNav from './PillNav';
import './PillNav.css';

const TopBar = () => {
    const location = useLocation();
    const { language, setLanguage } = useI18n();
    const t = useT('common');

    const toggleLanguage = () => setLanguage(language === 'en' ? 'nl' : 'en');
    const navItems = [
        { label: t('topbar.nav.home'), href: '/' },
        // { label: t('topbar.nav.projects'), href: '/projects' },
        { label: t('topbar.nav.contact'), href: '/contact' }
    ];

    const activeHref =
        navItems.find(item =>
            location.pathname === item.href ||
            (item.href !== '/' && location.pathname.startsWith(`${item.href}/`))
        )?.href || '/';

    return (
        <>
            <nav className="top-bar">
                <PillNav
                    logo={logo}
                    logoAlt="Company Logo"
                    items={navItems}
                    activeHref={activeHref}
                    className="custom-nav"
                    ease="power2.easeOut"
                    baseColor="#000000"
                    pillColor="#ffffff"
                    hoveredPillTextColor="#ffffff"
                    pillTextColor="#000000"
                    mobileLanguageButton={(
                        <button
                            className="language-btn"
                            onClick={toggleLanguage}
                            aria-label={t('topbar.language.label')}
                        >
                            {language.toUpperCase()}
                        </button>
                    )}
                    theme="light"
                    initialLoadAnimation={false}
                />

                <div className="top-bar-actions topbar-desktop-only">
                    <button
                        className="language-btn"
                        onClick={toggleLanguage}
                        aria-label={t('topbar.language.label')}
                    >
                        {language.toUpperCase()}
                    </button>
                </div>
            </nav>
        </>
    );
};

export default TopBar;
