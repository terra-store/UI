run: ## Run development server
	yarn start

build:
	yarn build

clean:
	yarn clean

test: ## Runs unit tests
	yarn test --watchAll=false

integration-test: ## Runs Integration tests
	@echo "Not yet Implemented"

help: ## Display this help text
	@echo "Usage: make <target>"
	@echo ""
	@echo Available Targets:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'


