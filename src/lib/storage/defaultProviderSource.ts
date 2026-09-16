import {extensionStorage} from './extensionStorage';

const DEFAULT_VEGA_PROVIDER_SOURCE = {
  author: 'Telebotfaroff',
  url: 'https://raw.githubusercontent.com/Telebotfaroff/vega-providers/refs/heads/main',
};

const PREVIOUS_VEGA_PROVIDER_AUTHOR = 'Zenda-Cross';

/**
 * Register RHstream's own Vega provider repository as the default source.
 * The previous upstream Zenda-Cross source is removed so provider discovery
 * and updates come from Telebotfaroff/vega-providers instead.
 */
export const initializeDefaultProviderSource = (): void => {
  extensionStorage.removeProviderSource(PREVIOUS_VEGA_PROVIDER_AUTHOR);

  extensionStorage.addProviderSources(
    DEFAULT_VEGA_PROVIDER_SOURCE.author,
    DEFAULT_VEGA_PROVIDER_SOURCE.url,
  );

  extensionStorage.setDefaultProviderSource(
    DEFAULT_VEGA_PROVIDER_SOURCE.author,
  );
};

initializeDefaultProviderSource();
