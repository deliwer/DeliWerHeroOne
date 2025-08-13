build: {
  outDir: path.resolve(import.meta.dirname, "dist"), // changed from dist/public
  emptyOutDir: true,
  rollupOptions: {
    input: path.resolve(import.meta.dirname, "client", "index.html"), // ensure correct entry
  },
},
