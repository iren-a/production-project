export type Mods = Record<string, boolean | undefined>;

export function classNames(
  cls: string,
  mods: Mods = {},
  additional: (string | undefined)[] = [],
): string {
  return [
    cls,
    ...additional.filter(Boolean),
    ...Object.entries(mods)
      .filter(([cls, value]) => !!value)
      .map(([cls, value]) => cls),
  ].join(' ');
}
