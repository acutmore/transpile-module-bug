import tsc from "typescript";
import * as fs from "node:fs";

const result = tsc.transpileModule(fs.readFileSync("./exports.ts", "utf-8"), {
    compilerOptions: {
        "verbatimModuleSyntax": false,
        "importsNotUsedAsValues": "error",
        "ignoreDeprecations": "5.0",
        "module": "ESNext"
    }
});

if (result.diagnostics?.length) {
    console.error(result.diagnostics);
}

fs.writeFileSync("./exports.transpile.js", result.outputText);
