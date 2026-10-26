import { expect } from "@playwright/test";
import { createBdd } from "playwright-bdd";

const { Given, When, Then } = createBdd();

Given("una partida con la palabra {string}", async ({ page }, palabra: string) => {
  await page.goto(`/?word=${palabra}`);
});

Given("una partida con el azar {string}", async ({ page }, azar: string) => {
  await page.goto(`/?azar=${azar}`);
});

When("el jugador adivina la letra {string}", async ({ page }, letra: string) => {
  const input = page.getByRole("textbox");
  await input.fill(letra);
  await input.press("Enter");
});

When("el jugador toca {string}", async ({ page }, boton: string) => {
  await page.getByRole("button", { name: boton }).click();
});

Then("se ve la palabra {string}", async ({ page }, esperada: string) => {
  await expect(page.getByTestId("word")).toHaveText(esperada);
});

Then("se ven {int} vidas", async ({ page }, vidas: number) => {
  await expect(page.getByTestId("lives")).toHaveText(String(vidas));
});

Then("se ve el mensaje {string}", async ({ page }, mensaje: string) => {
  await expect(page.getByTestId("message")).toHaveText(mensaje);
});

Then("se ven {int} partes del ahorcado", async ({ page }, partes: number) => {
  await expect(
    page.locator('[data-testid="parte"]:not([style*="display: none"])')).toHaveCount(partes);
});