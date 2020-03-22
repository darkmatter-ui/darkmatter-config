import ts from 'typescript'

const compilerOptions: ts.CompilerOptions = {
  target: ts.ScriptTarget.Latest,
  module: ts.ModuleKind.CommonJS,
  moduleResolution: ts.ModuleResolutionKind.NodeJs,
  jsx: ts.JsxEmit.React,
  lib: ['dom', 'dom.iterable', 'esnext', 'es2020'],

  allowJs: true,
  allowSyntheticDefaultImports: true,
  esModuleInterop: true,
  forceConsistentCasingInFileNames: true,
  inlineSourceMap: true,
  isolatedModules: true,
  noEmit: true,
  resolveJsonModule: true,
  skipLibCheck: true,

  /* Strict */
  strict: true /* enable all strict type checks */,

  /* Additional Checks */
  strictNullChecks: true,
  noUnusedLocals: true /* Report errors on unused locals. */,
  noUnusedParameters: true /* Report errors on unused parameters. */,

  /* Debugging Options */
  traceResolution: false /* Report module resolution log messages. */,
  listEmittedFiles: false /* Print names of generated files part of the compilation. */,
  listFiles: false /* Print names of files part of the compilation. */,
  pretty: true /* Stylize errors and messages using color and context. */,

  /* Types */
  types: ['node', 'jest'],
  typeRoots: ['node_modules/@types', 'src/types'],

  /* Code Generation Maps */
  declaration: true,
  declarationMap: true,
  removeComments: true,
}

export = {
  compilerOptions,
}
