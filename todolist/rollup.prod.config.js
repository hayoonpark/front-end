import rollupCommonConfig from "./rollup.common.config.js";
import terser from "@rollup/plugin-terser"

const config  = {...rollupCommonConfig}

config.plugins=[
    ...config.plugins,
    terser()
];

export default config;

