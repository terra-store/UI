run: ## Run development server
	yarn start

build: ## build deployment server package
	yarn build

clean: ## clean build directory
	rm -rf build

test: ## Runs unit tests
	yarn test --watchAll=false --coverage  --collectCoverageFrom=src/**/*.tsx --collectCoverageFrom=!src/index.tsx --collectCoverageFrom=less!src/react-app-env.d.ts

integration-test: ## Runs Integration tests
	@echo "Not yet Implemented"

lint: ## Lint the code
	yarn run eslint **/*.tsx
	yarn run stylelint src/**/*.css

setup: ## Run npm install to setup project
	npm install

help: ## Display this help text
	@echo "Usage: make <target>"
	@echo ""
	@echo Available Targets:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'


