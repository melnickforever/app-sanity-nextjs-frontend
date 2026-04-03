# Portfolio Site

## Testing & Continuous Integration

This project uses [Jest](https://jestjs.io/) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) for unit testing.

### Running Tests Locally

- Run all tests:
  ```bash
  pnpm test
  ```
- Run tests with coverage:
  ```bash
  pnpm test:coverage
  ```

### Pre-push Hook

A [Husky](https://typicode.github.io/husky/) pre-push hook is configured to run tests with coverage before any push. Pushes will be blocked if tests or coverage thresholds fail.

### GitHub Actions

All pushes and pull requests to `main` run tests and enforce coverage via [GitHub Actions](https://github.com/features/actions). See `.github/workflows/test.yml`.

### Coverage Thresholds

- Global coverage thresholds are set to 80% for statements, branches, functions, and lines. You can adjust these in `jest.config.js`.

### Adding Tests

- Place test files alongside components, e.g. `src/components/Foo.test.tsx`.
- Use [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) for rendering and assertions.

---

For questions or issues, see the comments in config files or open an issue.

Comming soon.....