.PHONY: help install build start start-dev start-prod clean clean-build lint eslint test test-dev

# author: Sazal Ahamed
# the backend lover
# github: https://github.com/DevSazal
# url: https://sazal.vercel.app

#### info
help:
	@echo ""
	@echo "supported make commands:"
	@echo ""
	@echo "- install: install node.js app"
	@echo ""
	@echo "- build: builds service."
	@echo ""
	@echo "- clean: cleans service, node_modules"
	@echo "  - clean-build: cleans build folder."
	@echo ""
	@echo "- start: start node app."
	@echo "  - start-dev: start development mode."
	@echo "  - start-prod: start production mode."
	@echo ""
	@echo "- test: e2e testing with production mode"
	@echo "  - test-dev: e2e testing with development mode."
	@echo ""
	@echo "- lint: fix with prettier service."
	@echo "- eslint: fix with eslint service."
	@echo ""
####

#### install
install:
	@npm i

#### build
build:
	@npm run build
####

#### start
start:
	@npm run start
####

#### start development
start-dev:
	@npm run start:dev
####

#### start production
start-prod:
	@npm run start:prod
####


#### clean
clean:
	@rm -rf build node_modules package-lock.json

clean-build:
	@rm -rf build
####


#### lint
lint:
	@npm run lint

eslint:
	@npm run eslint
####


#### Test - production, development
test:
	@npm run test

test-dev:
	@npm run test:e2e:dev
####
