import typescript from "@rollup/plugin-typescript";
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import terser from "@rollup/plugin-terser";
import { either, isNil, isEmpty, reject } from "rambda";

const tsConfig = {
  declaration: true,
  declarationDir: "dist",
  exclude: ["**/*.spec.ts", "node_modules/**/*"],
  rootDir: "src/",
};

const isDev = process.env.NODE_ENV === "development";
const isNilOrEmpty = either(isNil, isEmpty);

const plugins = reject(isNilOrEmpty)([
  peerDepsExternal(),
  typescript(tsConfig),
  isDev ? undefined : terser(),
]);

const commonConfig = {
  input: "src/index.ts",
  plugins,
  external: ["dns", "spf-parse", "ip-regex", "rambda"],
};

export default [
  {
    ...commonConfig,
    output: {
      dir: "./dist",
      entryFileNames: "index.js",
      format: "cjs",
      exports: "named",
    },
  },

  // ES
  {
    ...commonConfig,
    output: {
		 file: "dist/es/index.js",
		 format: "esm",
	 },
  },
];
