import {extensionStorage} from './extensionStorage';

const DEFAULT_VEGA_PROVIDER_SOURCE = {
  author: 'Zenda-Cross',
  url: 'https://raw.githubusercontent.com/Zenda-Cross/vega-providers/refs/heads/main',
};

/**
 * Ensure the upstream Vega provider repository is registered and selected
 * automatically. Existing provider sources are preserved.
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

  extensionStorage.setDefaultProviderSource(
    DEFAULT_VEGA_PROVIDER_SOURCE.author,
  );
};

initializeDefaultProviderSource();
