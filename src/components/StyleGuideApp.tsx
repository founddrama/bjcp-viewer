import React, { useCallback, useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import StyleList from './StyleList';
import StyleDetail from './StyleDetail';
import { BJCPStyle } from '../types';

type StyleGuideProps = {
  styles: BJCPStyle[];
};

const StyleGuideApp = React.memo(function StyleGuideApp(props: StyleGuideProps) {
  const location = useLocation();
  const history = useHistory();

  const findStyleById = useCallback((styleId: string): BJCPStyle | undefined => (
    props.styles.find((style) => style['@_id'] === styleId)
  ), [props]);

  const setSelectedStyleById = useCallback((styleId: string): void => {
    setSelectedStyle(findStyleById(styleId));
  }, [findStyleById]);

  const getSelectedStyleFromPath = (pathname: string): BJCPStyle | undefined => {
    const styleId = pathname.replace(/^\//, '');
    return findStyleById(styleId);
  };

  const setSelectedStyleFromPath = useCallback((pathname: string): void => {
    const styleId = pathname.replace(/^\//, '');
    setSelectedStyleById(styleId);
  }, [setSelectedStyleById]);

  const { pathname } = location;
  const initStyle = getSelectedStyleFromPath(pathname);

  const [ selectedStyle, setSelectedStyle ] = useState<BJCPStyle | undefined>(initStyle);
  const [ locationPaths, setLocationPaths ] = useState<(string | undefined)[]>([]);

  const handleStyleChange = (styleId: string): void => {
    setSelectedStyleById(styleId);
    history.push(`/${styleId}`);
  };

  const onCloseClick = (): void => {
    setSelectedStyle(undefined);
    history.push(`/`);
  };

  useEffect(() => {
    return history.listen((location) => {
      if (history.action === 'PUSH') {
        setLocationPaths([location.pathname]);
      }
  
      if (history.action === 'POP') {
        if (locationPaths[1] === location.pathname) {
          setLocationPaths(([_, ...keys ]) => keys);
        } else {
          setLocationPaths((keys) => [location.pathname, ...keys]);
        }
        setSelectedStyleFromPath(location.pathname);
      }
    });
  }, [history, locationPaths, setSelectedStyleFromPath]);

  return (
    <main>
      <h1>2021 BJCP Style Guide</h1>
      <StyleList styles={props.styles} style={selectedStyle} emitSelectedStyle={handleStyleChange} />
      <StyleDetail style={selectedStyle} onCloseClick={onCloseClick} />
    </main>
  );
});

export default StyleGuideApp;
