import AmpHtmlValidator from 'next/dist/compiled/amphtml-validator';
import 'next/dist/next-server/server/node-polyfill-fetch';
interface AmpValidation {
    page: string;
    result: {
        errors: AmpHtmlValidator.ValidationError[];
        warnings: AmpHtmlValidator.ValidationError[];
    };
}
interface PathMap {
    page: string;
    query?: {
        [key: string]: string | string[];
    };
}
interface ExortPageInput {
    path: string;
    pathMap: PathMap;
    distDir: string;
    buildId: string;
    outDir: string;
    pagesDataDir: string;
    renderOpts: RenderOpts;
    buildExport?: boolean;
    serverRuntimeConfig: string;
    subFolders: string;
    serverless: boolean;
}
interface ExportPageResults {
    ampValidations: AmpValidation[];
    fromBuildExportRevalidate?: number;
    error?: boolean;
}
interface RenderOpts {
    runtimeConfig?: {
        [key: string]: any;
    };
    params?: {
        [key: string]: string | string[];
    };
    ampPath?: string;
    ampValidatorPath?: string;
    ampSkipValidation?: boolean;
    hybridAmp?: boolean;
    inAmpMode?: boolean;
}
export default function exportPage({ path, pathMap, distDir, buildId, outDir, pagesDataDir, renderOpts, buildExport, serverRuntimeConfig, subFolders, serverless, }: ExortPageInput): Promise<ExportPageResults>;
export {};
