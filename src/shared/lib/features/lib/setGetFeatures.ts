import { FeatureFlags } from '@/shared/types/featureFlags';
import { LOCAL_STORAGE_LAST_DESIGN_KEY } from '@/app/providers/ThemeProvider/lib/ThemeContext';

const defaultFeatures = {
  isAppRedesigned: (localStorage.getItem(LOCAL_STORAGE_LAST_DESIGN_KEY) || 'new') === 'new',
};

let featureFlags: FeatureFlags = {
  ...defaultFeatures,
};

export function setFeatureFlags(newFeatureFlags?: FeatureFlags) {
  if (newFeatureFlags) {
    featureFlags = newFeatureFlags;
  }
}

export function getFeatureFlag(flag: keyof FeatureFlags) {
  return featureFlags[flag] ?? true;
}

export function getAllFeatureFlags() {
  return featureFlags;
}
