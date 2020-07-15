import { compilation } from 'webpack';
import { SimpleWebpackError } from './simpleWebpackError';
export declare function getModuleBuildError(compilation: compilation.Compilation, input: any): SimpleWebpackError | false;
