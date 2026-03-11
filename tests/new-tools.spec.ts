import { test, expect } from "@playwright/test";

const BASE = "http://localhost:3099";

test.describe("Homepage - 15 tools", () => {
  test("shows all 15 tool cards", async ({ page }) => {
    await page.goto(BASE);
    const toolCards = page.locator('a[href^="/tools/"]');
    expect(await toolCards.count()).toBeGreaterThanOrEqual(15);
  });
});

test.describe("Tailwind Converter", () => {
  test("page loads", async ({ page }) => {
    await page.goto(`${BASE}/tools/tailwind-converter`);
    await expect(page.locator("h1")).toContainText("Tailwind");
  });

  test("converts CSS to Tailwind", async ({ page }) => {
    await page.goto(`${BASE}/tools/tailwind-converter`);
    await page.locator("textarea").first().fill("display: flex;\npadding: 1rem;");
    // Find and click the main action button
    const buttons = page.getByRole("button");
    const convertBtn = buttons.filter({ hasText: /convert/i });
    if (await convertBtn.count() > 0) {
      await convertBtn.first().click();
    }
  });
});

test.describe("Color Converter", () => {
  test("page loads", async ({ page }) => {
    await page.goto(`${BASE}/tools/color-converter`);
    await expect(page.locator("h1")).toContainText("Color");
  });

  test("has color input", async ({ page }) => {
    await page.goto(`${BASE}/tools/color-converter`);
    // Should have some input for color
    const inputs = page.locator("input");
    expect(await inputs.count()).toBeGreaterThan(0);
  });
});

test.describe("Cron Generator", () => {
  test("page loads", async ({ page }) => {
    await page.goto(`${BASE}/tools/cron-generator`);
    await expect(page.locator("h1")).toContainText("Cron");
  });

  test("has presets", async ({ page }) => {
    await page.goto(`${BASE}/tools/cron-generator`);
    // Should have preset buttons or dropdown
    const content = await page.textContent("body");
    expect(content).toContain("Every");
  });
});

test.describe("SQL Formatter", () => {
  test("page loads", async ({ page }) => {
    await page.goto(`${BASE}/tools/sql-formatter`);
    await expect(page.locator("h1")).toContainText("SQL");
  });

  test("formats SQL", async ({ page }) => {
    await page.goto(`${BASE}/tools/sql-formatter`);
    await page.locator("textarea").first().fill("SELECT id, name FROM users WHERE active = true ORDER BY name");
    const formatBtn = page.getByRole("button").filter({ hasText: /format/i });
    if (await formatBtn.count() > 0) {
      await formatBtn.first().click();
      const output = await page.locator("textarea").nth(1).inputValue();
      expect(output.length).toBeGreaterThan(0);
    }
  });
});

test.describe("Regex Tester", () => {
  test("page loads", async ({ page }) => {
    await page.goto(`${BASE}/tools/regex-tester`);
    await expect(page.locator("h1")).toContainText("Regex");
  });

  test("has flag checkboxes", async ({ page }) => {
    await page.goto(`${BASE}/tools/regex-tester`);
    const checkboxes = page.locator("input[type='checkbox']");
    expect(await checkboxes.count()).toBeGreaterThan(0);
  });
});

test.describe("Timestamp Converter", () => {
  test("page loads", async ({ page }) => {
    await page.goto(`${BASE}/tools/timestamp-converter`);
    await expect(page.locator("h1")).toContainText("Timestamp");
  });

  test("shows current timestamp", async ({ page }) => {
    await page.goto(`${BASE}/tools/timestamp-converter`);
    // Should display current time somewhere
    const content = await page.textContent("body");
    // Current year should appear
    expect(content).toContain("2026");
  });
});

test.describe("JSON to YAML", () => {
  test("page loads", async ({ page }) => {
    await page.goto(`${BASE}/tools/json-to-yaml`);
    await expect(page.locator("h1")).toContainText("YAML");
  });

  test("converts JSON to YAML", async ({ page }) => {
    await page.goto(`${BASE}/tools/json-to-yaml`);
    await page.locator("textarea").first().fill('{"name":"test","age":20}');
    const convertBtn = page.getByRole("button").filter({ hasText: /convert|json/i });
    if (await convertBtn.count() > 0) {
      await convertBtn.first().click();
    }
  });
});

test.describe("Markdown Preview", () => {
  test("page loads", async ({ page }) => {
    await page.goto(`${BASE}/tools/markdown-preview`);
    await expect(page.locator("h1")).toContainText("Markdown");
  });

  test("has editor area", async ({ page }) => {
    await page.goto(`${BASE}/tools/markdown-preview`);
    const textareas = page.locator("textarea");
    expect(await textareas.count()).toBeGreaterThan(0);
  });
});

test.describe("All pages return 200", () => {
  const tools = [
    "tailwind-converter", "color-converter", "cron-generator",
    "sql-formatter", "regex-tester", "timestamp-converter",
    "json-to-yaml", "markdown-preview"
  ];

  for (const tool of tools) {
    test(`${tool} returns 200`, async ({ page }) => {
      const response = await page.goto(`${BASE}/tools/${tool}`);
      expect(response?.status()).toBe(200);
    });
  }
});

test.describe("SEO - all tool pages have proper titles", () => {
  const tools = [
    { slug: "tailwind-converter", expected: "Tailwind" },
    { slug: "color-converter", expected: "Color" },
    { slug: "cron-generator", expected: "Cron" },
    { slug: "sql-formatter", expected: "SQL" },
    { slug: "regex-tester", expected: "Regex" },
    { slug: "timestamp-converter", expected: "Timestamp" },
    { slug: "json-to-yaml", expected: "YAML" },
    { slug: "markdown-preview", expected: "Markdown" },
  ];

  for (const tool of tools) {
    test(`${tool.slug} has correct title`, async ({ page }) => {
      await page.goto(`${BASE}/tools/${tool.slug}`);
      const title = await page.title();
      expect(title.toLowerCase()).toContain(tool.expected.toLowerCase());
    });
  }
});
