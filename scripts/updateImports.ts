import { Project } from 'ts-morph';

const project = new Project();

project.addSourceFilesAtPaths([
  'src/**/*.ts',
  'src/**/*.tsx',
]);

function isAbsolute(value: string) {
  const layers = ['app', 'shared', 'widgets', 'features', 'entities', 'pages'];
  return layers.some((layer) => value.startsWith(layer));
}

const files = project.getSourceFiles();

files.forEach((file) => {
  const importDeclarations = file.getImportDeclarations();

  importDeclarations.forEach((importDeclaration) => {
    const value = importDeclaration.getModuleSpecifierValue();

    if (isAbsolute(value)) {
      importDeclaration.setModuleSpecifier(`@/${value}`);
    }
  });
});

project.save();
