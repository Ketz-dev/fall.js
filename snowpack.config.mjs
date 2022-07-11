/** @type {import("snowpack").SnowpackUserConfig} */
export default {
    mount: {
        public: { url: '/', static: true },
        src: { url: '/dist' },
    },
    plugins: [
        ['@snowpack/plugin-typescript']
    ],
    optimize: {
        bundle: true,
        minify: true,
        sourcemap: true
    },
    alias: {
        '@Core': './src/Core',
        '@FMath': './src/FMath',
        '@Physics': './src/Physics',
        '@Geometry': './src/Geometry'
    }
};