import {extensionStorage} from './extensionStorage';

const DEFAULT_VEGA_PROVIDER_SOURCE = {
  author: 'Zenda-Cross',
  url: 'https://raw.githubusercontent.com/Zenda-Cross/vega-providers/refs/heads/main',
};

/**
 * Ensure the official Vega provider repository is available automatically.
 * Existing custom provider sources are preserved; Zenda-Cross is only made
 * the default when the user has no provider source configured yet.
 */
export const initializeDefaultProviderSource = (): void => {
  const sources = extensionStorage.getProviderSources();
  const exists = sources.some(
    source =>
      source.author === DEFAULT_VEGA_PROVIDER_SOURCE.author &&
      source.url === DEFAULT_VEGA_PROVIDER_SOURCE.url,
  );

  if (!exists) {
    extensionStorage.addProviderSources(
      DEFAULT_VEGA_PROVIDER_SOURCE.author,
      DEFAULT_VEGA_PROVIDER_SOURCE.url,
    );
  }
};

initializeDefaultProviderSource();
