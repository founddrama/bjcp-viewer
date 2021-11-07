import React, { useCallback, useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import BeerStyleList from './BeerStyleList';
import BeerStyleDetail from './BeerStyleDetail';
import { BJCPStyle } from '../beer-style-types';

type StyleGuideProps = {
  styles: BJCPStyle[];
};

export default function StyleGuideApp(props: StyleGuideProps) {
  const [ selectedStyle, setSelectedStyle ] = useState<BJCPStyle | undefined>();
  const [ locationKeys, setLocationKeys ] = useState<(string | undefined)[]>([]);

  const findStyleById = useCallback((styleId: string): BJCPStyle | undefined => (
    props.styles.find((style) => style['@_id'] === styleId)
  ), [props]);

  const setSelectedStyleById = useCallback((styleId: string): void => {
    setSelectedStyle(findStyleById(styleId));
  }, [findStyleById]);

  const setSelectedStyleFromPath = useCallback((pathname: string): void => {
    const styleId = pathname.replace(/^\//, '');
    setSelectedStyleById(styleId);
  }, [setSelectedStyleById]);

  const handleStyleChange = (styleId: string): void => {
    setSelectedStyleById(styleId);
    history.push(`/${styleId}`);
  };

  const onCloseClick = (): void => {
    setSelectedStyle(undefined);
    history.push(`/`);
  };

  const location = useLocation();
  const history = useHistory();
  useEffect(() => {
    return history.listen((location) => {
      if (history.action === 'PUSH') {
        setLocationKeys([location.key]);
      }
  
      if (history.action === 'POP') {
        if (locationKeys[1] === location.key) {
          setLocationKeys(([_, ...keys ]) => keys);
        } else {
          setLocationKeys((keys) => [location.key, ...keys]);
        }
        setSelectedStyleFromPath(location.pathname);
      }
    });
  }, [history, locationKeys, setSelectedStyleFromPath]);

  const { pathname } = location;
  if (!selectedStyle && pathname !== '/') {
    setSelectedStyleFromPath(pathname);
  }

  return (
    <main>
      <h1>2015 BJCP Style Guide</h1>
      <BeerStyleList styles={props.styles} style={selectedStyle} emitSelectedStyle={handleStyleChange} />
      <BeerStyleDetail style={selectedStyle} onCloseClick={onCloseClick} />
    </main>
  );
}
