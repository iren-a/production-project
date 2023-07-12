import { Project } from 'ts-morph';
import path from 'path';

const project = new Project();

project.addSourceFilesAtPaths(['src/**/*.ts', 'src/**/*.tsx']);

const files = project.getSourceFiles();
const uiPath = path.resolve(__dirname, '..', '..', 'src', 'shared', 'ui');
const sharedUiDirectory = project.getDirectory(uiPath);
const componentsDir = sharedUiDirectory?.getDirectories();

function isAbsolute(value: string) {
  const layers = ['app', 'shared', 'widgets', 'features', 'entities', 'pages'];
  return layers.some((layer) => value.startsWith(layer));
}

componentsDir?.forEach((dir) => {
  const indexFilePath = `${dir.getPath()}/index.ts`;
  const indexFile = dir.getSourceFile(indexFilePath);

  if (!indexFile) {
    const sourceCode = `export * from './${dir.getBaseName()}';`;
    const file = dir.createSourceFile(indexFilePath, sourceCode, {
      overwrite: true,
    });
    file.save();
  }
});

files.forEach((file) => {
  const importDeclarations = file.getImportDeclarations();

  importDeclarations.forEach((importDeclaration) => {
    const value = importDeclaration.getModuleSpecifierValue();
    const valueWithoutAlias = value.replace('@/', '');

    const segments = valueWithoutAlias.split('/');

    const isSharedLayer = segments?.[0] === 'shared';
    const isUiSlice = segments?.[1] === 'ui';

    if (isAbsolute(valueWithoutAlias) && isSharedLayer && isUiSlice) {
      const result = valueWithoutAlias.split('/').slice(0, 3).join('/');
      importDeclaration.setModuleSpecifier(`@/${result}`);
    }
  });
});

project.save();
