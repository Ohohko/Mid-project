import React from 'react'

function ToggleDark() {
  return (
    function MyAwesomeThemeComponent() {
        const [theme, setTheme] = React.useState('light');
        const toggleTheme = () => {
          setTheme(theme === 'dark' ? 'light' : 'dark');
        };
        // initially set the theme and "listen" for changes to apply them to the HTML tag
        React.useEffect(() => {
          document.querySelector('html').setAttribute('data-theme', theme);
        }, [theme]);
        return (
          <label className="swap swap-rotate">
            <input onClick={toggleTheme} type="checkbox" />
            <div className="swap-on">DARKMODE</div>
            <div className="swap-off">LIGHTMODE</div>
          </label>
        );
      }


  )
}

export default ToggleDark