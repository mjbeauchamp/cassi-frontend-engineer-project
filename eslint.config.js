import svelteConfig from './svelte.config.js';
import { includeIgnoreFile } from '@eslint/compat';
import js from '@eslint/js';
import { defineConfig } from 'eslint/config';
import prettier from 'eslint-config-prettier';
import prettier_plugin from 'eslint-plugin-prettier';
import simple_import_sort_plugin from 'eslint-plugin-simple-import-sort';
import svelte from 'eslint-plugin-svelte';
import unused_imports_plugin from 'eslint-plugin-unused-imports';
import globals from 'globals';
import { fileURLToPath } from 'node:url';
import ts from 'typescript-eslint';

const gitignorePath = fileURLToPath(new URL('./.gitignore', import.meta.url));

const simple_import_sort_groups = [
	['^svelte', '^@\\\\w', '^\\\\$\\\\w'], // Modified to include $app imports
	['^($lib)'],
	['^\\\\u0000'],
	['^\\\\.\\\\.(?!/?$)', '^\\\\.\\\\./?$'],
	['^\\\\./(?=.*/)(?!/?$)', '^\\\\.(?!/?$)', '^\\\\./?$'],
	['^.+\\.?(css)$']
];

export default defineConfig(
	{
		ignores: ['build/**', '.svelte-kit/**', 'dist/**', '**/*.md', '**/*.mdx']
	},
	includeIgnoreFile(gitignorePath),
	js.configs.recommended,
	...ts.configs.recommended,
	...svelte.configs.recommended,
	prettier,
	...svelte.configs.prettier,
	{
		files: ['**/*.{js,ts,svelte}'],
		plugins: {
			prettier: prettier_plugin,
			'simple-import-sort': simple_import_sort_plugin,
			'unused-imports': unused_imports_plugin
		},
		languageOptions: {
			ecmaVersion: 2022,
			sourceType: 'module',
			globals: { ...globals.browser, ...globals.node }
		},
		rules: {
			'prettier/prettier': ['error'],
			'no-unused-vars': 'off', // Disable base rule
			'unused-imports/no-unused-vars': [
				'warn',
				{
					argsIgnorePattern: '^_',
					varsIgnorePattern: '^$$(Props|Events|Slots|Generic)$'
				}
			],
			'simple-import-sort/imports': [
				'error',
				{
					groups: simple_import_sort_groups
				}
			],
			'no-undef': 'off', // Handled by TypeScript,
			eqeqeq: ['error', 'always', { null: 'ignore' }]
		}
	},
	{
		files: ['**/*.ts'],
		languageOptions: {
			parserOptions: {
				project: './tsconfig.json',
				extraFileExtensions: ['.svelte']
			}
		}
	},
	{
		files: ['**/*.test.ts', '**/*.spec.ts'],
		rules: {
			'@typescript-eslint/no-explicit-any': 'off'
		}
	},
	{
		files: ['**/*.svelte'],
		languageOptions: {
			parserOptions: {
				project: './tsconfig.json',
				extraFileExtensions: ['.svelte'],
				parser: ts.parser,
				svelteConfig
			}
		},
		rules: {
			'simple-import-sort/imports': [
				'error',
				{
					groups: simple_import_sort_groups
				}
			],
			'svelte/sort-attributes': 'error',
			'svelte/no-navigation-without-resolve': 'off'
		}
	},
	{
		files: ['**/*.svelte.ts'],
		languageOptions: {
			parser: ts.parser,
			parserOptions: {
				project: './tsconfig.json',
				extraFileExtensions: ['.svelte']
			}
		}
	}
);
