module.exports = {
  env: {
    SC_DISABLE_SPEEDY: true,
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    //
    // This option is rarely needed, and should be reserved for advanced
    // setups. You may be looking for `ignoreDevErrors` instead.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
}
