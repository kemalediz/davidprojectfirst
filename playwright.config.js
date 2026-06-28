import { defineConfig, devices } from '@playwright/test';

// Headless WebGL: force ANGLE + SwiftShader so three.js can create a real
// WebGL context in CI / headless Chromium.
const webglArgs = [
  '--use-gl=angle',
  '--use-angle=swiftshader',
  '--enable-unsafe-swiftshader',
  '--ignore-gpu-blocklist',
  '--enable-webgl',
];

export default defineConfig({
  testDir: './tests/e2e',
  timeout: 60_000,
  expect: { timeout: 15_000 },
  fullyParallel: false,
  workers: 1,
  reporter: [['list']],
  use: {
    baseURL: 'http://localhost:8000',
    headless: true,
    launchOptions: { args: webglArgs },
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'], launchOptions: { args: webglArgs } },
    },
  ],
  webServer: {
    command: 'python3 backend.py',
    url: 'http://localhost:8000',
    reuseExistingServer: !process.env.CI,
    timeout: 30_000,
  },
});
